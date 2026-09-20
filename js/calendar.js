/**
 * Career Preparation & Skill Mastery Checklist
 * Calendar Module (Monthly, Weekly, and Daily Views with Drag-and-Drop)
 * Non-punitive date rescheduling that preserves task completion state.
 */

const CalendarView = {
  currentMode: 'month', // 'month' | 'week' | 'day'
  selectedDate: new Date(),

  init() {
    this.selectedDate = new Date();
  },

  setMode(mode) {
    this.currentMode = mode;
    this.render();
  },

  navigate(direction) {
    if (this.currentMode === 'month') {
      this.selectedDate.setMonth(this.selectedDate.getMonth() + direction);
    } else if (this.currentMode === 'week') {
      this.selectedDate.setDate(this.selectedDate.getDate() + (direction * 7));
    } else if (this.currentMode === 'day') {
      this.selectedDate.setDate(this.selectedDate.getDate() + direction);
    }
    this.render();
  },

  goToToday() {
    this.selectedDate = new Date();
    this.render();
  },

  render() {
    const container = document.getElementById('view-calendar');
    if (!container) return;

    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let headerTitle = `${monthNames[month]} ${year}`;
    if (this.currentMode === 'day') {
      headerTitle = this.selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    } else if (this.currentMode === 'week') {
      const weekStart = this.getWeekStartDate(this.selectedDate);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);
      headerTitle = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    }

    container.innerHTML = `
      <div class="calendar-header-bar">
        <div class="calendar-title-wrap">
          <h1 class="page-title">${headerTitle}</h1>
          <p class="page-subtitle">Drag and drop tasks across dates to reschedule freely. Moving a task preserves its completion state.</p>
        </div>

        <div class="calendar-nav-controls">
          <div class="btn-group">
            <button class="btn btn-secondary" onclick="CalendarView.navigate(-1)"><i data-lucide="chevron-left"></i></button>
            <button class="btn btn-secondary" onclick="CalendarView.goToToday()">Today</button>
            <button class="btn btn-secondary" onclick="CalendarView.navigate(1)"><i data-lucide="chevron-right"></i></button>
          </div>

          <div class="view-mode-toggle btn-group">
            <button class="btn ${this.currentMode === 'month' ? 'btn-primary' : 'btn-secondary'}" onclick="CalendarView.setMode('month')">Month</button>
            <button class="btn ${this.currentMode === 'week' ? 'btn-primary' : 'btn-secondary'}" onclick="CalendarView.setMode('week')">Week</button>
            <button class="btn ${this.currentMode === 'day' ? 'btn-primary' : 'btn-secondary'}" onclick="CalendarView.setMode('day')">Day</button>
          </div>
        </div>
      </div>

      <div class="calendar-content-wrap card">
        ${this.currentMode === 'month' ? this.renderMonthView(year, month) : ''}
        ${this.currentMode === 'week' ? this.renderWeekView() : ''}
        ${this.currentMode === 'day' ? this.renderDayView() : ''}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    this.bindCalendarDragEvents();
  },

  getWeekStartDate(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday start
    return new Date(d.setDate(diff));
  },

  renderMonthView(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    // Monday start index (0 = Mon, 6 = Sun)
    const startIndex = (firstDay + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const tasks = window.State.getAllTasks();
    const todayStr = window.Utils.getTodayString();

    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    let cellsHtml = '';

    // Previous month filler days
    for (let i = startIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      cellsHtml += `<div class="calendar-cell other-month"><span class="day-number">${dayNum}</span></div>`;
    }

    // Days in current month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = dateStr === todayStr;
      const dayTasks = tasks.filter(t => t.plannedDate === dateStr);

      cellsHtml += `
        <div 
          class="calendar-cell ${isToday ? 'cell-today' : ''}" 
          data-date="${dateStr}"
        >
          <div class="cell-top">
            <span class="day-number ${isToday ? 'badge-today' : ''}">${day}</span>
            ${dayTasks.length > 0 ? `<span class="cell-task-count">${dayTasks.length}</span>` : ''}
          </div>

          <div class="cell-task-chips">
            ${dayTasks.slice(0, 3).map(t => this.renderTaskChip(t)).join('')}
            ${dayTasks.length > 3 ? `
              <div class="more-chips-pill" onclick="CalendarView.openDayModal('${dateStr}')">
                +${dayTasks.length - 3} more
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    // Next month filler
    const totalRendered = startIndex + daysInMonth;
    const remaining = (7 - (totalRendered % 7)) % 7;
    for (let day = 1; day <= remaining; day++) {
      cellsHtml += `<div class="calendar-cell other-month"><span class="day-number">${day}</span></div>`;
    }

    return `
      <div class="calendar-grid-header">
        ${weekdays.map(w => `<div class="weekday-header">${w}</div>`).join('')}
      </div>
      <div class="calendar-month-grid">
        ${cellsHtml}
      </div>
    `;
  },

  renderWeekView() {
    const weekStart = this.getWeekStartDate(this.selectedDate);
    const days = [];
    const tasks = window.State.getAllTasks();
    const todayStr = window.Utils.getTodayString();

    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      days.push({
        date: d,
        dateStr,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNum: d.getDate(),
        isToday: dateStr === todayStr,
        tasks: tasks.filter(t => t.plannedDate === dateStr)
      });
    }

    return `
      <div class="calendar-week-grid">
        ${days.map(d => `
          <div class="week-column ${d.isToday ? 'col-today' : ''}" data-date="${d.dateStr}">
            <div class="week-col-header">
              <span class="week-day-name">${d.dayName}</span>
              <span class="week-day-num ${d.isToday ? 'badge-today' : ''}">${d.dayNum}</span>
            </div>
            <div class="week-col-tasks">
              ${d.tasks.map(t => this.renderTaskChip(t, true)).join('')}
              ${d.tasks.length === 0 ? '<div class="empty-day-hint">No tasks</div>' : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderDayView() {
    const d = this.selectedDate;
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const tasks = window.State.getAllTasks().filter(t => t.plannedDate === dateStr);

    return `
      <div class="calendar-day-view p-3" data-date="${dateStr}">
        <div class="d-flex justify-between align-center mb-3">
          <h3>Planned Tasks for ${window.Utils.formatDate(dateStr, 'long')} (${tasks.length})</h3>
          <button class="btn btn-primary btn-sm" onclick="App.openTaskModal(null, '${dateStr}')">
            <i data-lucide="plus"></i> Add Task for this Day
          </button>
        </div>

        <div class="day-view-list">
          ${tasks.length === 0 ? `
            <div class="empty-state p-4 text-center">
              <i data-lucide="calendar" class="empty-icon text-muted"></i>
              <p>No tasks scheduled for this day.</p>
            </div>
          ` : tasks.map(t => `
            <div class="day-task-row card p-3 mb-2 d-flex justify-between align-center hover-lift" onclick="App.openEditTaskModal('${t.id}')">
              <div class="d-flex align-center gap-3">
                <span class="custom-checkbox ${t.status === 'Completed' ? 'checked' : ''}" onclick="event.stopPropagation(); State.setTaskStatus('${t.id}', '${t.status === 'Completed' ? 'In Progress' : 'Completed'}')">
                  ${t.status === 'Completed' ? '<i data-lucide="check"></i>' : ''}
                </span>
                <div>
                  <h4 class="${t.status === 'Completed' ? 'strikethrough' : ''}">${window.Utils.escapeHtml(t.name)}</h4>
                  <span class="text-muted text-xs">${window.Utils.escapeHtml(t.trackName)} &gt; ${window.Utils.escapeHtml(t.subjectName)}</span>
                </div>
              </div>
              <div class="d-flex align-center gap-2" onclick="event.stopPropagation()">
                <span class="badge ${t.status === 'Completed' ? 'badge-success' : 'badge-neutral'}">${t.status}</span>
                <button class="btn btn-xs btn-secondary" onclick="CalendarView.openReschedulePicker('${t.id}')">Move Date</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderTaskChip(task, full = false) {
    const isCompleted = task.status === 'Completed';
    return `
      <div 
        class="task-chip ${isCompleted ? 'chip-completed' : ''}" 
        draggable="true"
        data-task-id="${task.id}"
        style="border-left: 3px solid ${task.trackColor || '#3b82f6'};"
        onclick="App.openEditTaskModal('${task.id}')"
        title="${window.Utils.escapeHtml(task.name)} (${task.status})"
      >
        <span class="chip-dot" style="background-color: ${isCompleted ? '#10b981' : task.trackColor};"></span>
        <span class="chip-title ${isCompleted ? 'strikethrough' : ''}">${window.Utils.escapeHtml(task.name)}</span>
      </div>
    `;
  },

  openDayModal(dateStr) {
    this.selectedDate = new Date(dateStr);
    this.setMode('day');
  },

  openReschedulePicker(taskId) {
    const todayStr = window.Utils.getTodayString();
    const content = `
      <div>
        <label class="form-label">Select new planned date:</label>
        <input type="date" id="calendar-new-date" class="input mb-3" value="${todayStr}">
        <div class="d-flex justify-end gap-2">
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button class="btn btn-primary" onclick="
            const d = document.getElementById('calendar-new-date').value;
            if (d) {
              State.rescheduleTask('${taskId}', d);
              App.closeGenericModal();
              Utils.showToast('Task moved to ' + Utils.formatDate(d, 'short'), 'success');
            }
          ">Save Date</button>
        </div>
      </div>
    `;

    App.openGenericModal({
      title: 'Reschedule Task',
      contentHtml: content,
      showSave: false
    });
  },

  bindCalendarDragEvents() {
    const chips = document.querySelectorAll('.task-chip[draggable="true"]');
    chips.forEach(chip => {
      chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', chip.dataset.taskId);
        chip.classList.add('is-dragging');
      });

      chip.addEventListener('dragend', () => {
        chip.classList.remove('is-dragging');
      });
    });

    const dropCells = document.querySelectorAll('.calendar-cell, .week-column');
    dropCells.forEach(cell => {
      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cell.classList.add('cell-drop-hover');
      });

      cell.addEventListener('dragleave', () => {
        cell.classList.remove('cell-drop-hover');
      });

      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        cell.classList.remove('cell-drop-hover');
        const taskId = e.dataTransfer.getData('text/plain');
        const targetDate = cell.dataset.date;

        if (taskId && targetDate) {
          window.State.rescheduleTask(taskId, targetDate);
          window.Utils.showToast(`Task moved to ${window.Utils.formatDate(targetDate, 'short')}`, 'success');
        }
      });
    });
  }
};

window.CalendarView = CalendarView;
