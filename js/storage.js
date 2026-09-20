/**
 * Career Preparation & Skill Mastery Checklist
 * Centralized Storage Module (localStorage, Export, Import, Reset, Diagnostics)
 */

const STORAGE_KEY = 'career_mastery_app_state_v1';

const Storage = {
  memoryFallback: null,
  isStorageAvailable: true,

  init() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      this.isStorageAvailable = true;
    } catch (e) {
      console.warn('localStorage is not available in this browser environment. Using in-memory fallback.', e);
      this.isStorageAvailable = false;
    }
  },

  /**
   * Load entire state from localStorage, or initialize with seed data
   */
  load() {
    this.init();
    try {
      if (this.isStorageAvailable) {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && parsed.tracks && Array.isArray(parsed.tracks)) {
            return this.validateAndMigrate(parsed);
          }
        }
      } else if (this.memoryFallback) {
        return this.memoryFallback;
      }
    } catch (err) {
      console.error('Failed to parse state from localStorage; falling back to default seed data:', err);
    }

    // Default seed data
    const initial = JSON.parse(JSON.stringify(window.INITIAL_APP_DATA || {}));
    this.save(initial);
    return initial;
  },

  /**
   * Persist state to localStorage
   */
  save(state) {
    if (!state) return false;
    try {
      if (this.isStorageAvailable) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } else {
        this.memoryFallback = JSON.parse(JSON.stringify(state));
      }
      return true;
    } catch (err) {
      console.error('Error saving state to localStorage (possible quota exceeded):', err);
      if (window.Utils) {
        window.Utils.showToast('Storage quota warning: unable to save changes locally', 'error');
      }
      return false;
    }
  },

  /**
   * Ensure backwards compatibility & data integrity
   */
  validateAndMigrate(data) {
    if (!data.settings) data.settings = {};
    if (!data.gamification) data.gamification = {};
    if (!data.projects) data.projects = [];
    if (!data.exams) data.exams = [];
    if (!data.revisions) data.revisions = [];

    // Ensure settings defaults
    const defaultSettings = window.INITIAL_APP_DATA?.settings || {};
    data.settings = { ...defaultSettings, ...data.settings };

    return data;
  },

  /**
   * Export all data as a downloadable JSON file
   */
  exportBackup(state) {
    try {
      const jsonStr = JSON.stringify(state, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const today = window.Utils ? window.Utils.getTodayString() : new Date().toISOString().split('T')[0];
      const filename = `career-mastery-backup-${today}.json`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      if (window.Utils) {
        window.Utils.showToast('Backup successfully exported!', 'success');
      }
      return true;
    } catch (err) {
      console.error('Failed to export backup:', err);
      if (window.Utils) {
        window.Utils.showToast('Export failed: ' + err.message, 'error');
      }
      return false;
    }
  },

  /**
   * Import data from JSON string
   */
  importBackup(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || !parsed.tracks || !Array.isArray(parsed.tracks)) {
        throw new Error('Invalid format: File is missing required track data.');
      }
      const migrated = this.validateAndMigrate(parsed);
      this.save(migrated);
      return migrated;
    } catch (err) {
      throw new Error('Import error: ' + err.message);
    }
  },

  /**
   * Reset all state to initial factory state
   */
  resetAll() {
    const cleanSeed = JSON.parse(JSON.stringify(window.INITIAL_APP_DATA || {}));
    this.save(cleanSeed);
    return cleanSeed;
  }
};

window.Storage = Storage;
