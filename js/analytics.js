/**
 * Career Preparation & Skill Mastery Checklist
 * Analytics Module (Deep Dive Charts, Subject Heatmaps, Study Hours, Productivity Index)
 */

const AnalyticsView = {
  charts: {},

  render() {
    const container = document.getElementById('view-analytics');
    if (!container) return;

    const stats = window.State.getCompletionStats();
    const prodScore = window.State.getProductivityScore();
    const tracks = window.State.getTracks();

    // Flatten all subjects for the subject breakdown table
    const subjectsList = [];
    tracks.forEach(track => {
      (track.subjects || []).forEach(subject => {
        let subjTotal = 0;
        let subjCompleted = 0;
        let subjHours = 0;
        (subject.topics || []).forEach(top => {
          (top.subtopics || []).forEach(sub => {
            (sub.tasks || []).forEach(t => {
              subjTotal++;
              if (t.status === 'Completed') subjCompleted++;
              subjHours += (parseFloat(t.actualHours) || 0);
            });
          });
        });
        subjectsList.push({
          trackName: track.name,
          trackColor: track.color,
          name: subject.name,
          total: subjTotal,
          completed: subjCompleted,
          hours: subjHours.toFixed(1),
          pct: subjTotal > 0 ? Math.round((subjCompleted / subjTotal) * 100) : 0
        });
      });
    });

    container.innerHTML = `
      <div class="analytics-header-bar">
        <div>
          <h1 class="page-title">Preparation Analytics & Insights</h1>
          <p class="page-subtitle">
            Transparent data-driven insights into your preparation velocity, subject mastery, and time investment.
          </p>
        </div>
      </div>

      <!-- Productivity Score Transparent Breakdown -->
      <section class="prod-score-card card mb-4">
        <div class="prod-score-left">
          <div class="score-ring-wrap">
            <div class="score-circle">
              <span class="score-big">${prodScore.total}</span>
              <span class="score-max">/ 100</span>
            </div>
          </div>
          <div>
            <h3 class="score-title">Productivity & Mastery Index</h3>
            <p class="score-desc text-muted">
              A transparent formula measuring knowledge completed, streak consistency, focused hours, and spaced repetition. Never arbitrary.
            </p>
          </div>
        </div>

        <div class="score-factors-grid">
          <div class="score-factor-item">
            <div class="d-flex justify-between">
              <span class="factor-label">${prodScore.breakdown.taskProgress.label}</span>
              <strong>${prodScore.breakdown.taskProgress.score}/${prodScore.breakdown.taskProgress.max} pts</strong>
            </div>
            <div class="kpi-progress mt-1">
              <div class="kpi-progress-bar bg-primary" style="width: ${(prodScore.breakdown.taskProgress.score / prodScore.breakdown.taskProgress.max) * 100}%"></div>
            </div>
          </div>

          <div class="score-factor-item">
            <div class="d-flex justify-between">
              <span class="factor-label">${prodScore.breakdown.consistency.label}</span>
              <strong>${prodScore.breakdown.consistency.score}/${prodScore.breakdown.consistency.max} pts</strong>
            </div>
            <div class="kpi-progress mt-1">
              <div class="kpi-progress-bar bg-warning" style="width: ${(prodScore.breakdown.consistency.score / prodScore.breakdown.consistency.max) * 100}%"></div>
            </div>
          </div>

          <div class="score-factor-item">
            <div class="d-flex justify-between">
              <span class="factor-label">${prodScore.breakdown.studyHours.label}</span>
              <strong>${prodScore.breakdown.studyHours.score}/${prodScore.breakdown.studyHours.max} pts</strong>
            </div>
            <div class="kpi-progress mt-1">
              <div class="kpi-progress-bar bg-success" style="width: ${(prodScore.breakdown.studyHours.score / prodScore.breakdown.studyHours.max) * 100}%"></div>
            </div>
          </div>

          <div class="score-factor-item">
            <div class="d-flex justify-between">
              <span class="factor-label">${prodScore.breakdown.spacedRevision.label}</span>
              <strong>${prodScore.breakdown.spacedRevision.score}/${prodScore.breakdown.spacedRevision.max} pts</strong>
            </div>
            <div class="kpi-progress mt-1">
              <div class="kpi-progress-bar bg-purple" style="width: ${(prodScore.breakdown.spacedRevision.score / prodScore.breakdown.spacedRevision.max) * 100}%"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Charts Grid -->
      <div class="analytics-charts-grid">
        <!-- Chart A: Track Distribution -->
        <div class="chart-card card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Track Completion Comparison</h3>
              <p class="chart-subtitle">% of syllabus completed by track</p>
            </div>
          </div>
          <div class="chart-body" style="height: 280px; position: relative;">
            <canvas id="chart-analytics-tracks"></canvas>
          </div>
        </div>

        <!-- Chart B: Estimated vs Actual Hours by Track -->
        <div class="chart-card card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Study Hours by Track</h3>
              <p class="chart-subtitle">Time investment across subjects</p>
            </div>
          </div>
          <div class="chart-body" style="height: 280px; position: relative;">
            <canvas id="chart-analytics-hours"></canvas>
          </div>
        </div>

        <!-- Chart C: Task Velocity & Output Over Time -->
        <div class="chart-card card span-2">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Historical Preparation Velocity</h3>
              <p class="chart-subtitle">Tasks completed per study session</p>
            </div>
          </div>
          <div class="chart-body" style="height: 280px; position: relative;">
            <canvas id="chart-analytics-velocity"></canvas>
          </div>
        </div>
      </div>

      <!-- Subject Completion Inspection Table -->
      <section class="mt-4 card p-4">
        <h3 class="section-title mb-3">Subject-Level Performance Inspection (${subjectsList.length} Subjects)</h3>
        
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Track</th>
                <th>Completion Progress</th>
                <th>Completed / Total</th>
                <th>Hours Logged</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${subjectsList.map(s => `
                <tr>
                  <td><strong>${window.Utils.escapeHtml(s.name)}</strong></td>
                  <td>
                    <span class="badge" style="background-color: ${s.trackColor}18; color: ${s.trackColor};">
                      ${window.Utils.escapeHtml(s.trackName)}
                    </span>
                  </td>
                  <td style="min-width: 160px;">
                    <div class="d-flex align-center gap-2">
                      <div class="kpi-progress flex-1">
                        <div class="kpi-progress-bar" style="width: ${s.pct}%; background-color: ${s.trackColor};"></div>
                      </div>
                      <span class="text-xs font-semibold">${s.pct}%</span>
                    </div>
                  </td>
                  <td>${s.completed} / ${s.total}</td>
                  <td>${s.hours}h</td>
                  <td>
                    <button class="btn btn-xs btn-ghost text-primary" onclick="App.navigateTo('checklist'); Checklist.setSearchQuery('${s.name}');">
                      View Tasks &rarr;
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;

    if (window.lucide) window.lucide.createIcons();
    this.renderCharts(stats, tracks);
  },

  renderCharts(stats, tracks) {
    if (typeof Chart === 'undefined') return;

    Object.keys(this.charts).forEach(k => {
      if (this.charts[k]) this.charts[k].destroy();
    });

    const isDark = document.body.classList.contains('dark-theme') || !document.body.classList.contains('light-theme');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    // Chart A: Tracks Radar / Polar / Bar
    const ctxA = document.getElementById('chart-analytics-tracks');
    if (ctxA) {
      this.charts.tracks = new Chart(ctxA, {
        type: 'bar',
        data: {
          labels: stats.trackStats.map(t => t.name),
          datasets: [{
            label: 'Completion %',
            data: stats.trackStats.map(t => t.percentage),
            backgroundColor: stats.trackStats.map(t => t.color),
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, max: 100, grid: { color: gridColor }, ticks: { color: textColor, callback: v => v + '%' } },
            x: { grid: { display: false }, ticks: { color: textColor } }
          },
          plugins: { legend: { display: false } }
        }
      });
    }

    // Chart B: Hours by Track
    const ctxB = document.getElementById('chart-analytics-hours');
    if (ctxB) {
      const hoursData = tracks.map(track => {
        let actual = 0;
        (track.subjects || []).forEach(s => {
          (s.topics || []).forEach(top => {
            (top.subtopics || []).forEach(sub => {
              (sub.tasks || []).forEach(t => actual += (parseFloat(t.actualHours) || 0));
            });
          });
        });
        return parseFloat(actual.toFixed(1));
      });

      this.charts.hours = new Chart(ctxB, {
        type: 'doughnut',
        data: {
          labels: tracks.map(t => t.name),
          datasets: [{
            data: hoursData,
            backgroundColor: tracks.map(t => t.color),
            borderWidth: 2,
            borderColor: isDark ? '#1e293b' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: textColor, boxWidth: 10, padding: 12 } }
          },
          cutout: '68%'
        }
      });
    }

    // Chart C: Velocity Over Time
    const ctxC = document.getElementById('chart-analytics-velocity');
    if (ctxC) {
      const history = window.State.getState().gamification?.history || [];
      this.charts.velocity = new Chart(ctxC, {
        type: 'line',
        data: {
          labels: history.map(h => window.Utils.formatDate(h.date, 'short')),
          datasets: [
            {
              label: 'Tasks Completed',
              data: history.map(h => h.tasksCompleted),
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true,
              tension: 0.35,
              borderWidth: 2.5
            },
            {
              label: 'XP Gained',
              data: history.map(h => h.xpEarned),
              borderColor: '#8b5cf6',
              backgroundColor: 'transparent',
              borderDash: [3, 3],
              tension: 0.35,
              borderWidth: 2,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { color: gridColor }, ticks: { color: textColor } },
            y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } },
            y1: { beginAtZero: true, position: 'right', grid: { display: false }, ticks: { color: textColor } }
          },
          plugins: {
            legend: { position: 'top', labels: { color: textColor } }
          }
        }
      });
    }
  }
};

window.AnalyticsView = AnalyticsView;
