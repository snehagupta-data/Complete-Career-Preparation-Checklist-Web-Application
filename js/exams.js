/**
 * Career Preparation & Skill Mastery Checklist
 * Exams Module (Indian Mass Hiring & Fresher Recruitment Tracker)
 * Preloaded: TCS B.Sc Ignite/Smart, Wipro WILP, Cognizant GenC, HCLTech, Accenture, AMCAT.
 */

const ExamsView = {
  render() {
    const container = document.getElementById('view-exams');
    if (!container) return;

    const exams = window.State.getExams();

    container.innerHTML = `
      <div class="exams-header-bar">
        <div>
          <h1 class="page-title">Mass Hiring & Fresher Assessment Tracker</h1>
          <p class="page-subtitle">
            Strategic recruitment drives for B.Sc Data Science & IT freshers. Track eligibility, syllabus, and portal timelines.
          </p>
        </div>

        <div>
          <button class="btn btn-primary" onclick="ExamsView.openExamModal()">
            <i data-lucide="plus"></i> Add Drive / Assessment
          </button>
        </div>
      </div>

      <!-- Information Banner on Hiring Cycles -->
      <div class="alert-banner alert-info mb-4">
        <div class="alert-icon"><i data-lucide="info"></i></div>
        <div class="alert-text">
          <strong>Drive Dates Notice:</strong> IT corporate hiring cycles vary and registration links update with new batches. All exam records, dates, and syllabus items are completely editable. Verify on official career portals.
        </div>
      </div>

      <!-- Exams Cards Grid -->
      <div class="exams-grid">
        ${exams.length === 0 ? `
          <div class="empty-state card p-5 text-center span-full">
            <i data-lucide="award" class="empty-icon text-muted"></i>
            <h3>No assessment drives added yet</h3>
            <p>Add TCS, Wipro, Infosys, Cognizant, or other target fresher drives.</p>
            <button class="btn btn-primary mt-3" onclick="ExamsView.openExamModal()">Add Drive</button>
          </div>
        ` : exams.map(e => this.renderExamCard(e)).join('')}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  renderExamCard(exam) {
    let statusClass = 'badge-neutral';
    if (exam.status === 'Preparing') statusClass = 'badge-warning';
    if (exam.status === 'Ready') statusClass = 'badge-primary';
    if (exam.status === 'Registered') statusClass = 'badge-purple';
    if (exam.status === 'Exam Completed') statusClass = 'badge-success';

    return `
      <div class="exam-card card hover-lift" id="exam-card-${exam.id}">
        <div class="exam-card-header">
          <div>
            <span class="exam-company-badge">${window.Utils.escapeHtml(exam.company)}</span>
            <h3 class="exam-name mt-1">${window.Utils.escapeHtml(exam.name)}</h3>
          </div>

          <div class="d-flex align-center gap-2">
            <span class="badge ${statusClass}">${exam.status}</span>
            <button class="btn btn-xs btn-ghost" title="Edit Exam" onclick="ExamsView.openExamModal('${exam.id}')">
              <i data-lucide="edit-2"></i>
            </button>
            <button class="btn btn-xs btn-ghost text-danger" title="Delete Exam" onclick="ExamsView.deleteExam('${exam.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="exam-details-block mt-3">
          <div class="exam-info-row">
            <span class="info-label"><i data-lucide="graduation-cap"></i> Eligibility:</span>
            <span class="info-value">${window.Utils.escapeHtml(exam.eligibility || 'Check drive criteria')}</span>
          </div>

          <div class="exam-info-row mt-2">
            <span class="info-label"><i data-lucide="book-open"></i> Syllabus:</span>
            <span class="info-value text-sm">${window.Utils.escapeHtml(exam.syllabus || 'Aptitude, Reasoning, Verbal & Technical')}</span>
          </div>

          <div class="exam-info-row mt-2">
            <span class="info-label"><i data-lucide="calendar"></i> Target Exam Date:</span>
            <span class="info-value font-medium text-primary">
              ${exam.examDate ? window.Utils.formatDate(exam.examDate, 'long') : 'TBD / Periodic'}
            </span>
          </div>

          ${exam.expectedTiming ? `
            <div class="exam-info-row mt-1">
              <span class="info-label"><i data-lucide="clock"></i> Timeline:</span>
              <span class="info-value text-muted text-xs">${window.Utils.escapeHtml(exam.expectedTiming)}</span>
            </div>
          ` : ''}

          <div class="exam-info-row mt-2">
            <span class="info-label"><i data-lucide="bell"></i> Registration:</span>
            <span class="badge badge-subtle">${window.Utils.escapeHtml(exam.registrationStatus || 'Portal Active')}</span>
          </div>
        </div>

        <!-- Career Portal & Registration Action Buttons -->
        <div class="exam-links-bar mt-3 pt-3 border-top">
          ${exam.registrationUrl ? `
            <a href="${window.Utils.sanitizeUrl(exam.registrationUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <i data-lucide="external-link"></i> Apply / Register
            </a>
          ` : ''}
          ${exam.officialUrl ? `
            <a href="${window.Utils.sanitizeUrl(exam.officialUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
              <i data-lucide="globe"></i> Official Careers
            </a>
          ` : ''}
          
          <select class="input input-sm select-status-inline ml-auto" onchange="State.updateExam('${exam.id}', { status: this.value }); Utils.showToast('Status updated', 'info');">
            <option value="Not Started" ${exam.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
            <option value="Preparing" ${exam.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
            <option value="Ready" ${exam.status === 'Ready' ? 'selected' : ''}>Ready</option>
            <option value="Registered" ${exam.status === 'Registered' ? 'selected' : ''}>Registered</option>
            <option value="Exam Completed" ${exam.status === 'Exam Completed' ? 'selected' : ''}>Exam Completed</option>
          </select>
        </div>

        ${exam.notes ? `
          <div class="exam-notes-callout mt-3">
            <strong>Preparation Advice:</strong>
            <p>${window.Utils.escapeHtml(exam.notes)}</p>
          </div>
        ` : ''}
      </div>
    `;
  },

  deleteExam(examId) {
    const exam = window.State.getExams().find(e => e.id === examId);
    if (!exam) return;

    App.confirmModal({
      title: 'Delete Exam Entry?',
      message: `Are you sure you want to remove "${exam.name}" from your tracker?`,
      confirmText: 'Delete Exam',
      confirmVariant: 'danger',
      onConfirm: () => {
        window.State.deleteExam(examId);
        window.Utils.showToast('Exam removed', 'info');
      }
    });
  },

  openExamModal(examId = null) {
    const isEdit = !!examId;
    const exam = isEdit ? window.State.getExams().find(e => e.id === examId) : null;

    const content = `
      <form id="exam-form" onsubmit="event.preventDefault(); ExamsView.saveExam('${examId || ''}');">
        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Company Name *</label>
            <input type="text" id="exam-company" class="input" required value="${exam ? window.Utils.escapeHtml(exam.company) : ''}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Exam / Program Name *</label>
            <input type="text" id="exam-name" class="input" required value="${exam ? window.Utils.escapeHtml(exam.name) : ''}">
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Preparation Status</label>
            <select id="exam-status" class="input">
              <option value="Not Started" ${exam && exam.status === 'Not Started' ? 'selected' : ''}>Not Started</option>
              <option value="Preparing" ${exam && exam.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
              <option value="Ready" ${exam && exam.status === 'Ready' ? 'selected' : ''}>Ready</option>
              <option value="Registered" ${exam && exam.status === 'Registered' ? 'selected' : ''}>Registered</option>
              <option value="Exam Completed" ${exam && exam.status === 'Exam Completed' ? 'selected' : ''}>Exam Completed</option>
            </select>
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Registration Status</label>
            <input type="text" id="exam-reg-status" class="input" placeholder="e.g. Applications Open, Open Soon" value="${exam ? window.Utils.escapeHtml(exam.registrationStatus || '') : 'Applications Open'}">
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Eligibility Criteria</label>
          <input type="text" id="exam-eligibility" class="input" placeholder="e.g. B.Sc Data Science 60%+ no backlogs" value="${exam ? window.Utils.escapeHtml(exam.eligibility || '') : ''}">
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Syllabus Breakdown</label>
          <textarea id="exam-syllabus" class="input textarea" rows="2">${exam ? window.Utils.escapeHtml(exam.syllabus || '') : ''}</textarea>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Target Exam Date</label>
            <input type="date" id="exam-date" class="input" value="${exam ? window.Utils.escapeHtml(exam.examDate || '') : ''}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Expected Timing</label>
            <input type="text" id="exam-timing" class="input" placeholder="e.g. Oct–Dec 2026 batches" value="${exam ? window.Utils.escapeHtml(exam.expectedTiming || '') : ''}">
          </div>
        </div>

        <div class="form-row mb-3">
          <div class="form-group flex-1">
            <label class="form-label">Registration URL</label>
            <input type="url" id="exam-reg-url" class="input" placeholder="https://..." value="${exam ? window.Utils.escapeHtml(exam.registrationUrl || '') : ''}">
          </div>
          <div class="form-group flex-1">
            <label class="form-label">Official Careers Page URL</label>
            <input type="url" id="exam-official-url" class="input" placeholder="https://..." value="${exam ? window.Utils.escapeHtml(exam.officialUrl || '') : ''}">
          </div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label">Strategy Notes & Tips</label>
          <textarea id="exam-notes" class="input textarea" rows="2">${exam ? window.Utils.escapeHtml(exam.notes || '') : ''}</textarea>
        </div>

        <div class="d-flex justify-end gap-2 mt-4">
          <button type="button" class="btn btn-secondary" onclick="App.closeGenericModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">${isEdit ? 'Save Changes' : 'Add Exam'}</button>
        </div>
      </form>
    `;

    App.openGenericModal({
      title: isEdit ? 'Edit Assessment / Exam' : 'Add Fresher Hiring Drive',
      contentHtml: content,
      showSave: false
    });
  },

  saveExam(examId) {
    const company = document.getElementById('exam-company').value.trim();
    const name = document.getElementById('exam-name').value.trim();
    if (!company || !name) return;

    const payload = {
      company,
      name,
      status: document.getElementById('exam-status').value,
      registrationStatus: document.getElementById('exam-reg-status').value.trim(),
      eligibility: document.getElementById('exam-eligibility').value.trim(),
      syllabus: document.getElementById('exam-syllabus').value.trim(),
      examDate: document.getElementById('exam-date').value,
      expectedTiming: document.getElementById('exam-timing').value.trim(),
      registrationUrl: document.getElementById('exam-reg-url').value.trim(),
      officialUrl: document.getElementById('exam-official-url').value.trim(),
      notes: document.getElementById('exam-notes').value.trim()
    };

    if (examId) {
      window.State.updateExam(examId, payload);
      window.Utils.showToast('Exam updated!', 'success');
    } else {
      window.State.addExam(payload);
      window.Utils.showToast('Exam added!', 'success');
    }

    App.closeGenericModal();
  }
};

window.ExamsView = ExamsView;
