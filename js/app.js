/**
 * Career Preparation & Skill Mastery Checklist
 * Main Application Controller & Router
 * Global Search, Modals, Keyboard Shortcuts, and Navigation
 */

const App = {
  currentView: 'dashboard',
  activeModal: null,

  init() {
    window.State.init();

    // Theme initialization
    const theme = window.State.getSettings().theme || 'dark';
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

    // Subscribe to state changes for reactive re-rendering
    window.State.subscribe((event, payload) => {
      this.updateHeaderStats();
      this.renderCurrentView();
    });

    this.bindEvents();
    this.updateHeaderStats();
    this.navigateTo('dashboard');
  },

  updateHeaderStats() {
    const targetInfo = window.State.getTargetInfo();
    const stats = window.State.getCompletionStats();

    // Days counter in header
    const daysEl = document.getElementById('header-days-remaining');
    const badgeEl = document.getElementById('header-target-badge');
    if (daysEl) daysEl.textContent = `${targetInfo.daysRemaining}d`;
    if (badgeEl) badgeEl.textContent = targetInfo.isPastTarget ? 'Target Reached' : `${targetInfo.daysRemaining} days remaining`;

    // Completion % in header
    const pctEl = document.getElementById('header-completion-pct');
    if (pctEl) pctEl.textContent = `${stats.overallPercentage}%`;

    // Gamification in header
    if (window.Gamification) {
      window.Gamification.updateHeaderXP();
    }
  },

  navigateTo(viewName) {
    this.currentView = viewName;

    // Update sidebar navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.view === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Hide all views and show active
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.add('d-none');
    });

    const activePanel = document.getElementById(`view-${viewName}`);
    if (activePanel) {
      activePanel.classList.remove('d-none');
    }

    // Render corresponding view
    this.renderCurrentView();

    // Close mobile sidebar if open
    document.body.classList.remove('sidebar-mobile-open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderCurrentView() {
    switch (this.currentView) {
      case 'dashboard':
        if (window.Dashboard) window.Dashboard.render();
        break;
      case 'checklist':
        if (window.Checklist) window.Checklist.render();
        break;
      case 'today':
        if (window.TodayView) window.TodayView.render();
        break;
      case 'calendar':
        if (window.CalendarView) window.CalendarView.render();
        break;
      case 'tracks':
        if (window.TracksView) window.TracksView.render();
        break;
      case 'projects':
        if (window.ProjectsView) window.ProjectsView.render();
        break;
      case 'exams':
        if (window.ExamsView) window.ExamsView.render();
        break;
      case 'revisions':
        if (window.RevisionsView) window.RevisionsView.render();
        break;
      case 'analytics':
        if (window.AnalyticsView) window.AnalyticsView.render();
        break;
      case 'settings':
        if (window.SettingsView) window.SettingsView.render();
        break;
    }

    if (window.lucide) window.lucide.createIcons();
  },

  filterChecklistByTrack(trackId) {
    this.navigateTo('checklist');
    if (window.Checklist) {
      window.Checklist.setTrackFilter(trackId);
    }
  },

  openChecklistSubject(trackId, subjectId) {
    this.navigateTo('checklist');
    if (window.Checklist) {
      window.Checklist.setTrackFilter(trackId);
      // Ensure subject is expanded
      window.Checklist.collapsedNodes.delete(subjectId);
      window.Checklist.collapsedNodes.delete(trackId);
      window.Checklist.render();
    }
  },

  toggleMobileSidebar() {
    document.body.classList.toggle('sidebar-mobile-open');
  },

  /* ==========================================================================
     GLOBAL SEARCH
     ========================================================================== */

  openGlobalSearch() {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    modal.classList.remove('d-none');
    const input = document.getElementById('global-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.renderSearchResults('');
  },

  closeGlobalSearch() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.classList.add('d-none');
  },

  handleGlobalSearch(query) {
    this.renderSearchResults(query.toLowerCase().trim());
  },

  renderSearchResults(q) {
    const container = document.getElementById('search-results-list');
    if (!container) return;

    if (!q) {
      container.innerHTML = `
        <div class="search-hint-box text-muted p-4 text-center">
          <p>Type to search across tracks, subjects, topics, tasks, projects, and interview questions...</p>
        </div>
      `;
      return;
    }

    const allTasks = window.State.getAllTasks();
    const projects = window.State.getProjects();
    const exams = window.State.getExams();

    const matchingTasks = allTasks.filter(t => 
      t.name.toLowerCase().includes(q) ||
      (t.description || '').toLowerCase().includes(q) ||
      (t.notes || '').toLowerCase().includes(q) ||
      (t.interviewQuestions || '').toLowerCase().includes(q)
    );

    const matchingProjects = projects.filter(p => 
      p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q)
    );

    const matchingExams = exams.filter(e => 
      e.name.toLowerCase().includes(q) || e.company.toLowerCase().includes(q) || (e.syllabus || '').toLowerCase().includes(q)
    );

    let html = '';

    // Group matching tasks by Subject & Track
    if (matchingTasks.length > 0) {
      html += `<div class="search-category-header">Tasks & Syllabus (${matchingTasks.length})</div>`;
      matchingTasks.slice(0, 15).forEach(t => {
        html += `
          <div class="search-result-item" onclick="App.jumpToTask('${t.id}')">
            <div class="search-result-icon"><i data-lucide="check-square"></i></div>
            <div class="search-result-content">
              <div class="search-result-title">${window.Utils.escapeHtml(t.name)}</div>
              <div class="search-result-sub text-muted">
                ${window.Utils.escapeHtml(t.trackName)} &gt; ${window.Utils.escapeHtml(t.subjectName)} &gt; ${window.Utils.escapeHtml(t.subtopicName)}
              </div>
            </div>
            <span class="badge badge-subtle">${t.status}</span>
          </div>
        `;
      });
    }

    if (matchingProjects.length > 0) {
      html += `<div class="search-category-header mt-3">Projects (${matchingProjects.length})</div>`;
      matchingProjects.forEach(p => {
        html += `
          <div class="search-result-item" onclick="App.navigateTo('projects'); App.closeGlobalSearch();">
            <div class="search-result-icon"><i data-lucide="folder-git-2"></i></div>
            <div class="search-result-content">
              <div class="search-result-title">${window.Utils.escapeHtml(p.name)}</div>
              <div class="search-result-sub text-muted">${window.Utils.escapeHtml(p.category)} · ${p.status}</div>
            </div>
          </div>
        `;
      });
    }

    if (matchingExams.length > 0) {
      html += `<div class="search-category-header mt-3">Exams & Assessments (${matchingExams.length})</div>`;
      matchingExams.forEach(e => {
        html += `
          <div class="search-result-item" onclick="App.navigateTo('exams'); App.closeGlobalSearch();">
            <div class="search-result-icon"><i data-lucide="award"></i></div>
            <div class="search-result-content">
              <div class="search-result-title">${window.Utils.escapeHtml(e.company)} - ${window.Utils.escapeHtml(e.name)}</div>
              <div class="search-result-sub text-muted">${e.status}</div>
            </div>
          </div>
        `;
      });
    }

    if (!html) {
      html = `
        <div class="search-hint-box text-muted p-4 text-center">
          <p>No results found for "<strong>${window.Utils.escapeHtml(q)}</strong>".</p>
        </div>
      `;
    }

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  jumpToTask(taskId) {
    this.closeGlobalSearch();
    this.navigateTo('checklist');
    const found = window.State.getTaskById(taskId);
    if (found) {
      window.Checklist.setTrackFilter(found.track.id);
      window.Checklist.collapsedNodes.delete(found.subject.id);
      window.Checklist.collapsedNodes.delete(found.topic.id);
      window.Checklist.collapsedNodes.delete(found.track.id);
      window.Checklist.render();
      setTimeout(() => {
        const el = document.getElementById(`task-row-${taskId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('highlight-flash');
          setTimeout(() => el.classList.remove('highlight-flash'), 2000);
        }
      }, 200);
    }
  },

  /* ==========================================================================
     TASK EDITOR MODAL (Full CRUD & All Required Fields)
     ========================================================================== */

  openTaskModal(preselectedSubtopicId = null, defaultPlannedDate = '') {
    const tracks = window.State.getTracks();
    const subtopics = [];
    tracks.forEach(tr => {
      (tr.subjects || []).forEach(s => {
        (s.topics || []).forEach(top => {
          (top.subtopics || []).forEach(sub => {
            subtopics.push({
              id: sub.id,
              name: `${tr.name} > ${s.name} > ${sub.name}`
            });
          });
        });
      });
    });

    const chosenSubId = preselectedSubtopicId || (subtopics[0]?.id || '');

    const content = `
      <form id="task-editor-form" onsubmit="event.preventDefault(); App.saveNewTask();">
        <div class="form-group mb-3">
          <label class="form-label">Subtopic Placement *</label>
          <select id="edit-task-subtopic" class="input" required>
            ${subtopics.map(s => `
              <option value="${s.id}" ${s.id === chosenSubId ? 'selected' : ''}>
                ${window.Utils.escapeHtml(s.name)}
              </option>
            `).join('')}
          </select>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Task Name *</label>
          <input type="text" id="edit-task-name" class="input" required placeholder="e.g. Master SQL Window Functions">
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <textarea id="edit-task-desc" class="input textarea" rows="2" placeholder="Brief outline of concepts and scope"></textarea>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Status *</label>
            <select id="edit-task-status" class="input">
              <option value="Not Started" selected>Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Need Revision">Need Revision</option>
            </select>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Planned Date</label>
            <input type="date" id="edit-task-planned-date" class="input" value="${defaultPlannedDate}">
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Deadline (Optional)</label>
            <input type="date" id="edit-task-deadline" class="input">
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Estimated Hours</label>
            <input type="number" step="0.5" min="0.5" id="edit-task-est-hours" class="input" value="2.0">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Actual Hours Logged</label>
            <input type="number" step="0.5" min="0" id="edit-task-act-hours" class="input" value="0">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Revision Date (Optional)</label>
            <input type="date" id="edit-task-revision-date" class="input">
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Notes & Summary</label>
          <textarea id="edit-task-notes" class="input textarea" rows="2" placeholder="Key formulas, edge cases, personal takeaways..."></textarea>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Interview Questions / Prompts</label>
          <textarea id="edit-task-interview" class="input textarea" rows="2" placeholder="Questions asked in technical rounds regarding this topic..."></textarea>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Resource URLs (Comma-separated)</label>
          <input type="text" id="edit-task-resources" class="input" placeholder="https://leetcode.com, https://docs.python.org">
        </div>

        <div class="d-flex justify-between align-center mt-4 pt-3 border-top">
          <div>
            <button type="button" class="btn btn-secondary" onclick="App.saveNewTask(true)">
              Save &amp; Add Another
            </button>
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">Create Task</button>
          </div>
        </div>
      </form>
    `;

    this.openGenericModal({
      title: 'Add New Task',
      contentHtml: content,
      showSave: false
    });
  },

  saveNewTask(addAnother = false) {
    const subtopicId = document.getElementById('edit-task-subtopic').value;
    const name = document.getElementById('edit-task-name').value.trim();
    if (!subtopicId || !name) return;

    const rawResources = document.getElementById('edit-task-resources').value;
    const resources = rawResources.split(',').map(r => r.trim()).filter(Boolean).map(url => ({
      title: 'Resource Link',
      url: window.Utils.sanitizeUrl(url)
    }));

    const taskData = {
      name,
      description: document.getElementById('edit-task-desc').value.trim(),
      status: document.getElementById('edit-task-status').value,
      plannedDate: document.getElementById('edit-task-planned-date').value,
      deadline: document.getElementById('edit-task-deadline').value,
      estimatedHours: parseFloat(document.getElementById('edit-task-est-hours').value) || 2,
      actualHours: parseFloat(document.getElementById('edit-task-act-hours').value) || 0,
      revisionDate: document.getElementById('edit-task-revision-date').value,
      notes: document.getElementById('edit-task-notes').value.trim(),
      interviewQuestions: document.getElementById('edit-task-interview').value.trim(),
      resources
    };

    window.State.addTask(subtopicId, taskData);
    window.Utils.showToast('Task added!', 'success');

    if (addAnother) {
      document.getElementById('edit-task-name').value = '';
      document.getElementById('edit-task-desc').value = '';
      document.getElementById('edit-task-name').focus();
    } else {
      this.closeGenericModal();
    }
  },

  openEditTaskModal(taskId) {
    const found = window.State.getTaskById(taskId);
    if (!found) return;

    const { task, subtopic, topic, subject, track } = found;
    const resourceUrls = (task.resources || []).map(r => r.url).join(', ');

    const content = `
      <form id="task-edit-form" onsubmit="event.preventDefault(); App.saveEditedTask('${taskId}');">
        <div class="text-muted text-xs mb-3">
          ${window.Utils.escapeHtml(track.name)} &gt; ${window.Utils.escapeHtml(subject.name)} &gt; ${window.Utils.escapeHtml(subtopic.name)}
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Task Name *</label>
          <input type="text" id="edit-task-name" class="input" required value="${window.Utils.escapeHtml(task.name)}">
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <textarea id="edit-task-desc" class="input textarea" rows="2">${window.Utils.escapeHtml(task.description || '')}</textarea>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Status *</label>
            <select id="edit-task-status" class="input">
              <option value="Not Started" ${task.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
              <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
              <option value="Need Revision" ${task.status === 'Need Revision' ? 'selected' : ''}>Need Revision</option>
            </select>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Planned Date</label>
            <input type="date" id="edit-task-planned-date" class="input" value="${window.Utils.escapeHtml(task.plannedDate || '')}">
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Deadline</label>
            <input type="date" id="edit-task-deadline" class="input" value="${window.Utils.escapeHtml(task.deadline || '')}">
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Estimated Hours</label>
            <input type="number" step="0.5" min="0" id="edit-task-est-hours" class="input" value="${task.estimatedHours || 2}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Actual Hours Logged</label>
            <input type="number" step="0.5" min="0" id="edit-task-act-hours" class="input" value="${task.actualHours || 0}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Revision Date</label>
            <input type="date" id="edit-task-revision-date" class="input" value="${window.Utils.escapeHtml(task.revisionDate || '')}">
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Notes</label>
          <textarea id="edit-task-notes" class="input textarea" rows="2">${window.Utils.escapeHtml(task.notes || '')}</textarea>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Interview Questions</label>
          <textarea id="edit-task-interview" class="input textarea" rows="2">${window.Utils.escapeHtml(task.interviewQuestions || '')}</textarea>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Resource URLs (Comma-separated)</label>
          <input type="text" id="edit-task-resources" class="input" value="${window.Utils.escapeHtml(resourceUrls)}">
        </div>

        <div class="d-flex justify-between align-center mt-4 pt-3 border-top">
          <button type="button" class="btn btn-outline-danger" onclick="App.confirmDeleteTask('${taskId}')">
            <i data-lucide="trash-2"></i> Delete Task
          </button>

          <div class="d-flex gap-2">
            <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </form>
    `;

    this.openGenericModal({
      title: 'Edit Task Details',
      contentHtml: content,
      showSave: false
    });
  },

  saveEditedTask(taskId) {
    const name = document.getElementById('edit-task-name').value.trim();
    if (!name) return;

    const rawResources = document.getElementById('edit-task-resources').value;
    const resources = rawResources.split(',').map(r => r.trim()).filter(Boolean).map(url => ({
      title: 'Resource Link',
      url: window.Utils.sanitizeUrl(url)
    }));

    const updated = {
      name,
      description: document.getElementById('edit-task-desc').value.trim(),
      status: document.getElementById('edit-task-status').value,
      plannedDate: document.getElementById('edit-task-planned-date').value,
      deadline: document.getElementById('edit-task-deadline').value,
      estimatedHours: parseFloat(document.getElementById('edit-task-est-hours').value) || 2,
      actualHours: parseFloat(document.getElementById('edit-task-act-hours').value) || 0,
      revisionDate: document.getElementById('edit-task-revision-date').value,
      notes: document.getElementById('edit-task-notes').value.trim(),
      interviewQuestions: document.getElementById('edit-task-interview').value.trim(),
      resources
    };

    window.State.updateTask(taskId, updated);
    this.closeGenericModal();
    window.Utils.showToast('Task updated!', 'success');
  },

  confirmDeleteTask(taskId) {
    this.closeGenericModal();
    if (window.Checklist) window.Checklist.deleteTask(taskId);
  },

  openMoveTaskModal(taskId) {
    const found = window.State.getTaskById(taskId);
    if (!found) return;

    const tracks = window.State.getTracks();
    const subtopics = [];
    tracks.forEach(tr => {
      (tr.subjects || []).forEach(s => {
        (s.topics || []).forEach(top => {
          (top.subtopics || []).forEach(sub => {
            subtopics.push({
              id: sub.id,
              name: `${tr.name} > ${s.name} > ${sub.name}`
            });
          });
        });
      });
    });

    const content = `
      <div>
        <p>Move <strong>${window.Utils.escapeHtml(found.task.name)}</strong> to another subtopic:</p>
        <select id="move-target-subtopic" class="input mt-2 mb-3">
          ${subtopics.map(s => `
            <option value="${s.id}" ${s.id === found.subtopic.id ? 'selected' : ''}>
              ${window.Utils.escapeHtml(s.name)}
            </option>
          `).join('')}
        </select>

        <div class="d-flex justify-end gap-2">
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button class="btn btn-primary" onclick="
            const targetId = document.getElementById('move-target-subtopic').value;
            State.moveTask('${taskId}', targetId);
            App.closeGenericModal();
            Utils.showToast('Task moved successfully!', 'success');
          ">Move Task</button>
        </div>
      </div>
    `;

    this.openGenericModal({
      title: 'Move Task',
      contentHtml: content,
      showSave: false
    });
  },

  openScheduleRevisionModal(taskId) {
    if (window.RevisionsView) {
      window.RevisionsView.openAddRevisionModal(taskId);
    }
  },

  /* ==========================================================================
     HIERARCHY ENTITY MODALS (Track, Subject, Topic, Subtopic)
     ========================================================================== */

  openTrackModal() {
    const content = `
      <form onsubmit="event.preventDefault(); App.saveTrack();">
        <div class="form-group mb-3">
          <label class="form-label">Track Name *</label>
          <input type="text" id="track-name-input" class="input" required placeholder="e.g. System Design / MLOps">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <input type="text" id="track-desc-input" class="input" placeholder="Track focus and target roles">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Accent Color</label>
          <input type="color" id="track-color-input" class="input" value="#3b82f6" style="height: 42px;">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Create Track</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Add New Career Track', contentHtml: content, showSave: false });
  },

  saveTrack() {
    const name = document.getElementById('track-name-input').value.trim();
    if (!name) return;
    const description = document.getElementById('track-desc-input').value.trim();
    const color = document.getElementById('track-color-input').value;
    window.State.addTrack({ name, description, color });
    this.closeGenericModal();
    window.Utils.showToast('Track created!', 'success');
  },

  openEditTrackModal(trackId) {
    const track = window.State.getTrackById(trackId);
    if (!track) return;
    const content = `
      <form onsubmit="event.preventDefault(); App.saveEditTrack('${trackId}');">
        <div class="form-group mb-3">
          <label class="form-label">Track Name *</label>
          <input type="text" id="edit-track-name" class="input" required value="${window.Utils.escapeHtml(track.name)}">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <input type="text" id="edit-track-desc" class="input" value="${window.Utils.escapeHtml(track.description || '')}">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Accent Color</label>
          <input type="color" id="edit-track-color" class="input" value="${track.color || '#3b82f6'}" style="height: 42px;">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Edit Track', contentHtml: content, showSave: false });
  },

  saveEditTrack(trackId) {
    const name = document.getElementById('edit-track-name').value.trim();
    if (!name) return;
    const description = document.getElementById('edit-track-desc').value.trim();
    const color = document.getElementById('edit-track-color').value;
    window.State.updateTrack(trackId, { name, description, color });
    this.closeGenericModal();
    window.Utils.showToast('Track updated!', 'success');
  },

  confirmDeleteTrack(trackId) {
    const track = window.State.getTrackById(trackId);
    if (!track) return;

    let subjs = 0, tasks = 0;
    (track.subjects || []).forEach(s => {
      subjs++;
      (s.topics || []).forEach(top => {
        (top.subtopics || []).forEach(sub => tasks += (sub.tasks || []).length);
      });
    });

    this.confirmModal({
      title: 'Delete Entire Track?',
      message: `Deleting "${track.name}" will also permanently remove ${subjs} subject(s) and ${tasks} task(s). Are you sure?`,
      confirmText: 'Delete Track & Contents',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteTrack(trackId);
        window.Utils.showToast('Track deleted', 'info');
      }
    });
  },

  openSubjectModal(trackId) {
    const content = `
      <form onsubmit="event.preventDefault(); App.saveSubject('${trackId}');">
        <div class="form-group mb-3">
          <label class="form-label">Subject Name *</label>
          <input type="text" id="subj-name-input" class="input" required placeholder="e.g. Linear Algebra, Docker">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <input type="text" id="subj-desc-input" class="input" placeholder="Subject scope">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Subject</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Add Subject', contentHtml: content, showSave: false });
  },

  saveSubject(trackId) {
    const name = document.getElementById('subj-name-input').value.trim();
    if (!name) return;
    const description = document.getElementById('subj-desc-input').value.trim();
    window.State.addSubject(trackId, { name, description });
    this.closeGenericModal();
    window.Utils.showToast('Subject created!', 'success');
  },

  openEditSubjectModal(subjectId) {
    let targetSubject = null;
    for (const tr of window.State.getTracks()) {
      for (const s of tr.subjects || []) {
        if (s.id === subjectId) { targetSubject = s; break; }
      }
    }
    if (!targetSubject) return;

    const content = `
      <form onsubmit="event.preventDefault(); App.saveEditSubject('${subjectId}');">
        <div class="form-group mb-3">
          <label class="form-label">Subject Name *</label>
          <input type="text" id="edit-subj-name" class="input" required value="${window.Utils.escapeHtml(targetSubject.name)}">
        </div>
        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <input type="text" id="edit-subj-desc" class="input" value="${window.Utils.escapeHtml(targetSubject.description || '')}">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Edit Subject', contentHtml: content, showSave: false });
  },

  saveEditSubject(subjectId) {
    const name = document.getElementById('edit-subj-name').value.trim();
    if (!name) return;
    const description = document.getElementById('edit-subj-desc').value.trim();
    window.State.updateSubject(subjectId, { name, description });
    this.closeGenericModal();
    window.Utils.showToast('Subject updated!', 'success');
  },

  confirmDeleteSubject(subjectId) {
    this.confirmModal({
      title: 'Delete Subject?',
      message: 'This will also delete all descendant topics and tasks inside this subject.',
      confirmText: 'Delete Subject',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteSubject(subjectId);
        window.Utils.showToast('Subject deleted', 'info');
      }
    });
  },

  openTopicModal(subjectId) {
    const content = `
      <form onsubmit="event.preventDefault(); App.saveTopic('${subjectId}');">
        <div class="form-group mb-3">
          <label class="form-label">Topic Name *</label>
          <input type="text" id="topic-name-input" class="input" required placeholder="e.g. Window Functions, Classification Models">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Topic</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Add Topic', contentHtml: content, showSave: false });
  },

  saveTopic(subjectId) {
    const name = document.getElementById('topic-name-input').value.trim();
    if (!name) return;
    window.State.addTopic(subjectId, { name });
    this.closeGenericModal();
    window.Utils.showToast('Topic created!', 'success');
  },

  openEditTopicModal(topicId) {
    let target = null;
    for (const tr of window.State.getTracks()) {
      for (const s of tr.subjects || []) {
        for (const top of s.topics || []) {
          if (top.id === topicId) { target = top; break; }
        }
      }
    }
    if (!target) return;

    const content = `
      <form onsubmit="event.preventDefault(); App.saveEditTopic('${topicId}');">
        <div class="form-group mb-3">
          <label class="form-label">Topic Name *</label>
          <input type="text" id="edit-topic-name" class="input" required value="${window.Utils.escapeHtml(target.name)}">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Edit Topic', contentHtml: content, showSave: false });
  },

  saveEditTopic(topicId) {
    const name = document.getElementById('edit-topic-name').value.trim();
    if (!name) return;
    window.State.updateTopic(topicId, { name });
    this.closeGenericModal();
    window.Utils.showToast('Topic updated!', 'success');
  },

  confirmDeleteTopic(topicId) {
    this.confirmModal({
      title: 'Delete Topic?',
      message: 'This will delete this topic and all its child subtopics and tasks.',
      confirmText: 'Delete Topic',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteTopic(topicId);
        window.Utils.showToast('Topic deleted', 'info');
      }
    });
  },

  openSubtopicModal(topicId) {
    const content = `
      <form onsubmit="event.preventDefault(); App.saveSubtopic('${topicId}');">
        <div class="form-group mb-3">
          <label class="form-label">Subtopic Name *</label>
          <input type="text" id="sub-name-input" class="input" required placeholder="e.g. Ranking Functions">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Subtopic</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Add Subtopic', contentHtml: content, showSave: false });
  },

  saveSubtopic(topicId) {
    const name = document.getElementById('sub-name-input').value.trim();
    if (!name) return;
    window.State.addSubtopic(topicId, { name });
    this.closeGenericModal();
    window.Utils.showToast('Subtopic created!', 'success');
  },

  openEditSubtopicModal(subtopicId) {
    let target = null;
    for (const tr of window.State.getTracks()) {
      for (const s of tr.subjects || []) {
        for (const top of s.topics || []) {
          for (const sub of top.subtopics || []) {
            if (sub.id === subtopicId) { target = sub; break; }
          }
        }
      }
    }
    if (!target) return;

    const content = `
      <form onsubmit="event.preventDefault(); App.saveEditSubtopic('${subtopicId}');">
        <div class="form-group mb-3">
          <label class="form-label">Subtopic Name *</label>
          <input type="text" id="edit-sub-name" class="input" required value="${window.Utils.escapeHtml(target.name)}">
        </div>
        <div class="d-flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    `;
    this.openGenericModal({ title: 'Edit Subtopic', contentHtml: content, showSave: false });
  },

  saveEditSubtopic(subtopicId) {
    const name = document.getElementById('edit-sub-name').value.trim();
    if (!name) return;
    window.State.updateSubtopic(subtopicId, { name });
    this.closeGenericModal();
    window.Utils.showToast('Subtopic updated!', 'success');
  },

  confirmDeleteSubtopic(subtopicId) {
    this.confirmModal({
      title: 'Delete Subtopic?',
      message: 'This will delete this subtopic and all tasks inside it.',
      confirmText: 'Delete Subtopic',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteSubtopic(subtopicId);
        window.Utils.showToast('Subtopic deleted', 'info');
      }
    });
  },

  /* ==========================================================================
     REUSABLE MODAL HELPERS
     ========================================================================== */

  openGenericModal({ title, contentHtml, showSave = false, saveText = 'Save', onSave = null, closeText = 'Close' }) {
    const modalEl = document.getElementById('generic-modal');
    if (!modalEl) return;

    const titleEl = modalEl.querySelector('.modal-title');
    const bodyEl = modalEl.querySelector('.modal-body');
    const footerEl = modalEl.querySelector('.modal-footer');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = contentHtml;

    if (footerEl) {
      if (!showSave) {
        footerEl.classList.add('d-none');
      } else {
        footerEl.classList.remove('d-none');
        footerEl.innerHTML = `
          <button class="btn btn-secondary" onclick="App.closeGenericModal()">${closeText}</button>
          <button class="btn btn-primary" id="generic-modal-save-btn">${saveText}</button>
        `;
        const saveBtn = document.getElementById('generic-modal-save-btn');
        if (saveBtn && onSave) {
          saveBtn.addEventListener('click', onSave);
        }
      }
    }

    modalEl.classList.remove('d-none');
    this.activeModal = modalEl;
    if (window.lucide) window.lucide.createIcons();
  },

  closeGenericModal() {
    const modalEl = document.getElementById('generic-modal');
    if (modalEl) modalEl.classList.add('d-none');
    this.activeModal = null;
  },

  confirmModal({ title, message, confirmText = 'Confirm', confirmVariant = 'primary', onConfirm }) {
    const modalEl = document.getElementById('confirm-modal');
    if (!modalEl) return;

    const titleEl = modalEl.querySelector('.modal-title');
    const bodyEl = modalEl.querySelector('.modal-body');
    const confirmBtn = document.getElementById('confirm-action-btn');

    if (titleEl) titleEl.textContent = title;
    if (bodyEl) bodyEl.innerHTML = `<p>${window.Utils.escapeHtml(message)}</p>`;

    if (confirmBtn) {
      confirmBtn.className = `btn btn-${confirmVariant}`;
      confirmBtn.textContent = confirmText;
      confirmBtn.onclick = () => {
        modalEl.classList.add('d-none');
        if (typeof onConfirm === 'function') onConfirm();
      };
    }

    modalEl.classList.remove('d-none');
    this.activeModal = modalEl;
    if (window.lucide) window.lucide.createIcons();
  },

  closeConfirmModal() {
    const modalEl = document.getElementById('confirm-modal');
    if (modalEl) modalEl.classList.add('d-none');
    this.activeModal = null;
  },

  /* ==========================================================================
     KEYBOARD SHORTCUTS & EVENT LISTENERS
     ========================================================================== */

  bindEvents() {
    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      // Escape to close active modal
      if (e.key === 'Escape') {
        if (this.activeModal) {
          this.activeModal.classList.add('d-none');
          this.activeModal = null;
        }
        this.closeGlobalSearch();
      }

      // Ctrl+K / Cmd+K for global search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openGlobalSearch();
      }
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
          backdrop.classList.add('d-none');
          this.activeModal = null;
        }
      });
    });
  }
};

window.App = App;

// Bootstrap once DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
});
