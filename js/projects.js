/**
 * Career Preparation & Skill Mastery Checklist
 * Projects Module (Data Analytics & Data Science Portfolio Projects)
 * Editable checklist items, safe link buttons, tools tags, and progress integration.
 */

const ProjectsView = {
  currentCategoryFilter: 'all', // 'all' | 'Data Analytics' | 'Data Science'

  setCategoryFilter(cat) {
    this.currentCategoryFilter = cat;
    this.render();
  },

  render() {
    const container = document.getElementById('view-projects');
    if (!container) return;

    const allProjects = window.State.getProjects();
    const filtered = allProjects.filter(p => {
      if (this.currentCategoryFilter !== 'all' && p.category !== this.currentCategoryFilter) {
        return false;
      }
      return true;
    });

    const daCount = allProjects.filter(p => p.category === 'Data Analytics').length;
    const dsCount = allProjects.filter(p => p.category === 'Data Science').length;

    container.innerHTML = `
      <div class="projects-header-bar">
        <div>
          <h1 class="page-title">Portfolio Projects</h1>
          <p class="page-subtitle">
            Hands-on proof of skill for Data Analyst & Data Scientist interviews. Every project includes milestone checklists.
          </p>
        </div>

        <div>
          <button class="btn btn-primary" onclick="ProjectsView.openProjectModal()">
            <i data-lucide="plus"></i> Add Project
          </button>
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="filter-pills mb-4">
        <button 
          class="filter-pill ${this.currentCategoryFilter === 'all' ? 'active' : ''}" 
          onclick="ProjectsView.setCategoryFilter('all')">
          All Projects (${allProjects.length})
        </button>
        <button 
          class="filter-pill ${this.currentCategoryFilter === 'Data Analytics' ? 'active' : ''}" 
          onclick="ProjectsView.setCategoryFilter('Data Analytics')">
          <i data-lucide="bar-chart-2"></i> Data Analytics (${daCount})
        </button>
        <button 
          class="filter-pill ${this.currentCategoryFilter === 'Data Science' ? 'active' : ''}" 
          onclick="ProjectsView.setCategoryFilter('Data Science')">
          <i data-lucide="brain-circuit"></i> Data Science (${dsCount})
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        ${filtered.length === 0 ? `
          <div class="empty-state card p-5 text-center span-full">
            <i data-lucide="folder-git-2" class="empty-icon text-muted"></i>
            <h3>No projects found in this category</h3>
            <p>Create your first portfolio project to showcase on your resume.</p>
            <button class="btn btn-primary mt-3" onclick="ProjectsView.openProjectModal()">Add Project</button>
          </div>
        ` : filtered.map(p => this.renderProjectCard(p)).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  renderProjectCard(proj) {
    const checklist = proj.checklist || [];
    const completedItems = checklist.filter(c => c.completed).length;
    const pct = checklist.length > 0 ? Math.round((completedItems / checklist.length) * 100) : 0;

    let statusBadgeClass = 'badge-neutral';
    if (proj.status === 'Completed') statusBadgeClass = 'badge-success';
    if (proj.status === 'In Progress') statusBadgeClass = 'badge-warning';

    return `
      <div class="project-card card hover-lift" id="project-card-${proj.id}">
        <div class="project-card-header">
          <div>
            <div class="project-category-tag ${proj.category === 'Data Science' ? 'tag-ds' : 'tag-da'}">
              <i data-lucide="${proj.category === 'Data Science' ? 'brain-circuit' : 'bar-chart-2'}"></i>
              ${window.Utils.escapeHtml(proj.category)}
            </div>
            <h3 class="project-title mt-1">${window.Utils.escapeHtml(proj.name)}</h3>
          </div>

          <div class="d-flex align-center gap-2">
            <span class="badge ${statusBadgeClass}">${proj.status}</span>
            <button class="btn btn-xs btn-ghost" title="Edit Project" onclick="ProjectsView.openProjectModal('${proj.id}')">
              <i data-lucide="edit-2"></i>
            </button>
            <button class="btn btn-xs btn-ghost text-danger" title="Delete Project" onclick="ProjectsView.deleteProject('${proj.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <p class="project-description">${window.Utils.escapeHtml(proj.description || 'No description provided.')}</p>

        <!-- Tools Tags -->
        <div class="tools-tags-list">
          ${(proj.tools || []).map(t => `
            <span class="tool-tag">${window.Utils.escapeHtml(t)}</span>
          `).join('')}
        </div>

        <!-- Links Buttons Bar -->
        <div class="project-links-bar">
          ${proj.githubUrl ? `
            <a href="${window.Utils.sanitizeUrl(proj.githubUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn-pill">
              <i data-lucide="github"></i> GitHub
            </a>
          ` : ''}
          ${proj.dashboardUrl ? `
            <a href="${window.Utils.sanitizeUrl(proj.dashboardUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn-pill">
              <i data-lucide="external-link"></i> Live Dashboard
            </a>
          ` : ''}
          ${proj.notebookUrl ? `
            <a href="${window.Utils.sanitizeUrl(proj.notebookUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn-pill">
              <i data-lucide="file-code"></i> Notebook
            </a>
          ` : ''}
          ${proj.datasetUrl ? `
            <a href="${window.Utils.sanitizeUrl(proj.datasetUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn-pill">
              <i data-lucide="database"></i> Dataset
            </a>
          ` : ''}
          ${proj.reportUrl ? `
            <a href="${window.Utils.sanitizeUrl(proj.reportUrl)}" target="_blank" rel="noopener noreferrer" class="link-btn-pill">
              <i data-lucide="file-text"></i> Report / Deck
            </a>
          ` : ''}
        </div>

        <!-- Milestone Checklist -->
        <div class="project-checklist-wrap mt-3">
          <div class="d-flex justify-between align-center mb-2">
            <span class="checklist-header-title">Milestones (${completedItems}/${checklist.length})</span>
            <span class="checklist-pct">${pct}%</span>
          </div>

          <div class="kpi-progress mb-3">
            <div class="kpi-progress-bar bg-success" style="width: ${pct}%"></div>
          </div>

          <div class="project-items-list">
            ${checklist.map(item => `
              <div class="project-checklist-item" onclick="State.toggleProjectChecklistItem('${proj.id}', '${item.id}')">
                <span class="custom-checkbox ${item.completed ? 'checked' : ''}">
                  ${item.completed ? '<i data-lucide="check"></i>' : ''}
                </span>
                <span class="checklist-item-text ${item.completed ? 'strikethrough text-muted' : ''}">
                  ${window.Utils.escapeHtml(item.text)}
                </span>
              </div>
            `).join('')}
          </div>

          <div class="add-milestone-input-wrap mt-2">
            <input 
              type="text" 
              class="input input-sm" 
              placeholder="Add another milestone..."
              id="new-milestone-${proj.id}"
              onkeydown="if(event.key === 'Enter') ProjectsView.addMilestone('${proj.id}')"
            >
            <button class="btn btn-xs btn-secondary" onclick="ProjectsView.addMilestone('${proj.id}')">
              <i data-lucide="plus"></i> Add
            </button>
          </div>
        </div>

        ${proj.notes ? `
          <div class="project-notes-box mt-3">
            <strong>Key Insights & Notes:</strong>
            <p>${window.Utils.escapeHtml(proj.notes)}</p>
          </div>
        ` : ''}
      </div>
    `;
  },

  addMilestone(projId) {
    const input = document.getElementById(`new-milestone-${projId}`);
    if (!input || !input.value.trim()) return;
    window.State.addProjectChecklistItem(projId, input.value.trim());
    input.value = '';
    window.Utils.showToast('Milestone added!', 'success');
  },

  deleteProject(projId) {
    const proj = window.State.getProjects().find(p => p.id === projId);
    if (!proj) return;

    App.confirmModal({
      title: 'Delete Project?',
      message: `Are you sure you want to delete "${proj.name}"? This action cannot be undone.`,
      confirmText: 'Delete Project',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteProject(projId);
        window.Utils.showToast('Project deleted', 'info');
      }
    });
  },

  openProjectModal(projId = null) {
    const isEdit = !!projId;
    const proj = isEdit ? window.State.getProjects().find(p => p.id === projId) : null;

    const content = `
      <form id="project-form" onsubmit="event.preventDefault(); ProjectsView.saveProject('${projId || ''}');">
        <div class="form-group mb-3">
          <label class="form-label">Project Name *</label>
          <input type="text" id="proj-name" class="input" required value="${proj ? window.Utils.escapeHtml(proj.name) : ''}">
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Category *</label>
            <select id="proj-category" class="input">
              <option value="Data Analytics" ${proj && proj.category === 'Data Analytics' ? 'selected' : ''}>Data Analytics</option>
              <option value="Data Science" ${proj && proj.category === 'Data Science' ? 'selected' : ''}>Data Science</option>
            </select>
          </div>

          <div class="form-group flex-1">
            <label class="form-label">Status *</label>
            <select id="proj-status" class="input">
              <option value="Not Started" ${proj && proj.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
              <option value="In Progress" ${proj && proj.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
              <option value="Completed" ${proj && proj.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Description</label>
          <textarea id="proj-desc" class="input textarea" rows="3">${proj ? window.Utils.escapeHtml(proj.description || '') : ''}</textarea>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Tools (comma separated, e.g. SQL, Power BI, Python, Scikit-Learn)</label>
          <input type="text" id="proj-tools" class="input" value="${proj ? window.Utils.escapeHtml((proj.tools || []).join(', ')) : 'SQL, Python'}">
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">GitHub URL</label>
            <input type="url" id="proj-github" class="input" placeholder="https://github.com/..." value="${proj ? window.Utils.escapeHtml(proj.githubUrl || '') : ''}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Live Dashboard URL</label>
            <input type="url" id="proj-dashboard" class="input" placeholder="https://app.powerbi.com/..." value="${proj ? window.Utils.escapeHtml(proj.dashboardUrl || '') : ''}">
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Notebook URL</label>
            <input type="url" id="proj-notebook" class="input" placeholder="https://..." value="${proj ? window.Utils.escapeHtml(proj.notebookUrl || '') : ''}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Dataset URL</label>
            <input type="url" id="proj-dataset" class="input" placeholder="https://kaggle.com/..." value="${proj ? window.Utils.escapeHtml(proj.datasetUrl || '') : ''}">
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Report / Presentation URL</label>
          <input type="url" id="proj-report" class="input" placeholder="https://..." value="${proj ? window.Utils.escapeHtml(proj.reportUrl || '') : ''}">
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Notes & Learnings</label>
          <textarea id="proj-notes" class="input textarea" rows="2">${proj ? window.Utils.escapeHtml(proj.notes || '') : ''}</textarea>
        </div>

        <div class="d-flex justify-end gap-2 mt-4">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Save Changes' : 'Create Project'}</button>
        </div>
      </form>
    `;

    App.openGenericModal({
      title: isEdit ? 'Edit Project' : 'Add New Portfolio Project',
      contentHtml: content,
      showSave: false
    });
  },

  saveProject(projId) {
    const name = document.getElementById('proj-name').value.trim();
    if (!name) return;

    const category = document.getElementById('proj-category').value;
    const status = document.getElementById('proj-status').value;
    const description = document.getElementById('proj-desc').value.trim();
    const toolsStr = document.getElementById('proj-tools').value;
    const tools = toolsStr.split(',').map(t => t.trim()).filter(Boolean);

    const githubUrl = document.getElementById('proj-github').value.trim();
    const dashboardUrl = document.getElementById('proj-dashboard').value.trim();
    const notebookUrl = document.getElementById('proj-notebook').value.trim();
    const datasetUrl = document.getElementById('proj-dataset').value.trim();
    const reportUrl = document.getElementById('proj-report').value.trim();
    const notes = document.getElementById('proj-notes').value.trim();

    const payload = {
      name,
      category,
      status,
      description,
      tools,
      githubUrl,
      dashboardUrl,
      notebookUrl,
      datasetUrl,
      reportUrl,
      notes
    };

    if (projId) {
      window.State.updateProject(projId, payload);
      window.Utils.showToast('Project updated!', 'success');
    } else {
      window.State.addProject(payload);
      window.Utils.showToast('Project created!', 'success');
    }

    App.closeGenericModal();
  }
};

window.ProjectsView = ProjectsView;
