/**
 * Career Preparation & Skill Mastery Checklist
 * Revision Module (Spaced Repetition System: 1d, 3d, 7d, 14d, 30d Intervals)
 * Retention tracking, review completion, and interval scheduling.
 */

const RevisionsView = {
  render() {
    const container = document.getElementById('view-revisions');
    if (!container) return;

    const { dueToday, overdue, upcoming, completed } = window.State.getRevisions();
    const settings = window.State.getSettings();
    const intervals = settings.revisionIntervals || [1, 3, 7, 14, 30];

    container.innerHTML = `
      <div class="revisions-header-bar">
        <div>
          <h1 class="page-title">Spaced Repetition & Revision System</h1>
          <p class="page-subtitle">
            Long-term retention framework based on the Ebbinghaus forgetting curve. Configured intervals: ${intervals.join(', ')} days.
          </p>
        </div>

        <div>
          <button class="btn btn-primary" onclick="RevisionsView.openAddRevisionModal()">
            <i data-lucide="plus"></i> Schedule Revision
          </button>
        </div>
      </div>

      <!-- Revision Workload Summary Cards -->
      <div class="kpi-grid mb-4">
        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Due Today</span>
            <div class="kpi-icon bg-primary-soft"><i data-lucide="calendar"></i></div>
          </div>
          <div class="kpi-value text-primary">${dueToday.length}</div>
          <span class="kpi-footer">Ready for review</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Past Due</span>
            <div class="kpi-icon bg-danger-soft"><i data-lucide="alert-circle"></i></div>
          </div>
          <div class="kpi-value text-danger">${overdue.length}</div>
          <span class="kpi-footer">Catch up anytime</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Upcoming</span>
            <div class="kpi-icon bg-warning-soft"><i data-lucide="clock"></i></div>
          </div>
          <div class="kpi-value text-warning">${upcoming.length}</div>
          <span class="kpi-footer">Next 30 days</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Completed Reviews</span>
            <div class="kpi-icon bg-success-soft"><i data-lucide="check-circle-2"></i></div>
          </div>
          <div class="kpi-value text-success">${completed.length}</div>
          <span class="kpi-footer">Reinforced concepts</span>
        </div>
      </div>

      <!-- Section 1: Due Today -->
      <section class="revision-section mb-4">
        <div class="section-title-wrap">
          <h2 class="section-title">
            <span class="dot-indicator bg-primary"></span> Due Today (${dueToday.length})
          </h2>
          <span class="text-muted text-sm">Review these topics now to reinforce neural recall</span>
        </div>

        <div class="revision-cards-list">
          ${dueToday.length === 0 ? `
            <div class="empty-state card p-4 text-center">
              <i data-lucide="check-check" class="empty-icon text-success"></i>
              <p>No revisions due today! You are all caught up.</p>
            </div>
          ` : dueToday.map(r => this.renderRevisionCard(r, 'due')).join('')}
        </div>
      </section>

      <!-- Section 2: Overdue (Non-punitive) -->
      ${overdue.length > 0 ? `
        <section class="revision-section mb-4">
          <div class="section-title-wrap">
            <h2 class="section-title">
              <span class="dot-indicator bg-danger"></span> Past Scheduled Date (${overdue.length})
            </h2>
            <span class="text-muted text-sm">No penalties. Review whenever you have 10 spare minutes.</span>
          </div>

          <div class="revision-cards-list">
            ${overdue.map(r => this.renderRevisionCard(r, 'overdue')).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Section 3: Upcoming -->
      <section class="revision-section mb-4">
        <div class="section-title-wrap">
          <h2 class="section-title">
            <span class="dot-indicator bg-warning"></span> Upcoming Revisions (${upcoming.length})
          </h2>
          <span class="text-muted text-sm">Scheduled future reviews in the spaced sequence</span>
        </div>

        <div class="revision-cards-list">
          ${upcoming.length === 0 ? `
            <div class="empty-state card p-4 text-center">
              <p class="text-muted">No upcoming revisions scheduled yet.</p>
            </div>
          ` : upcoming.map(r => this.renderRevisionCard(r, 'upcoming')).join('')}
        </div>
      </section>

      <!-- Section 4: Completed History -->
      ${completed.length > 0 ? `
        <section class="revision-section mb-4">
          <div class="section-title-wrap">
            <h2 class="section-title">
              <span class="dot-indicator bg-success"></span> Completed Review Log (${completed.length})
            </h2>
          </div>

          <div class="revision-cards-list">
            ${completed.map(r => this.renderRevisionCard(r, 'completed')).join('')}
          </div>
        </section>
      ` : ''}
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  renderRevisionCard(rev, state = 'due') {
    const isCompleted = state === 'completed';

    return `
      <div class="revision-card-item card p-3 hover-lift d-flex justify-between align-center" id="rev-${rev.id}">
        <div class="d-flex align-center gap-3">
          <div class="revision-icon-pill ${state === 'overdue' ? 'bg-danger-soft text-danger' : (isCompleted ? 'bg-success-soft text-success' : 'bg-primary-soft text-primary')}">
            <i data-lucide="${isCompleted ? 'check-check' : 'repeat'}"></i>
          </div>

          <div>
            <div class="breadcrumbs-subtle">
              <span>${window.Utils.escapeHtml(rev.trackName || '')}</span> &gt;
              <span>${window.Utils.escapeHtml(rev.subjectName || '')}</span>
            </div>
            <h4 class="revision-title ${isCompleted ? 'strikethrough text-muted' : ''}">${window.Utils.escapeHtml(rev.taskName)}</h4>
            ${rev.notes ? `<p class="revision-notes-text">${window.Utils.escapeHtml(rev.notes)}</p>` : ''}
            
            <div class="revision-meta-line mt-1">
              <span class="badge badge-subtle">Iteration ${rev.reviewCount || 1} (${rev.intervalDays}d interval)</span>
              <span class="text-muted text-xs">
                ${isCompleted ? `Reviewed on ${window.Utils.formatDate(rev.lastReviewedAt, 'short')}` : `Scheduled: ${window.Utils.formatDate(rev.scheduledDate, 'short')}`}
              </span>
            </div>
          </div>
        </div>

        <div class="revision-actions d-flex align-center gap-2">
          ${!isCompleted ? `
            <button class="btn btn-sm btn-primary" onclick="RevisionsView.openCompletePrompt('${rev.id}')">
              <i data-lucide="check"></i> Complete Review
            </button>
          ` : ''}
          <button class="btn btn-xs btn-ghost text-danger" title="Remove from queue" onclick="State.deleteRevision('${rev.id}'); Utils.showToast('Revision removed', 'info');">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    `;
  },

  openCompletePrompt(revId) {
    const rev = (window.State.getRevisions().all || []).find(r => r.id === revId);
    if (!rev) return;

    const intervals = window.State.getSettings().revisionIntervals || [1, 3, 7, 14, 30];
    const currentInterval = rev.intervalDays || 3;
    const currentIdx = intervals.indexOf(currentInterval);
    const nextInterval = currentIdx !== -1 && currentIdx < intervals.length - 1 ? intervals[currentIdx + 1] : 30;

    const content = `
      <div>
        <p>Great job reviewing <strong>${window.Utils.escapeHtml(rev.taskName)}</strong>!</p>
        <p class="text-muted text-sm mt-2">
          Would you like to schedule the next spaced interval for this topic?
        </p>

        <div class="form-group mt-3">
          <label class="form-label">Next Spaced Interval:</label>
          <select id="next-interval-select" class="input">
            <option value="${nextInterval}">Next in sequence (+${nextInterval} days)</option>
            <option value="7">+7 days</option>
            <option value="14">+14 days</option>
            <option value="30">+30 days</option>
            <option value="0">Do not schedule further (Mastered!)</option>
          </select>
        </div>

        <div class="d-flex justify-end gap-2 mt-4">
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button class="btn btn-success" onclick="
            const nextDays = parseInt(document.getElementById('next-interval-select').value, 10);
            State.completeRevision('${revId}', nextDays);
            App.closeGenericModal();
            Utils.showToast('Review completed & +35 XP awarded!', 'success');
          ">
            Mark Reviewed ✓
          </button>
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Complete Spaced Review',
      contentHtml: content,
      showSave: false
    });
  },

  markReviewed(revId) {
    this.openCompletePrompt(revId);
  },

  openAddRevisionModal(preselectedTaskId = null) {
    const tasks = window.State.getAllTasks();
    const intervals = window.State.getSettings().revisionIntervals || [1, 3, 7, 14, 30];

    const content = `
      <form id="add-rev-form" onsubmit="event.preventDefault(); RevisionsView.saveNewRevision();">
        <div class="form-group mb-3">
          <label class="form-label">Select Task / Topic to Revise *</label>
          <select id="rev-task-id" class="input" required>
            <option value="">-- Choose a Task --</option>
            ${tasks.map(t => `
              <option value="${t.id}" ${t.id === preselectedTaskId ? 'selected' : ''}>
                [${window.Utils.escapeHtml(t.subjectName)}] ${window.Utils.escapeHtml(t.name)} (${t.status})
              </option>
            `).join('')}
          </select>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Spaced Interval</label>
            <select id="rev-interval" class="input" onchange="RevisionsView.autoComputeDate(this.value)">
              ${intervals.map(i => `<option value="${i}" ${i === 3 ? 'selected' : ''}>${i} Days Interval</option>`).join('')}
            </select>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Scheduled Date</label>
            <input type="date" id="rev-date" class="input" required>
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Revision Focus Notes</label>
          <textarea id="rev-notes" class="input textarea" rows="2" placeholder="e.g. Focus on edge cases and window function partition syntax"></textarea>
        </div>

        <div class="d-flex justify-end gap-2 mt-4">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Schedule Revision</button>
        </div>
      </form>
    `;

    App.openGenericModal({
      title: 'Add to Revision Queue',
      contentHtml: content,
      showSave: false
    });

    // Default compute date (+3 days)
    this.autoComputeDate(3);
  },

  autoComputeDate(days) {
    const d = new Date();
    d.setDate(d.getDate() + parseInt(days, 10));
    const dateInput = document.getElementById('rev-date');
    if (dateInput) {
      dateInput.value = d.toISOString().split('T')[0];
    }
  },

  saveNewRevision() {
    const taskId = document.getElementById('rev-task-id').value;
    const interval = parseInt(document.getElementById('rev-interval').value, 10) || 3;
    const scheduledDate = document.getElementById('rev-date').value;
    const notes = document.getElementById('rev-notes').value.trim();

    if (!taskId || !scheduledDate) return;

    window.State.addRevision(taskId, interval, scheduledDate, notes);
    App.closeGenericModal();
    window.Utils.showToast('Revision scheduled!', 'success');
  }
};

window.RevisionsView = RevisionsView;
