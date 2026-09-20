/**
 * Career Preparation & Skill Mastery Checklist
 * Settings Module (Theme, Target Dates, Goals, Intervals, Backups, Destructive Resets)
 */

const SettingsView = {
  render() {
    const container = document.getElementById('view-settings');
    if (!container) return;

    const settings = window.State.getSettings();
    const isDark = settings.theme === 'dark' || (!settings.theme && !document.body.classList.contains('light-theme'));
    const isStorageOk = window.Storage.isStorageAvailable;

    container.innerHTML = `
      <div class="settings-header-bar">
        <div>
          <h1 class="page-title">Application Settings</h1>
          <p class="page-subtitle">Configure targets, goals, spaced revision intervals, theme, and data backups.</p>
        </div>
      </div>

      <!-- Limitation Notice Banner -->
      <div class="alert-banner alert-warning mb-4">
        <div class="alert-icon"><i data-lucide="shield-alert"></i></div>
        <div class="alert-text">
          <strong>Browser-Local Data Notice:</strong> 
          Your progress is securely stored in this browser via <code>localStorage</code>. It persists through reloads, browser restarts, and Vercel redeployments. 
          However, clearing browser history/cookies or switching to another device will not transfer data automatically. <strong>Export JSON backups periodically</strong> to preserve your records across devices.
        </div>
      </div>

      <div class="settings-layout">
        <!-- Section 1: Appearance & Theme -->
        <div class="settings-card card">
          <div class="settings-card-header">
            <div class="d-flex align-center gap-2">
              <i data-lucide="sun-moon" class="text-primary"></i>
              <h3>Appearance & Theme</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">Choose the interface theme that suits your study hours.</p>

          <div class="theme-toggle-group">
            <button 
              class="theme-select-btn ${!isDark ? 'active' : ''}" 
              onclick="SettingsView.setTheme('light')">
              <i data-lucide="sun"></i>
              <span>Light Mode</span>
            </button>
            <button 
              class="theme-select-btn ${isDark ? 'active' : ''}" 
              onclick="SettingsView.setTheme('dark')">
              <i data-lucide="moon"></i>
              <span>Dark Mode</span>
            </button>
          </div>
        </div>

        <!-- Section 2: Target Date & Phases -->
        <div class="settings-card card">
          <div class="settings-card-header">
            <div class="d-flex align-center gap-2">
              <i data-lucide="calendar" class="text-primary"></i>
              <h3>Target Date & Phases</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">Configure your final milestone date and preparation roadmap.</p>

          <form onsubmit="event.preventDefault(); SettingsView.saveTargetSettings();">
            <div class="form-row mb-3">
              <div class="form-group flex-1">
                <label class="form-label">Target Date</label>
                <input type="date" id="set-target-date" class="input" value="${window.Utils.escapeHtml(settings.targetDate || '2027-01-01')}">
              </div>
              <div class="form-group flex-2">
                <label class="form-label">Target Title</label>
                <input type="text" id="set-target-title" class="input" value="${window.Utils.escapeHtml(settings.targetTitle || '1 January 2027 Career Preparation Target')}">
              </div>
            </div>

            <div class="form-row mb-3">
              <div class="form-group flex-1">
                <label class="form-label">Phase 1 Title & Dates</label>
                <input type="text" id="set-p1-title" class="input mb-1" value="${window.Utils.escapeHtml(settings.phase1Title || 'Phase 1: Foundation & Mastery')}">
                <input type="text" id="set-p1-dates" class="input input-sm text-muted" value="${window.Utils.escapeHtml(settings.phase1Dates || 'Sep – Dec 2026')}">
              </div>
              <div class="form-group flex-1">
                <label class="form-label">Phase 2 Title & Dates</label>
                <input type="text" id="set-p2-title" class="input mb-1" value="${window.Utils.escapeHtml(settings.phase2Title || 'Phase 2: Assessments & Applications')}">
                <input type="text" id="set-p2-dates" class="input input-sm text-muted" value="${window.Utils.escapeHtml(settings.phase2Dates || 'Jan – Mar 2027')}">
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-sm">Save Target Settings</button>
          </form>
        </div>

        <!-- Section 3: Study Goals -->
        <div class="settings-card card">
          <div class="settings-card-header">
            <div class="d-flex align-center gap-2">
              <i data-lucide="target" class="text-primary"></i>
              <h3>Daily & Weekly Goals</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">Motivational benchmarks. Never used to block progress.</p>

          <form onsubmit="event.preventDefault(); SettingsView.saveGoals();">
            <div class="form-row mb-3">
              <div class="form-group flex-1">
                <label class="form-label">Daily Tasks Goal</label>
                <input type="number" min="1" max="25" id="set-daily-tasks" class="input" value="${settings.dailyGoalTasks || 3}">
              </div>
              <div class="form-group flex-1">
                <label class="form-label">Daily Study Hours Goal</label>
                <input type="number" step="0.5" min="0.5" max="16" id="set-daily-hours" class="input" value="${settings.dailyGoalHours || 2.5}">
              </div>
            </div>

            <div class="form-row mb-3">
              <div class="form-group flex-1">
                <label class="form-label">Weekly Tasks Goal</label>
                <input type="number" min="1" max="100" id="set-weekly-tasks" class="input" value="${settings.weeklyGoalTasks || 15}">
              </div>
              <div class="form-group flex-1">
                <label class="form-label">Weekly Study Hours Goal</label>
                <input type="number" step="1" min="1" max="80" id="set-weekly-hours" class="input" value="${settings.weeklyGoalHours || 12}">
              </div>
            </div>

            <div class="form-group mb-3">
              <label class="custom-checkbox-label">
                <input type="checkbox" id="set-inc-projects" ${settings.includeProjectsInOverallProgress ? 'checked' : ''}>
                <span>Include portfolio project checklist milestones in overall completion %</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-sm">Save Goals</button>
          </form>
        </div>

        <!-- Section 4: Spaced Revision Intervals -->
        <div class="settings-card card">
          <div class="settings-card-header">
            <div class="d-flex align-center gap-2">
              <i data-lucide="repeat" class="text-primary"></i>
              <h3>Spaced Revision Intervals</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">Set sequence of days for spaced review iterations (comma-separated).</p>

          <form onsubmit="event.preventDefault(); SettingsView.saveIntervals();">
            <div class="form-group mb-3">
              <label class="form-label">Intervals in Days (e.g. 1, 3, 7, 14, 30)</label>
              <input type="text" id="set-intervals" class="input" value="${(settings.revisionIntervals || [1, 3, 7, 14, 30]).join(', ')}">
            </div>

            <button type="submit" class="btn btn-primary btn-sm">Save Intervals</button>
          </form>
        </div>

        <!-- Section 5: Data Backup & Restore -->
        <div class="settings-card card">
          <div class="settings-card-header">
            <div class="d-flex align-center gap-2">
              <i data-lucide="database" class="text-primary"></i>
              <h3>Data Persistence & Backup</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">
            Storage Engine: <strong>${isStorageOk ? 'Browser localStorage (Healthy)' : 'In-Memory Fallback'}</strong>
          </p>

          <div class="d-flex flex-wrap gap-3">
            <button class="btn btn-secondary" onclick="Storage.exportBackup(State.getState())">
              <i data-lucide="download"></i> Export JSON Backup
            </button>

            <label class="btn btn-secondary cursor-pointer">
              <i data-lucide="upload"></i> Restore from JSON
              <input type="file" id="import-file-input" accept=".json" class="d-none" onchange="SettingsView.handleImport(event)">
            </label>
          </div>
        </div>

        <!-- Section 6: Data Reset & Danger Zone -->
        <div class="settings-card card border-danger-soft">
          <div class="settings-card-header text-danger">
            <div class="d-flex align-center gap-2">
              <i data-lucide="alert-triangle"></i>
              <h3>Danger Zone: Reset Progress</h3>
            </div>
          </div>
          <p class="text-muted text-sm mb-3">
            Destructive actions require confirmation. They will never trigger by accident.
          </p>

          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-outline-danger btn-sm" onclick="SettingsView.promptResetTrack()">
              Reset Track Progress
            </button>
            <button class="btn btn-outline-danger btn-sm" onclick="SettingsView.promptResetSubject()">
              Reset Subject Progress
            </button>
            <button class="btn btn-danger btn-sm" onclick="SettingsView.promptFactoryReset()">
              Factory Reset All Data
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    window.State.updateSettings({ theme });
    this.render();
    window.Utils.showToast(`Switched to ${theme} theme`, 'info');
  },

  saveTargetSettings() {
    const targetDate = document.getElementById('set-target-date').value;
    const targetTitle = document.getElementById('set-target-title').value.trim();
    const phase1Title = document.getElementById('set-p1-title').value.trim();
    const phase1Dates = document.getElementById('set-p1-dates').value.trim();
    const phase2Title = document.getElementById('set-p2-title').value.trim();
    const phase2Dates = document.getElementById('set-p2-dates').value.trim();

    window.State.updateSettings({
      targetDate,
      targetTitle,
      phase1Title,
      phase1Dates,
      phase2Title,
      phase2Dates
    });
    window.Utils.showToast('Target date & roadmap updated!', 'success');
  },

  saveGoals() {
    const dailyGoalTasks = parseInt(document.getElementById('set-daily-tasks').value, 10) || 3;
    const dailyGoalHours = parseFloat(document.getElementById('set-daily-hours').value) || 2.5;
    const weeklyGoalTasks = parseInt(document.getElementById('set-weekly-tasks').value, 10) || 15;
    const weeklyGoalHours = parseFloat(document.getElementById('set-weekly-hours').value) || 12;
    const includeProjectsInOverallProgress = document.getElementById('set-inc-projects').checked;

    window.State.updateSettings({
      dailyGoalTasks,
      dailyGoalHours,
      weeklyGoalTasks,
      weeklyGoalHours,
      includeProjectsInOverallProgress
    });
    window.Utils.showToast('Goals updated!', 'success');
  },

  saveIntervals() {
    const raw = document.getElementById('set-intervals').value;
    const intervals = raw.split(',').map(n => parseInt(n.trim(), 10)).filter(n => !isNaN(n) && n > 0);
    if (intervals.length === 0) return;

    window.State.updateSettings({ revisionIntervals: intervals });
    window.Utils.showToast('Revision intervals saved!', 'success');
  },

  handleImport(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = window.Storage.importBackup(event.target.result);
        window.State.data = imported;
        window.State.notify('data:imported', {});
        window.Utils.showToast('Backup restored successfully!', 'success');
        this.render();
      } catch (err) {
        window.Utils.showToast(err.message, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  },

  promptResetTrack() {
    const tracks = window.State.getTracks();
    const content = `
      <div>
        <p>Select a track to reset all its tasks back to "Not Started":</p>
        <select id="reset-track-select" class="input mt-2 mb-3">
          ${tracks.map(t => `<option value="${t.id}">${window.Utils.escapeHtml(t.name)}</option>`).join('')}
        </select>
        <div class="d-flex justify-end gap-2">
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button class="btn btn-danger" onclick="
            const tid = document.getElementById('reset-track-select').value;
            State.resetTrack(tid);
            App.closeGenericModal();
            Utils.showToast('Track progress reset to Not Started', 'info');
          ">Confirm Reset</button>
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Reset Track Progress',
      contentHtml: content,
      showSave: false
    });
  },

  promptResetSubject() {
    const tracks = window.State.getTracks();
    const subjects = [];
    tracks.forEach(t => {
      (t.subjects || []).forEach(s => subjects.push({ id: s.id, name: `${t.name} > ${s.name}` }));
    });

    const content = `
      <div>
        <p>Select a subject to reset its tasks back to "Not Started":</p>
        <select id="reset-subj-select" class="input mt-2 mb-3">
          ${subjects.map(s => `<option value="${s.id}">${window.Utils.escapeHtml(s.name)}</option>`).join('')}
        </select>
        <div class="d-flex justify-end gap-2">
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button class="btn btn-danger" onclick="
            const sid = document.getElementById('reset-subj-select').value;
            State.resetSubject(sid);
            App.closeGenericModal();
            Utils.showToast('Subject progress reset', 'info');
          ">Confirm Reset</button>
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Reset Subject Progress',
      contentHtml: content,
      showSave: false
    });
  },

  promptFactoryReset() {
    App.confirmModal({
      title: 'Factory Reset All Data?',
      message: 'This will reset ALL tracks, subjects, tasks, portfolio projects, exam entries, and study history back to default seed data. Export a JSON backup first if you want to keep your records!',
      confirmText: 'Yes, Reset Everything',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.resetAllData();
        window.Utils.showToast('All data has been reset to defaults', 'info');
        window.location.reload();
      }
    });
  }
};

window.SettingsView = SettingsView;
