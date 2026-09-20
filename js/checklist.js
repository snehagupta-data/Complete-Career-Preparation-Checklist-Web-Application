/**
 * Career Preparation & Skill Mastery Checklist
 * Master Checklist Module (Hierarchy: Track -> Subject -> Topic -> Subtopic -> Task)
 * Full CRUD, Move, Duplicate, Filter, Reorder, Status Toggles, Topic Details
 */

const Checklist = {
  currentTrackFilter: 'all',
  currentStatusFilter: 'all',
  searchQuery: '',
  collapsedNodes: new Set(),

  init() {
    // Initial collapse setup if needed
  },

  setTrackFilter(trackId) {
    this.currentTrackFilter = trackId;
    this.render();
  },

  setStatusFilter(status) {
    this.currentStatusFilter = status;
    this.render();
  },

  setSearchQuery(query) {
    this.searchQuery = (query || '').toLowerCase().trim();
    this.render();
  },

  toggleNode(nodeId) {
    if (this.collapsedNodes.has(nodeId)) {
      this.collapsedNodes.delete(nodeId);
    } else {
      this.collapsedNodes.add(nodeId);
    }
    const el = document.getElementById(`collapse-${nodeId}`);
    const icon = document.getElementById(`chevron-${nodeId}`);
    if (el) el.classList.toggle('collapsed');
    if (icon) icon.classList.toggle('rotated');
  },

  expandAll() {
    this.collapsedNodes.clear();
    this.render();
  },

  collapseAll() {
    const tracks = window.State.getTracks();
    tracks.forEach(tr => {
      this.collapsedNodes.add(tr.id);
      (tr.subjects || []).forEach(s => {
        this.collapsedNodes.add(s.id);
        (s.topics || []).forEach(top => {
          this.collapsedNodes.add(top.id);
        });
      });
    });
    this.render();
  },

  render() {
    const container = document.getElementById('view-checklist');
    if (!container) return;

    const tracks = window.State.getTracks();
    const stats = window.State.getCompletionStats();

    container.innerHTML = `
      <div class="checklist-header-bar">
        <div>
          <h1 class="page-title">Master Syllabus & Skill Checklist</h1>
          <p class="page-subtitle">Fully customizable hierarchy. Complete tasks at your own pace without streak resets.</p>
        </div>

        <div class="checklist-top-actions">
          <button class="btn btn-outline-secondary" onclick="Checklist.expandAll()">
            <i data-lucide="chevrons-down"></i> Expand All
          </button>
          <button class="btn btn-outline-secondary" onclick="Checklist.collapseAll()">
            <i data-lucide="chevrons-up"></i> Collapse All
          </button>
          <button class="btn btn-secondary" onclick="App.openTrackModal()">
            <i data-lucide="folder-plus"></i> Add Track
          </button>
          <button class="btn btn-primary" onclick="App.openTaskModal()">
            <i data-lucide="plus"></i> Add Task
          </button>
        </div>
      </div>

      <!-- Filters & Search Toolbar -->
      <div class="checklist-toolbar card">
        <div class="search-input-wrap">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="text" 
            class="input search-input" 
            placeholder="Search tasks, topics, formulas, or concepts..."
            value="${window.Utils.escapeHtml(this.searchQuery)}"
            oninput="Checklist.setSearchQuery(this.value)"
          >
          ${this.searchQuery ? `
            <button class="clear-search-btn" onclick="Checklist.setSearchQuery(''); document.querySelector('.search-input').value = '';">
              &times;
            </button>
          ` : ''}
        </div>

        <div class="filter-group">
          <label class="filter-label">Track:</label>
          <div class="filter-pills">
            <button 
              class="filter-pill ${this.currentTrackFilter === 'all' ? 'active' : ''}" 
              onclick="Checklist.setTrackFilter('all')">
              All Tracks (${stats.totalTasks})
            </button>
            ${tracks.map(t => {
              const count = stats.trackStats.find(s => s.id === t.id)?.total || 0;
              return `
                <button 
                  class="filter-pill ${this.currentTrackFilter === t.id ? 'active' : ''}"
                  style="${this.currentTrackFilter === t.id ? `background-color: ${t.color}; color: white; border-color: ${t.color};` : ''}"
                  onclick="Checklist.setTrackFilter('${t.id}')">
                  ${window.Utils.escapeHtml(t.name)} (${count})
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="filter-group">
          <label class="filter-label">Status:</label>
          <div class="filter-pills">
            <button class="filter-pill ${this.currentStatusFilter === 'all' ? 'active' : ''}" onclick="Checklist.setStatusFilter('all')">
              All (${stats.totalTasks})
            </button>
            <button class="filter-pill status-pill-notstarted ${this.currentStatusFilter === 'Not Started' ? 'active' : ''}" onclick="Checklist.setStatusFilter('Not Started')">
              Not Started (${stats.notStartedTasks})
            </button>
            <button class="filter-pill status-pill-inprogress ${this.currentStatusFilter === 'In Progress' ? 'active' : ''}" onclick="Checklist.setStatusFilter('In Progress')">
              In Progress (${stats.inProgressTasks})
            </button>
            <button class="filter-pill status-pill-completed ${this.currentStatusFilter === 'Completed' ? 'active' : ''}" onclick="Checklist.setStatusFilter('Completed')">
              Completed (${stats.completedTasks})
            </button>
            <button class="filter-pill status-pill-revision ${this.currentStatusFilter === 'Need Revision' ? 'active' : ''}" onclick="Checklist.setStatusFilter('Need Revision')">
              Need Revision (${stats.needRevisionTasks})
            </button>
          </div>
        </div>
      </div>

      <!-- Tracks & Subjects Hierarchy Tree -->
      <div class="hierarchy-container">
        ${this.renderTracksList(tracks)}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    this.bindDragEvents();
  },

  renderTracksList(tracks) {
    const filteredTracks = tracks.filter(t => {
      if (this.currentTrackFilter !== 'all' && t.id !== this.currentTrackFilter) return false;
      return true;
    });

    if (filteredTracks.length === 0) {
      return `
        <div class="empty-state card">
          <div class="empty-icon"><i data-lucide="layers"></i></div>
          <h3>No tracks found</h3>
          <p>No tracks match your current filter settings. Reset filters or create a new track.</p>
          <button class="btn btn-secondary mt-3" onclick="Checklist.setTrackFilter('all'); Checklist.setStatusFilter('all');">Reset Filters</button>
        </div>
      `;
    }

    return filteredTracks.map(track => {
      const isCollapsed = this.collapsedNodes.has(track.id);
      let trackTotal = 0;
      let trackCompleted = 0;

      (track.subjects || []).forEach(s => {
        (s.topics || []).forEach(top => {
          (top.subtopics || []).forEach(sub => {
            (sub.tasks || []).forEach(t => {
              trackTotal++;
              if (t.status === 'Completed') trackCompleted++;
            });
          });
        });
      });

      const trackPct = trackTotal > 0 ? Math.round((trackCompleted / trackTotal) * 100) : 0;

      return `
        <div class="tree-track-card card" id="track-card-${track.id}">
          <div class="tree-track-header" onclick="Checklist.toggleNode('${track.id}')">
            <div class="tree-node-left">
              <span class="chevron-toggle ${isCollapsed ? '' : 'rotated'}" id="chevron-${track.id}">
                <i data-lucide="chevron-right"></i>
              </span>
              <div class="track-tag" style="background-color: ${track.color}20; color: ${track.color}; border: 1px solid ${track.color}40;">
                <i data-lucide="${track.icon || 'folder'}"></i>
                <span>${window.Utils.escapeHtml(track.name)}</span>
              </div>
              <span class="node-count">${trackCompleted}/${trackTotal} tasks (${trackPct}%)</span>
            </div>

            <div class="tree-node-right" onclick="event.stopPropagation()">
              <div class="mini-progress-bar">
                <div class="mini-progress-fill" style="width: ${trackPct}%; background-color: ${track.color};"></div>
              </div>

              <div class="dropdown-actions">
                <button class="btn btn-xs btn-ghost" title="Add Subject" onclick="App.openSubjectModal('${track.id}')">
                  <i data-lucide="plus"></i> Subject
                </button>
                <button class="btn btn-xs btn-ghost" title="Edit Track" onclick="App.openEditTrackModal('${track.id}')">
                  <i data-lucide="edit-2"></i>
                </button>
                <button class="btn btn-xs btn-ghost text-danger" title="Delete Track" onclick="App.confirmDeleteTrack('${track.id}')">
                  <i data-lucide="trash-2"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Collapsible Track Body -->
          <div class="tree-collapsible-body ${isCollapsed ? 'collapsed' : ''}" id="collapse-${track.id}">
            <div class="track-subjects-list">
              ${(track.subjects || []).length === 0 ? `
                <div class="empty-child-hint">
                  No subjects in this track yet. 
                  <button class="link-btn" onclick="App.openSubjectModal('${track.id}')">Add a subject</button>
                </div>
              ` : track.subjects.map(subject => this.renderSubject(track, subject)).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  renderSubject(track, subject) {
    const isCollapsed = this.collapsedNodes.has(subject.id);
    let subjTotal = 0;
    let subjCompleted = 0;

    (subject.topics || []).forEach(top => {
      (top.subtopics || []).forEach(sub => {
        (sub.tasks || []).forEach(t => {
          subjTotal++;
          if (t.status === 'Completed') subjCompleted++;
        });
      });
    });

    const subjPct = subjTotal > 0 ? Math.round((subjCompleted / subjTotal) * 100) : 0;

    return `
      <div class="tree-subject-node" id="subject-node-${subject.id}">
        <div class="tree-subject-header" onclick="Checklist.toggleNode('${subject.id}')">
          <div class="tree-node-left">
            <span class="chevron-toggle ${isCollapsed ? '' : 'rotated'}" id="chevron-${subject.id}">
              <i data-lucide="chevron-right"></i>
            </span>
            <span class="subject-title">${window.Utils.escapeHtml(subject.name)}</span>
            <span class="badge badge-subtle">${subjCompleted}/${subjTotal} (${subjPct}%)</span>
          </div>

          <div class="tree-node-right" onclick="event.stopPropagation()">
            <button class="btn btn-xs btn-ghost" title="Add Topic" onclick="App.openTopicModal('${subject.id}')">
              <i data-lucide="plus"></i> Topic
            </button>
            <button class="btn btn-xs btn-ghost" title="Edit Subject" onclick="App.openEditSubjectModal('${subject.id}')">
              <i data-lucide="edit-2"></i>
            </button>
            <button class="btn btn-xs btn-ghost text-danger" title="Delete Subject" onclick="App.confirmDeleteSubject('${subject.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="tree-collapsible-body ${isCollapsed ? 'collapsed' : ''}" id="collapse-${subject.id}">
          <div class="subject-topics-list">
            ${(subject.topics || []).length === 0 ? `
              <div class="empty-child-hint">No topics in this subject. <button class="link-btn" onclick="App.openTopicModal('${subject.id}')">Add a topic</button></div>
            ` : subject.topics.map(topic => this.renderTopic(track, subject, topic)).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderTopic(track, subject, topic) {
    const isCollapsed = this.collapsedNodes.has(topic.id);
    let topTotal = 0;
    let topCompleted = 0;

    (topic.subtopics || []).forEach(sub => {
      (sub.tasks || []).forEach(t => {
        topTotal++;
        if (t.status === 'Completed') topCompleted++;
      });
    });

    const topPct = topTotal > 0 ? Math.round((topCompleted / topTotal) * 100) : 0;

    return `
      <div class="tree-topic-node" id="topic-node-${topic.id}">
        <div class="tree-topic-header" onclick="Checklist.toggleNode('${topic.id}')">
          <div class="tree-node-left">
            <span class="chevron-toggle ${isCollapsed ? '' : 'rotated'}" id="chevron-${topic.id}">
              <i data-lucide="chevron-right"></i>
            </span>
            <span class="topic-title">${window.Utils.escapeHtml(topic.name)}</span>
            <span class="badge badge-pill ${topPct === 100 ? 'badge-success' : 'badge-neutral'}">${topPct}%</span>
          </div>

          <div class="tree-node-right" onclick="event.stopPropagation()">
            <button class="btn btn-xs btn-ghost" title="Topic Overview" onclick="Checklist.showTopicModal('${topic.id}')">
              <i data-lucide="info"></i> Details
            </button>
            <button class="btn btn-xs btn-ghost" title="Add Subtopic" onclick="App.openSubtopicModal('${topic.id}')">
              <i data-lucide="plus"></i> Subtopic
            </button>
            <button class="btn btn-xs btn-ghost" title="Edit Topic" onclick="App.openEditTopicModal('${topic.id}')">
              <i data-lucide="edit-2"></i>
            </button>
            <button class="btn btn-xs btn-ghost text-danger" title="Delete Topic" onclick="App.confirmDeleteTopic('${topic.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="tree-collapsible-body ${isCollapsed ? 'collapsed' : ''}" id="collapse-${topic.id}">
          <div class="topic-subtopics-list">
            ${(topic.subtopics || []).map(subtopic => this.renderSubtopic(track, subject, topic, subtopic)).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderSubtopic(track, subject, topic, subtopic) {
    const isCollapsed = this.collapsedNodes.has(subtopic.id);

    // Filter tasks based on search & status filter
    const allTasks = subtopic.tasks || [];
    const visibleTasks = allTasks.filter(task => {
      if (this.currentStatusFilter !== 'all' && task.status !== this.currentStatusFilter) {
        return false;
      }
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchName = (task.name || '').toLowerCase().includes(q);
        const matchDesc = (task.description || '').toLowerCase().includes(q);
        const matchNotes = (task.notes || '').toLowerCase().includes(q);
        const matchQuestions = (task.interviewQuestions || '').toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchNotes && !matchQuestions) return false;
      }
      return true;
    });

    // If search active and no matching tasks in this subtopic, don't clutter unless searchQuery is empty
    if (this.searchQuery && visibleTasks.length === 0) {
      return '';
    }

    return `
      <div class="tree-subtopic-node" id="subtopic-node-${subtopic.id}">
        <div class="tree-subtopic-header" onclick="Checklist.toggleNode('${subtopic.id}')">
          <div class="tree-node-left">
            <span class="chevron-toggle ${isCollapsed ? '' : 'rotated'}" id="chevron-${subtopic.id}">
              <i data-lucide="chevron-right"></i>
            </span>
            <span class="subtopic-title">${window.Utils.escapeHtml(subtopic.name)}</span>
            <span class="badge badge-pill badge-neutral">${visibleTasks.length} tasks</span>
          </div>

          <div class="tree-node-right" onclick="event.stopPropagation()">
            <button class="btn btn-xs btn-primary" onclick="App.openTaskModal('${subtopic.id}')">
              <i data-lucide="plus"></i> Add Task
            </button>
            <button class="btn btn-xs btn-ghost" title="Rename Subtopic" onclick="App.openEditSubtopicModal('${subtopic.id}')">
              <i data-lucide="edit-2"></i>
            </button>
            <button class="btn btn-xs btn-ghost text-danger" title="Delete Subtopic" onclick="App.confirmDeleteSubtopic('${subtopic.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="tree-collapsible-body ${isCollapsed ? 'collapsed' : ''}" id="collapse-${subtopic.id}">
          <div class="tasks-dropzone" data-subtopic-id="${subtopic.id}">
            ${visibleTasks.length === 0 ? `
              <div class="empty-child-hint">
                ${allTasks.length === 0 ? 'No tasks created yet in this subtopic.' : 'No tasks match your status filter.'}
                <button class="link-btn" onclick="App.openTaskModal('${subtopic.id}')">Add a task</button>
              </div>
            ` : visibleTasks.map((task, index) => this.renderTaskRow(task, subtopic.id, index, visibleTasks.length)).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderTaskRow(task, subtopicId, index, total) {
    const isCompleted = task.status === 'Completed';
    let statusClass = 'status-notstarted';
    if (task.status === 'In Progress') statusClass = 'status-inprogress';
    if (task.status === 'Completed') statusClass = 'status-completed';
    if (task.status === 'Need Revision') statusClass = 'status-revision';

    const todayStr = window.Utils.getTodayString();
    const isPlannedToday = task.plannedDate === todayStr;
    const isOverdue = !isCompleted && task.plannedDate && task.plannedDate < todayStr;

    return `
      <div 
        class="task-row ${isCompleted ? 'task-completed-state' : ''}" 
        id="task-row-${task.id}"
        draggable="true"
        data-task-id="${task.id}"
        data-subtopic-id="${subtopicId}"
      >
        <div class="task-drag-handle" title="Drag to reorder">
          <i data-lucide="grip-vertical"></i>
        </div>

        <!-- Custom Status Checkbox -->
        <div class="task-status-trigger" onclick="Checklist.cycleStatus('${task.id}')" title="Click to cycle status: Not Started -> In Progress -> Completed -> Need Revision">
          <div class="custom-checkbox ${isCompleted ? 'checked' : ''} ${task.status === 'In Progress' ? 'in-progress' : ''} ${task.status === 'Need Revision' ? 'need-revision' : ''}">
            ${isCompleted ? '<i data-lucide="check"></i>' : ''}
            ${task.status === 'In Progress' ? '<span class="dot-in-progress"></span>' : ''}
            ${task.status === 'Need Revision' ? '<i data-lucide="repeat"></i>' : ''}
          </div>
        </div>

        <!-- Task Content -->
        <div class="task-info" onclick="App.openEditTaskModal('${task.id}')">
          <div class="task-title-line">
            <span class="task-name ${isCompleted ? 'strikethrough' : ''}">${window.Utils.escapeHtml(task.name)}</span>
            
            <div class="task-badges-inline">
              <span class="task-status-badge ${statusClass}">
                ${task.status}
              </span>

              ${task.plannedDate ? `
                <span class="task-date-pill ${isOverdue ? 'date-overdue' : (isPlannedToday ? 'date-today' : '')}" title="${isOverdue ? 'Planned date passed (no penalty - reschedule anytime)' : 'Planned date'}">
                  <i data-lucide="calendar"></i> ${window.Utils.formatDate(task.plannedDate, 'short')}
                </span>
              ` : ''}

              ${task.estimatedHours ? `
                <span class="task-meta-pill" title="Estimated: ${task.estimatedHours}h | Actual: ${task.actualHours || 0}h">
                  <i data-lucide="clock"></i> ${task.actualHours > 0 ? `${task.actualHours}/` : ''}${task.estimatedHours}h
                </span>
              ` : ''}

              ${task.revisionDate ? `
                <span class="task-meta-pill text-purple" title="Revision date">
                  <i data-lucide="repeat"></i> ${window.Utils.formatDate(task.revisionDate, 'short')}
                </span>
              ` : ''}

              ${(task.resources || []).length > 0 ? `
                <span class="task-meta-pill" title="${task.resources.length} resource link(s)">
                  <i data-lucide="link"></i> ${task.resources.length}
                </span>
              ` : ''}
            </div>
          </div>

          ${task.description ? `
            <p class="task-desc-line">${window.Utils.escapeHtml(task.description)}</p>
          ` : ''}
        </div>

        <!-- Quick Action Menu -->
        <div class="task-actions">
          <!-- Accessibility Move Up/Down buttons -->
          <div class="task-reorder-btns">
            <button class="btn btn-icon btn-ghost" title="Move Up" ${index === 0 ? 'disabled' : ''} onclick="Checklist.reorderTask('${task.id}', 'up')">
              <i data-lucide="chevron-up"></i>
            </button>
            <button class="btn btn-icon btn-ghost" title="Move Down" ${index === total - 1 ? 'disabled' : ''} onclick="Checklist.reorderTask('${task.id}', 'down')">
              <i data-lucide="chevron-down"></i>
            </button>
          </div>

          <button class="btn btn-icon btn-ghost" title="Add to Today's Plan" onclick="Checklist.quickAddToToday('${task.id}')">
            <i data-lucide="sun"></i>
          </button>
          <button class="btn btn-icon btn-ghost" title="Schedule Spaced Revision" onclick="App.openScheduleRevisionModal('${task.id}')">
            <i data-lucide="repeat"></i>
          </button>
          <button class="btn btn-icon btn-ghost" title="Move to another Subject/Track" onclick="App.openMoveTaskModal('${task.id}')">
            <i data-lucide="move"></i>
          </button>
          <button class="btn btn-icon btn-ghost" title="Duplicate Task" onclick="Checklist.duplicateTask('${task.id}')">
            <i data-lucide="copy"></i>
          </button>
          <button class="btn btn-icon btn-ghost" title="Edit Details" onclick="App.openEditTaskModal('${task.id}')">
            <i data-lucide="edit-2"></i>
          </button>
          <button class="btn btn-icon btn-ghost text-danger" title="Delete Task" onclick="Checklist.deleteTask('${task.id}')">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    `;
  },

  /**
   * Cycle task status easily with 1-click on the checkbox
   */
  cycleStatus(taskId) {
    const found = window.State.getTaskById(taskId);
    if (!found) return;

    const sequence = ['Not Started', 'In Progress', 'Completed', 'Need Revision'];
    const currentIdx = sequence.indexOf(found.task.status);
    const nextStatus = sequence[(currentIdx + 1) % sequence.length];

    window.State.setTaskStatus(taskId, nextStatus);
    window.Utils.showToast(`Status updated to "${nextStatus}"`, 'info');
  },

  quickAddToToday(taskId) {
    window.State.addToToday(taskId);
    window.Utils.showToast('Added task to Today\'s Focus list!', 'success');
  },

  duplicateTask(taskId) {
    window.State.duplicateTask(taskId);
    window.Utils.showToast('Task duplicated!', 'success');
  },

  deleteTask(taskId) {
    const found = window.State.getTaskById(taskId);
    if (!found) return;

    App.confirmModal({
      title: 'Delete Task?',
      message: `Are you sure you want to delete "${found.task.name}"? This action cannot be undone.`,
      confirmText: 'Delete Task',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteTask(taskId);
        window.Utils.showToast('Task deleted', 'info');
      }
    });
  },

  /**
   * Accessible Up/Down task reordering
   */
  reorderTask(taskId, direction) {
    const found = window.State.getTaskById(taskId);
    if (!found) return;
    const { subtopic } = found;
    const tasks = subtopic.tasks || [];
    const idx = tasks.findIndex(t => t.id === taskId);
    if (idx === -1) return;

    if (direction === 'up' && idx > 0) {
      const temp = tasks[idx];
      tasks[idx] = tasks[idx - 1];
      tasks[idx - 1] = temp;
      window.State.notify('tasks:reordered', { subtopicId: subtopic.id });
    } else if (direction === 'down' && idx < tasks.length - 1) {
      const temp = tasks[idx];
      tasks[idx] = tasks[idx + 1];
      tasks[idx + 1] = temp;
      window.State.notify('tasks:reordered', { subtopicId: subtopic.id });
    }
  },

  /**
   * Show Topic Details Modal
   */
  showTopicModal(topicId) {
    let targetTopic = null;
    let targetSubject = null;
    let targetTrack = null;

    for (const track of window.State.getTracks()) {
      for (const subj of track.subjects || []) {
        for (const top of subj.topics || []) {
          if (top.id === topicId) {
            targetTopic = top;
            targetSubject = subj;
            targetTrack = track;
            break;
          }
        }
      }
    }

    if (!targetTopic) return;

    let tasks = [];
    (targetTopic.subtopics || []).forEach(sub => {
      (sub.tasks || []).forEach(t => tasks.push({ ...t, subtopicName: sub.name }));
    });

    const completed = tasks.filter(t => t.status === 'Completed').length;
    const pct = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0;

    const modalBody = `
      <div class="topic-modal-content">
        <div class="topic-modal-breadcrumbs">
          <span>${window.Utils.escapeHtml(targetTrack.name)}</span> &gt;
          <span>${window.Utils.escapeHtml(targetSubject.name)}</span> &gt;
          <strong>${window.Utils.escapeHtml(targetTopic.name)}</strong>
        </div>

        <div class="topic-progress-card card mt-3">
          <div class="d-flex justify-between align-center">
            <div>
              <h3>Topic Mastery: ${pct}%</h3>
              <p class="text-muted">${completed} of ${tasks.length} tasks completed</p>
            </div>
            <div class="badge badge-pill ${pct === 100 ? 'badge-success' : 'badge-primary'} p-2">
              ${pct === 100 ? 'Fully Mastered' : 'In Progress'}
            </div>
          </div>
          <div class="kpi-progress mt-2">
            <div class="kpi-progress-bar bg-primary" style="width: ${pct}%"></div>
          </div>
        </div>

        <h4 class="mt-4 mb-2">Tasks in this Topic</h4>
        <div class="topic-tasks-list">
          ${tasks.length === 0 ? '<p class="text-muted">No tasks in this topic.</p>' : tasks.map(t => `
            <div class="topic-task-item">
              <span class="custom-checkbox ${t.status === 'Completed' ? 'checked' : ''}">
                ${t.status === 'Completed' ? '<i data-lucide="check"></i>' : ''}
              </span>
              <div class="flex-1">
                <strong>${window.Utils.escapeHtml(t.name)}</strong>
                <span class="text-muted d-block text-sm">${window.Utils.escapeHtml(t.subtopicName)} · ${t.status}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    App.openGenericModal({
      title: targetTopic.name,
      contentHtml: modalBody,
      showSave: false,
      closeText: 'Close'
    });
  },

  /**
   * HTML5 Drag and Drop event binding for tasks
   */
  bindDragEvents() {
    const taskRows = document.querySelectorAll('.task-row[draggable="true"]');
    taskRows.forEach(row => {
      row.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', row.dataset.taskId);
        e.dataTransfer.setData('source-subtopic', row.dataset.subtopicId);
        row.classList.add('is-dragging');
      });

      row.addEventListener('dragend', () => {
        row.classList.remove('is-dragging');
      });
    });

    const dropzones = document.querySelectorAll('.tasks-dropzone');
    dropzones.forEach(dz => {
      dz.addEventListener('dragover', (e) => {
        e.preventDefault();
        dz.classList.add('dropzone-active');
      });

      dz.addEventListener('dragleave', () => {
        dz.classList.remove('dropzone-active');
      });

      dz.addEventListener('drop', (e) => {
        e.preventDefault();
        dz.classList.remove('dropzone-active');
        const taskId = e.dataTransfer.getData('text/plain');
        const targetSubtopicId = dz.dataset.subtopicId;

        if (taskId && targetSubtopicId) {
          window.State.moveTask(taskId, targetSubtopicId);
          window.Utils.showToast('Task moved successfully!', 'success');
        }
      });
    });
  }
};

window.Checklist = Checklist;
