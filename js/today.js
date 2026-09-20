/**
 * Career Preparation & Skill Mastery Checklist
 * Today View Module (Manually Curated Daily Plan, Overdue Tasks, Today Revisions)
 */

const TodayView = {
  render() {
    const container = document.getElementById('view-today');
    if (!container) return;

    const todayStr = window.Utils.getTodayString();
    const formattedDate = window.Utils.formatDate(todayStr, 'long');
    const { assignedToday, overdue, completedToday } = window.State.getTodayTasks();
    const revs = window.State.getRevisions();
    const todayRevs = revs.dueToday;
    const settings = window.State.getSettings();

    const goalTasks = settings.dailyGoalTasks || 3;
    const goalHours = settings.dailyGoalHours || 2.5;

    // Calculate hours logged today
    const hoursCompleted = completedToday.reduce((acc, t) => acc + (parseFloat(t.actualHours) || parseFloat(t.estimatedHours) || 0), 0);
    const taskProgressPct = Math.min(100, Math.round((completedToday.length / goalTasks) * 100));

    container.innerHTML = `
      <div class="today-header-bar">
        <div>
          <div class="today-date-badge">
            <i data-lucide="sun"></i> ${formattedDate}
          </div>
          <h1 class="page-title">Today's Focus & Daily Plan</h1>
          <p class="page-subtitle">
            You curate your own day. Drag, reschedule, or move tasks anytime without penalty.
          </p>
        </div>

        <div class="today-actions">
          <button class="btn btn-secondary" onclick="TodayView.openTaskPickerModal()">
            <i data-lucide="list-plus"></i> Add Existing Task to Today
          </button>
          <button class="btn btn-primary" onclick="App.openTaskModal(null, '${todayStr}')">
            <i data-lucide="plus"></i> Create New Task for Today
          </button>
        </div>
      </div>

      <!-- Daily Goal Tracker Banner -->
      <div class="daily-goal-card card">
        <div class="daily-goal-content">
          <div class="goal-info">
            <span class="goal-label">Daily Goal Progress</span>
            <div class="goal-values">
              <strong>${completedToday.length} of ${goalTasks} tasks</strong> · 
              <span>${hoursCompleted.toFixed(1)} of ${goalHours} study hours</span>
            </div>
          </div>
          <div class="goal-progress-wrap">
            <div class="kpi-progress">
              <div class="kpi-progress-bar bg-success" style="width: ${taskProgressPct}%"></div>
            </div>
            <span class="goal-pct">${taskProgressPct}%</span>
          </div>
        </div>
      </div>

      <!-- SECTION 1: Assigned for Today -->
      <section class="today-section">
        <div class="section-title-wrap">
          <h2 class="section-title">
            <span class="dot-indicator bg-primary"></span>
            Assigned for Today (${assignedToday.length})
          </h2>
          <span class="text-muted text-sm">Tasks planned or pinned for today's study block</span>
        </div>

        <div class="today-task-list">
          ${assignedToday.length === 0 ? `
            <div class="empty-state-card card">
              <i data-lucide="sparkles" class="empty-icon text-primary"></i>
              <h4>No tasks assigned for today yet</h4>
              <p>Pick from your syllabus backlog or create a new priority task.</p>
              <button class="btn btn-secondary mt-2" onclick="TodayView.openTaskPickerModal()">
                <i data-lucide="list-plus"></i> Select from Syllabus
              </button>
            </div>
          ` : assignedToday.map(t => this.renderTodayTaskCard(t)).join('')}
        </div>
      </section>

      <!-- SECTION 2: Spaced Revisions Due Today -->
      ${todayRevs.length > 0 ? `
        <section class="today-section mt-4">
          <div class="section-title-wrap">
            <h2 class="section-title">
              <span class="dot-indicator bg-purple"></span>
              Spaced Revisions Due Today (${todayRevs.length})
            </h2>
            <span class="text-muted text-sm">Quick 10-15 minute memory refresh sessions</span>
          </div>

          <div class="today-revision-list">
            ${todayRevs.map(r => this.renderRevisionCard(r)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- SECTION 3: Overdue Tasks (Non-punitive) -->
      ${overdue.length > 0 ? `
        <section class="today-section mt-4">
          <div class="section-title-wrap">
            <h2 class="section-title">
              <span class="dot-indicator bg-warning"></span>
              Planned Date Passed (${overdue.length})
            </h2>
            <span class="text-muted text-sm">
              No stress! These are past their original date. Reschedule or work on them whenever you're ready.
            </span>
          </div>

          <div class="today-overdue-list">
            ${overdue.map(t => this.renderOverdueTaskCard(t)).join('')}
          </div>
        </section>
      ` : ''}

      <!-- SECTION 4: Completed Today -->
      ${completedToday.length > 0 ? `
        <section class="today-section mt-4">
          <div class="section-title-wrap">
            <h2 class="section-title">
              <span class="dot-indicator bg-success"></span>
              Completed Today (${completedToday.length})
            </h2>
            <span class="text-muted text-sm">Great momentum! Every completed task is verified knowledge.</span>
          </div>

          <div class="today-completed-list">
            ${completedToday.map(t => this.renderCompletedCard(t)).join('')}
          </div>
        </section>
      ` : ''}
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  renderTodayTaskCard(task) {
    return `
      <div class="today-card card hover-lift" id="today-task-${task.id}">
        <div class="today-card-left">
          <div class="custom-checkbox ${task.status === 'Completed' ? 'checked' : ''}" onclick="TodayView.completeTask('${task.id}')">
            ${task.status === 'Completed' ? '<i data-lucide="check"></i>' : ''}
          </div>

          <div class="today-card-info" onclick="App.openEditTaskModal('${task.id}')">
            <div class="today-breadcrumbs">
              <span class="track-mini-badge" style="color: ${task.trackColor};">${window.Utils.escapeHtml(task.trackName)}</span>
              <span>&gt;</span>
              <span>${window.Utils.escapeHtml(task.subjectName)}</span>
            </div>
            <h4 class="today-task-name">${window.Utils.escapeHtml(task.name)}</h4>
            ${task.description ? `<p class="today-task-desc">${window.Utils.escapeHtml(task.description)}</p>` : ''}
            
            <div class="today-meta-row">
              <span class="badge badge-subtle">${task.status}</span>
              ${task.estimatedHours ? `
                <span class="meta-item"><i data-lucide="clock"></i> ${task.estimatedHours}h est</span>
              ` : ''}
              ${task.interviewQuestions ? `
                <span class="meta-item text-purple"><i data-lucide="help-circle"></i> Interview Prep</span>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="today-card-actions">
          <button class="btn btn-sm btn-success" onclick="TodayView.completeTask('${task.id}')">
            <i data-lucide="check"></i> Done
          </button>
          <div class="dropdown-wrap">
            <button class="btn btn-sm btn-secondary" onclick="TodayView.quickReschedulePrompt('${task.id}')">
              <i data-lucide="calendar-plus"></i> Move Date
            </button>
          </div>
          <button class="btn btn-sm btn-ghost text-muted" title="Remove from Today" onclick="TodayView.removeFromToday('${task.id}')">
            <i data-lucide="x"></i>
          </button>
        </div>
      </div>
    `;
  },

  renderOverdueTaskCard(task) {
    return `
      <div class="today-card card overdue-card" id="overdue-task-${task.id}">
        <div class="today-card-left">
          <div class="custom-checkbox" onclick="TodayView.completeTask('${task.id}')"></div>

          <div class="today-card-info" onclick="App.openEditTaskModal('${task.id}')">
            <div class="today-breadcrumbs">
              <span class="text-warning">Planned: ${window.Utils.formatDate(task.plannedDate, 'short')}</span> ·
              <span>${window.Utils.escapeHtml(task.trackName)} &gt; ${window.Utils.escapeHtml(task.subjectName)}</span>
            </div>
            <h4 class="today-task-name">${window.Utils.escapeHtml(task.name)}</h4>
          </div>
        </div>

        <div class="today-card-actions">
          <button class="btn btn-sm btn-primary" onclick="TodayView.rescheduleToToday('${task.id}')">
            <i data-lucide="calendar"></i> Move to Today
          </button>
          <button class="btn btn-sm btn-secondary" onclick="TodayView.quickReschedulePrompt('${task.id}')">
            Reschedule...
          </button>
          <button class="btn btn-sm btn-success" onclick="TodayView.completeTask('${task.id}')">
            <i data-lucide="check"></i> Complete
          </button>
        </div>
      </div>
    `;
  },

  renderRevisionCard(rev) {
    return `
      <div class="today-card card revision-card" id="today-rev-${rev.id}">
        <div class="today-card-left">
          <div class="revision-icon-badge">
            <i data-lucide="repeat"></i>
          </div>
          <div class="today-card-info">
            <div class="today-breadcrumbs">
              <span>${window.Utils.escapeHtml(rev.trackName)} &gt; ${window.Utils.escapeHtml(rev.subjectName)}</span>
              <span class="badge badge-purple-soft">Spaced Review (${rev.intervalDays}d interval)</span>
            </div>
            <h4 class="today-task-name">${window.Utils.escapeHtml(rev.taskName)}</h4>
            ${rev.notes ? `<p class="today-task-desc">${window.Utils.escapeHtml(rev.notes)}</p>` : ''}
          </div>
        </div>

        <div class="today-card-actions">
          <button class="btn btn-sm btn-purple" onclick="RevisionsView.markReviewed('${rev.id}')">
            <i data-lucide="check-check"></i> Mark Reviewed
          </button>
        </div>
      </div>
    `;
  },

  renderCompletedCard(task) {
    return `
      <div class="today-card card completed-today-card">
        <div class="today-card-left">
          <div class="custom-checkbox checked" onclick="State.setTaskStatus('${task.id}', 'In Progress')">
            <i data-lucide="check"></i>
          </div>
          <div class="today-card-info">
            <h4 class="today-task-name strikethrough">${window.Utils.escapeHtml(task.name)}</h4>
            <span class="text-muted text-xs">${window.Utils.escapeHtml(task.subjectName)} · Completed today</span>
          </div>
        </div>

        <div class="today-card-actions">
          <button class="btn btn-xs btn-ghost text-muted" onclick="State.setTaskStatus('${task.id}', 'In Progress')">
            Undo
          </button>
        </div>
      </div>
    `;
  },

  completeTask(taskId) {
    window.State.setTaskStatus(taskId, 'Completed');
    window.Utils.showToast('Task completed! XP awarded ✓', 'success');
  },

  removeFromToday(taskId) {
    window.State.removeFromToday(taskId);
    window.Utils.showToast('Removed from today\'s focus list', 'info');
  },

  rescheduleToToday(taskId) {
    const today = window.Utils.getTodayString();
    window.State.rescheduleTask(taskId, today);
    window.State.addToToday(taskId);
    window.Utils.showToast('Moved to today!', 'success');
  },

  quickReschedulePrompt(taskId) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomStr = tomorrow.toISOString().split('T')[0];

    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nwStr = nextWeek.toISOString().split('T')[0];

    const content = `
      <div class="quick-reschedule-wrap">
        <p>Choose when you would like to tackle this task:</p>
        <div class="d-flex flex-column gap-2 mt-3">
          <button class="btn btn-secondary text-left" onclick="State.rescheduleTask('${taskId}', '${window.Utils.getTodayString()}'); App.closeGenericModal(); Utils.showToast('Rescheduled to Today', 'success');">
            📅 Today (${window.Utils.formatDate(window.Utils.getTodayString(), 'short')})
          </button>
          <button class="btn btn-secondary text-left" onclick="State.rescheduleTask('${taskId}', '${tomStr}'); App.closeGenericModal(); Utils.showToast('Rescheduled to Tomorrow', 'success');">
            ☀️ Tomorrow (${window.Utils.formatDate(tomStr, 'short')})
          </button>
          <button class="btn btn-secondary text-left" onclick="State.rescheduleTask('${taskId}', '${nwStr}'); App.closeGenericModal(); Utils.showToast('Rescheduled to Next Week', 'success');">
            🗓️ Next Week (${window.Utils.formatDate(nwStr, 'short')})
          </button>
        </div>

        <div class="mt-4">
          <label class="form-label">Or pick a custom date:</label>
          <div class="d-flex gap-2">
            <input type="date" id="custom-reschedule-date" class="input" value="${tomStr}">
            <button class="btn btn-primary" onclick="const val = document.getElementById('custom-reschedule-date').value; if(val){ State.rescheduleTask('${taskId}', val); App.closeGenericModal(); Utils.showToast('Rescheduled to ' + Utils.formatDate(val, 'short'), 'success'); }">
              Save
            </button>
          </div>
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Reschedule Task',
      contentHtml: content,
      showSave: false,
      closeText: 'Cancel'
    });
  },

  openTaskPickerModal() {
    const pendingTasks = window.State.getAllTasks().filter(t => t.status !== 'Completed');

    const content = `
      <div class="task-picker-modal">
        <p class="text-muted">Select an existing task from your syllabus to add to today's focus list:</p>
        <input 
          type="text" 
          id="picker-search-input" 
          class="input mb-3" 
          placeholder="Filter tasks by name or subject..."
          oninput="TodayView.filterPickerList(this.value)"
        >

        <div class="picker-list" id="picker-tasks-container" style="max-height: 380px; overflow-y: auto;">
          ${pendingTasks.length === 0 ? '<p class="text-muted">No pending tasks available.</p>' : pendingTasks.map(t => `
            <div class="picker-item card p-2 mb-2 d-flex justify-between align-center hover-bg" data-name="${t.name.toLowerCase()} ${t.subjectName.toLowerCase()}">
              <div>
                <strong>${window.Utils.escapeHtml(t.name)}</strong>
                <span class="d-block text-muted text-xs">${window.Utils.escapeHtml(t.trackName)} &gt; ${window.Utils.escapeHtml(t.subjectName)}</span>
              </div>
              <button class="btn btn-xs btn-primary" onclick="State.addToToday('${t.id}'); App.closeGenericModal(); Utils.showToast('Added to Today', 'success');">
                Add to Today
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Add Existing Task to Today',
      contentHtml: content,
      showSave: false,
      closeText: 'Close'
    });
  },

  filterPickerList(query) {
    const q = (query || '').toLowerCase().trim();
    const items = document.querySelectorAll('#picker-tasks-container .picker-item');
    items.forEach(el => {
      const match = el.dataset.name.includes(q);
      el.style.display = match ? 'flex' : 'none';
    });
  }
};

window.TodayView = TodayView;
