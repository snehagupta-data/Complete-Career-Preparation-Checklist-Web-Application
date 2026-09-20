/**
 * Career Preparation & Skill Mastery Checklist
 * Tracks Module (Track View, Subject Cards Breakdown, Completion Percentages)
 */

const TracksView = {
  selectedTrackId: null,

  selectTrack(trackId) {
    this.selectedTrackId = trackId;
    this.render();
  },

  render() {
    const container = document.getElementById('view-tracks');
    if (!container) return;

    const tracks = window.State.getTracks();
    if (!this.selectedTrackId && tracks.length > 0) {
      this.selectedTrackId = tracks[0].id;
    }

    const currentTrack = tracks.find(t => t.id === this.selectedTrackId) || tracks[0];

    // Compute track subjects stats
    let totalTrackTasks = 0;
    let completedTrackTasks = 0;
    let inProgressTrackTasks = 0;
    let revisionTrackTasks = 0;

    const subjectsData = (currentTrack.subjects || []).map(subject => {
      let subjTotal = 0;
      let subjCompleted = 0;
      let subjInProgress = 0;
      let subjRevision = 0;

      (subject.topics || []).forEach(top => {
        (top.subtopics || []).forEach(sub => {
          (sub.tasks || []).forEach(t => {
            subjTotal++;
            totalTrackTasks++;
            if (t.status === 'Completed') {
              subjCompleted++;
              completedTrackTasks++;
            } else if (t.status === 'In Progress') {
              subjInProgress++;
              inProgressTrackTasks++;
            } else if (t.status === 'Need Revision') {
              subjRevision++;
              revisionTrackTasks++;
            }
          });
        });
      });

      return {
        id: subject.id,
        name: subject.name,
        description: subject.description,
        total: subjTotal,
        completed: subjCompleted,
        inProgress: subjInProgress,
        revision: subjRevision,
        percentage: subjTotal > 0 ? Math.round((subjCompleted / subjTotal) * 100) : 0
      };
    });

    const overallTrackPct = totalTrackTasks > 0 ? Math.round((completedTrackTasks / totalTrackTasks) * 100) : 0;

    container.innerHTML = `
      <div class="tracks-header-bar">
        <div>
          <h1 class="page-title">Career Tracks & Subject Mastery</h1>
          <p class="page-subtitle">Inspect subject-level completion and navigate targeted skill tracks.</p>
        </div>
      </div>

      <!-- Track Switcher Tabs -->
      <div class="tracks-nav-tabs">
        ${tracks.map(t => `
          <button 
            class="track-nav-tab ${t.id === currentTrack.id ? 'active' : ''}"
            style="${t.id === currentTrack.id ? `border-bottom-color: ${t.color}; color: ${t.color};` : ''}"
            onclick="TracksView.selectTrack('${t.id}')">
            <i data-lucide="${t.icon || 'book-open'}"></i>
            <span>${window.Utils.escapeHtml(t.name)}</span>
          </button>
        `).join('')}
      </div>

      <!-- Active Track Hero Card -->
      <div class="track-detail-hero card mt-3" style="border-left: 5px solid ${currentTrack.color};">
        <div class="track-detail-top">
          <div>
            <div class="track-hero-tag" style="color: ${currentTrack.color}; background-color: ${currentTrack.color}15;">
              <i data-lucide="${currentTrack.icon || 'folder'}"></i> Track Mastery
            </div>
            <h2 class="track-hero-title">${window.Utils.escapeHtml(currentTrack.name)}</h2>
            <p class="track-hero-desc text-muted">${window.Utils.escapeHtml(currentTrack.description)}</p>
          </div>

          <div class="track-hero-pct-badge">
            <span class="track-hero-pct" style="color: ${currentTrack.color};">${overallTrackPct}%</span>
            <span class="track-hero-pct-sub">${completedTrackTasks} of ${totalTrackTasks} tasks</span>
          </div>
        </div>

        <div class="kpi-progress mt-3">
          <div class="kpi-progress-bar" style="width: ${overallTrackPct}%; background-color: ${currentTrack.color};"></div>
        </div>

        <div class="track-hero-meta-grid mt-3">
          <div class="track-meta-item">
            <span class="text-muted">Total Tasks</span>
            <strong>${totalTrackTasks}</strong>
          </div>
          <div class="track-meta-item">
            <span class="text-success">Completed</span>
            <strong>${completedTrackTasks}</strong>
          </div>
          <div class="track-meta-item">
            <span class="text-warning">In Progress</span>
            <strong>${inProgressTrackTasks}</strong>
          </div>
          <div class="track-meta-item">
            <span class="text-danger">Need Revision</span>
            <strong>${revisionTrackTasks}</strong>
          </div>
          <div class="track-meta-item text-right">
            <button class="btn btn-sm btn-primary" onclick="App.filterChecklistByTrack('${currentTrack.id}')">
              Open in Checklist <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Subject Mastery Breakdown Cards -->
      <section class="mt-4">
        <h3 class="section-title mb-3">Subjects Breakdown (${subjectsData.length})</h3>
        
        <div class="subjects-grid">
          ${subjectsData.map(subj => `
            <div class="subject-card card hover-lift" onclick="App.openChecklistSubject('${currentTrack.id}', '${subj.id}')">
              <div class="subject-card-header">
                <div>
                  <h4 class="subject-card-title">${window.Utils.escapeHtml(subj.name)}</h4>
                  <p class="subject-card-desc text-muted">${window.Utils.escapeHtml(subj.description || '')}</p>
                </div>
                <div class="subject-pct-pill" style="color: ${currentTrack.color}; background-color: ${currentTrack.color}15;">
                  ${subj.percentage}%
                </div>
              </div>

              <div class="kpi-progress mt-3">
                <div class="kpi-progress-bar" style="width: ${subj.percentage}%; background-color: ${currentTrack.color};"></div>
              </div>

              <div class="subject-card-footer mt-3">
                <span class="text-muted text-sm">${subj.completed} / ${subj.total} Tasks</span>
                ${subj.revision > 0 ? `<span class="badge badge-danger-soft text-xs">${subj.revision} Rev</span>` : ''}
                <span class="text-primary text-sm font-medium">Explore &rarr;</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    if (window.lucide) window.lucide.createIcons();
  }
};

window.TracksView = TracksView;
