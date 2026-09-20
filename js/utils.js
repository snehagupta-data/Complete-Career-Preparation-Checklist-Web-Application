/**
 * Career Preparation & Skill Mastery Checklist
 * Utility Functions (Formatting, Dates, IDs, Sanitization, Modals, Toasts)
 */

const Utils = {
  /**
   * Generate unique deterministic or random IDs
   */
  generateId(prefix = 'item') {
    return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).substr(2, 6)}`;
  },

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  /**
   * Format ISO date string to human-readable date
   * e.g. "2026-09-20" -> "Sep 20, 2026"
   */
  formatDate(dateStr, style = 'medium') {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        if (isNaN(d.getTime())) return dateStr;

        if (style === 'short') {
          return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
        if (style === 'month-year') {
          return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        }
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
      return dateStr;
    } catch (e) {
      return dateStr;
    }
  },

  /**
   * Get today's date formatted as YYYY-MM-DD in local time
   */
  getTodayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  /**
   * Calculate difference in full calendar days between two YYYY-MM-DD dates
   */
  getDaysRemaining(targetDateStr) {
    if (!targetDateStr) return 0;
    const today = new Date(this.getTodayString());
    const target = new Date(targetDateStr);
    const diffTime = target.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  /**
   * Check if a planned date is before today
   */
  isDatePast(dateStr) {
    if (!dateStr) return false;
    return dateStr < this.getTodayString();
  },

  /**
   * Sanitize external URL
   */
  sanitizeUrl(url) {
    if (!url) return '';
    let clean = url.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }
    return clean;
  },

  /**
   * Debounce function calls
   */
  debounce(func, wait = 250) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  },

  /**
   * Unified Toast Notification System
   */
  showToast(message, type = 'info', duration = 3200) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type} animate-slide-in`;

    let icon = 'info';
    if (type === 'success') icon = 'check-circle-2';
    if (type === 'warning') icon = 'alert-triangle';
    if (type === 'error') icon = 'alert-circle';

    toast.innerHTML = `
      <div class="toast-icon">
        <i data-lucide="${icon}"></i>
      </div>
      <div class="toast-message">${this.escapeHtml(message)}</div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    const closeBtn = toast.querySelector('.toast-close');
    const dismiss = () => {
      toast.classList.add('animate-fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    };

    closeBtn.addEventListener('click', dismiss);
    setTimeout(dismiss, duration);
  },

  /**
   * Trigger confetti celebration on milestone achievements
   */
  celebrate() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']
      });
    }
  }
};

window.Utils = Utils;
