/**
 * Career Preparation & Skill Mastery Checklist
 * Gamification Module (Subtle XP, Levels, Badges, Non-punitive Streak System)
 */

const Gamification = {
  renderBadgeGrid() {
    const badges = window.State.getState().gamification?.badges || [];
    return `
      <div class="badges-grid">
        ${badges.map(b => `
          <div class="badge-item card ${b.unlocked ? 'unlocked' : 'locked'}">
            <div class="badge-icon-wrap">
              <i data-lucide="${b.icon || 'award'}"></i>
            </div>
            <div class="badge-info">
              <h4 class="badge-name">${window.Utils.escapeHtml(b.name)}</h4>
              <p class="badge-desc text-muted">${window.Utils.escapeHtml(b.desc)}</p>
              <span class="badge-status-pill text-xs">
                ${b.unlocked ? `Unlocked ${window.Utils.formatDate(b.unlockedAt, 'short')}` : 'Locked · Keep going!'}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  updateHeaderXP() {
    const gamification = window.State.getState().gamification || { xp: 0, level: 1 };
    const xp = gamification.xp || 0;
    const level = gamification.level || 1;
    const nextLevelXP = level * 350;
    const currentTierXP = xp % 350;
    const pct = Math.min(100, Math.round((currentTierXP / 350) * 100));

    const xpEl = document.getElementById('user-xp-display');
    const lvlEl = document.getElementById('user-level-badge');
    const barEl = document.getElementById('user-xp-progress');

    if (xpEl) xpEl.textContent = `${xp} XP`;
    if (lvlEl) lvlEl.textContent = `Lvl ${level}`;
    if (barEl) barEl.style.width = `${pct}%`;
  }
};

window.Gamification = Gamification;
