/**
 * Career Preparation & Skill Mastery Checklist
 * Dashboard Module (Command Center, KPIs, Chart.js Visualizations, Target Countdown)
 */

const Dashboard = {
  charts: {},

  render() {
    const container = document.getElementById('view-dashboard');
    if (!container) return;

    const stats = window.State.getCompletionStats();
    const targetInfo = window.State.getTargetInfo();
    const streakInfo = window.State.getState().settings;
    const prodScore = window.State.getProductivityScore();

    container.innerHTML = `
      <!-- Dashboard Header & Target Countdown -->
      <section class="dashboard-hero card">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="pulse-indicator"></span>
            <span>${window.Utils.escapeHtml(targetInfo.targetTitle)}</span>
          </div>
          <h1 class="hero-title">Career Preparation Command Center</h1>
          <p class="hero-subtitle">
            Mastery over calendar rigidity. Progress is measured by completed knowledge, not calendar perfection.
          </p>

          <div class="target-stats-grid">
            <div class="target-stat-item">
              <span class="target-stat-label">Days to Target</span>
              <span class="target-stat-value ${targetInfo.isPastTarget ? 'text-success' : 'text-primary'}">
                ${targetInfo.daysRemaining}
              </span>
              <span class="target-stat-sub">${targetInfo.statusLabel}</span>
            </div>
            <div class="target-stat-item">
              <span class="target-stat-label">Mastery Progress</span>
              <span class="target-stat-value text-accent">${stats.overallPercentage}%</span>
              <span class="target-stat-sub">${stats.completedTasks} of ${stats.totalTasks} core tasks</span>
            </div>
            <div class="target-stat-item">
              <span class="target-stat-label">Habit Momentum</span>
              <span class="target-stat-value ${streakInfo.streakPaused ? 'text-warning' : 'text-orange'}">
                ${streakInfo.streakCount || 0}d ${streakInfo.streakPaused ? '⏸️' : '🔥'}
              </span>
              <span class="target-stat-sub">
                ${streakInfo.streakPaused ? 'Streak Paused (Recoverable)' : 'Active Consistency'}
              </span>
            </div>
            <div class="target-stat-item">
              <span class="target-stat-label">Productivity Score</span>
              <span class="target-stat-value text-purple">${prodScore.total}/100</span>
              <span class="target-stat-sub">Multi-factor Transparent Index</span>
            </div>
          </div>

          <!-- Preparation Phases -->
          <div class="phases-timeline">
            <div class="phase-chip active">
              <span class="phase-number">P1</span>
              <span class="phase-name">${window.Utils.escapeHtml(streakInfo.phase1Title || 'Phase 1: Foundation & Mastery')}</span>
              <span class="phase-dates">${window.Utils.escapeHtml(streakInfo.phase1Dates || 'Sep – Dec 2026')}</span>
            </div>
            <div class="phase-chip">
              <span class="phase-number">P2</span>
              <span class="phase-name">${window.Utils.escapeHtml(streakInfo.phase2Title || 'Phase 2: Applications & Drives')}</span>
              <span class="phase-dates">${window.Utils.escapeHtml(streakInfo.phase2Dates || 'Jan – Mar 2027')}</span>
            </div>
            <div class="phase-chip">
              <span class="phase-number">P3</span>
              <span class="phase-name">${window.Utils.escapeHtml(streakInfo.phase3Title || 'Phase 3: Internships & Growth')}</span>
              <span class="phase-dates">${window.Utils.escapeHtml(streakInfo.phase3Dates || 'Apr 2027 Onwards')}</span>
            </div>
          </div>
        </div>

        <div class="hero-actions">
          <button class="btn btn-primary" onclick="App.openTaskModal()">
            <i data-lucide="plus-circle"></i> Add Task
          </button>
          <button class="btn btn-secondary" onclick="App.navigateTo('today')">
            <i data-lucide="sun"></i> Focus Today
          </button>
          <button class="btn btn-secondary" onclick="App.navigateTo('revisions')">
            <i data-lucide="repeat"></i> Spaced Review
          </button>
        </div>
      </section>

      <!-- Streak Paused Notice (Non-punitive) -->
      ${streakInfo.streakPaused ? `
        <div class="alert-banner alert-warning">
          <div class="alert-icon"><i data-lucide="pause-circle"></i></div>
          <div class="alert-text">
            <strong>Streak Paused:</strong> You missed recent days, but your preparation is NOT ruined! Complete any planned task or click to restore your streak.
          </div>
          <button class="btn btn-sm btn-outline-warning" onclick="State.recoverStreak()">
            <i data-lucide="flame"></i> Restore Streak
          </button>
        </div>
      ` : ''}

      <!-- 7 KPI Command Cards -->
      <section class="kpi-grid">
        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Overall Completion</span>
            <div class="kpi-icon bg-primary-soft"><i data-lucide="pie-chart"></i></div>
          </div>
          <div class="kpi-value">${stats.overallPercentage}%</div>
          <div class="kpi-progress">
            <div class="kpi-progress-bar bg-primary" style="width: ${stats.overallPercentage}%"></div>
          </div>
          <span class="kpi-footer">${stats.completedTasks} completed / ${stats.totalTasks} total</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Completed Tasks</span>
            <div class="kpi-icon bg-success-soft"><i data-lucide="check-circle-2"></i></div>
          </div>
          <div class="kpi-value text-success">${stats.completedTasks}</div>
          <span class="kpi-footer">Retained & verified skills</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Remaining Tasks</span>
            <div class="kpi-icon bg-info-soft"><i data-lucide="list-todo"></i></div>
          </div>
          <div class="kpi-value text-info">${stats.remainingTasks}</div>
          <span class="kpi-footer">Across all 4 tracks</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">In Progress</span>
            <div class="kpi-icon bg-warning-soft"><i data-lucide="clock"></i></div>
          </div>
          <div class="kpi-value text-warning">${stats.inProgressTasks}</div>
          <span class="kpi-footer">Currently being studied</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Need Revision</span>
            <div class="kpi-icon bg-danger-soft"><i data-lucide="repeat"></i></div>
          </div>
          <div class="kpi-value text-danger">${stats.needRevisionTasks}</div>
          <span class="kpi-footer">Requires spaced repetition</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Today's Assigned</span>
            <div class="kpi-icon bg-purple-soft"><i data-lucide="calendar"></i></div>
          </div>
          <div class="kpi-value text-purple">${stats.todayAssigned}</div>
          <span class="kpi-footer">Planned for today</span>
        </div>

        <div class="kpi-card card">
          <div class="kpi-header">
            <span class="kpi-title">Past Planned Date</span>
            <div class="kpi-icon bg-neutral-soft"><i data-lucide="calendar-clock"></i></div>
          </div>
          <div class="kpi-value text-muted">${stats.overdueTasks}</div>
          <span class="kpi-footer hint" title="Planned date passed. Not a failure! Reschedule anytime.">
            No penalty · Reschedule anytime
          </span>
        </div>
      </section>

      <!-- Dashboard Charts Grid -->
      <section class="charts-grid">
        <!-- Chart 1: Overall Completion Donut -->
        <div class="chart-card card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3 class="chart-title">Status Breakdown</h3>
              <p class="chart-subtitle">Distribution of task states</p>
            </div>
            <div class="chart-badge">${stats.totalTasks} Tasks</div>
          </div>
          <div class="chart-body" style="height: 260px; position: relative;">
            <canvas id="chart-status-donut"></canvas>
          </div>
        </div>

        <!-- Chart 2: Track Mastery Comparison -->
        <div class="chart-card card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3 class="chart-title">Track Mastery Comparison</h3>
              <p class="chart-subtitle">Progress across the 4 key career tracks</p>
            </div>
            <button class="btn btn-sm btn-ghost" onclick="App.navigateTo('tracks')">View All Tracks</button>
          </div>
          <div class="chart-body" style="height: 260px; position: relative;">
            <canvas id="chart-tracks-bar"></canvas>
          </div>
        </div>

        <!-- Chart 3: Weekly Activity & Completion Trend -->
        <div class="chart-card card span-2">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3 class="chart-title">Completion Trend & Velocity</h3>
              <p class="chart-subtitle">Tasks completed and study hours over recent sessions</p>
            </div>
            <div class="chart-actions">
              <span class="legend-dot bg-primary"></span> Tasks Completed
              <span class="legend-dot bg-emerald ml-3"></span> Study Hours Logged
            </div>
          </div>
          <div class="chart-body" style="height: 280px; position: relative;">
            <canvas id="chart-velocity-trend"></canvas>
          </div>
        </div>

        <!-- Chart 4: Study Hours: Estimated vs Actual -->
        <div class="chart-card card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3 class="chart-title">Study Hours Investment</h3>
              <p class="chart-subtitle">Planned vs logged hours</p>
            </div>
            <div class="chart-badge text-emerald">${stats.totalActualHours}h Logged</div>
          </div>
          <div class="chart-body" style="height: 240px; position: relative;">
            <canvas id="chart-hours-bar"></canvas>
          </div>
        </div>

        <!-- Chart 5: Spaced Revision Workload -->
        <div class="chart-card card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3 class="chart-title">Spaced Revision Pipeline</h3>
              <p class="chart-subtitle">Retention items and schedule</p>
            </div>
            <button class="btn btn-sm btn-ghost" onclick="App.navigateTo('revisions')">Open Queue</button>
          </div>
          <div class="chart-body" style="height: 240px; position: relative;">
            <canvas id="chart-revision-donut"></canvas>
          </div>
        </div>
      </section>

      <!-- Track Quick Overview Cards -->
      <section class="dashboard-tracks-section">
        <div class="section-header">
          <div>
            <h2 class="section-title">Tracks Overview</h2>
            <p class="section-subtitle">Click any track to explore its subjects and syllabus hierarchy</p>
          </div>
          <button class="btn btn-secondary" onclick="App.navigateTo('tracks')">
            View Subject Breakdowns <i data-lucide="arrow-right"></i>
          </button>
        </div>

        <div class="tracks-card-grid">
          ${stats.trackStats.map(track => `
            <div class="track-summary-card card hover-lift" onclick="App.filterChecklistByTrack('${track.id}')">
              <div class="track-card-top">
                <div class="track-icon-badge" style="background-color: ${track.color}18; color: ${track.color};">
                  <i data-lucide="${track.icon || 'book-open'}"></i>
                </div>
                <span class="track-pct-pill" style="color: ${track.color}; background-color: ${track.color}15;">
                  ${track.percentage}%
                </span>
              </div>
              <h4 class="track-card-title">${window.Utils.escapeHtml(track.name)}</h4>
              <div class="track-card-bar">
                <div class="track-card-bar-fill" style="width: ${track.percentage}%; background-color: ${track.color};"></div>
              </div>
              <div class="track-card-footer">
                <span>${track.completed}/${track.total} Completed</span>
                <span class="text-warning">${track.inProgress} In Progress</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    if (window.lucide) window.lucide.createIcons();
    this.renderCharts(stats);
  },

  renderCharts(stats) {
    if (typeof Chart === 'undefined') return;

    // Destroy existing charts to prevent canvas re-use errors
    Object.keys(this.charts).forEach(key => {
      if (this.charts[key]) {
        this.charts[key].destroy();
      }
    });

    const isDark = document.body.classList.contains('dark-theme') || !document.body.classList.contains('light-theme');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

    // Chart 1: Status Donut
    const ctx1 = document.getElementById('chart-status-donut');
    if (ctx1) {
      this.charts.status = new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'In Progress', 'Need Revision', 'Not Started'],
          datasets: [{
            data: [stats.completedTasks, stats.inProgressTasks, stats.needRevisionTasks, stats.notStartedTasks],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'],
            borderWidth: 2,
            borderColor: isDark ? '#1e293b' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, boxWidth: 12, padding: 14 }
            }
          },
          cutout: '72%'
        }
      });
    }

    // Chart 2: Track Comparison Horizontal Bar Chart
    const ctx2 = document.getElementById('chart-tracks-bar');
    if (ctx2) {
      this.charts.tracks = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: stats.trackStats.map(t => t.name),
          datasets: [{
            label: 'Completion %',
            data: stats.trackStats.map(t => t.percentage),
            backgroundColor: stats.trackStats.map(t => t.color),
            borderRadius: 6,
            barThickness: 22
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
              grid: { color: gridColor },
              ticks: { color: textColor, callback: v => v + '%' }
            },
            y: {
              grid: { display: false },
              ticks: { color: textColor, font: { weight: '500' } }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => ` ${ctx.raw}% Completed`
              }
            }
          }
        }
      });
    }

    // Chart 3: Weekly Activity Trend
    const ctx3 = document.getElementById('chart-velocity-trend');
    if (ctx3) {
      const history = window.State.getState().gamification?.history || [];
      const labels = history.map(h => window.Utils.formatDate(h.date, 'short'));
      const tasksData = history.map(h => h.tasksCompleted);
      const hoursData = history.map(h => h.hoursLogged);

      this.charts.velocity = new Chart(ctx3, {
        type: 'line',
        data: {
          labels: labels.length ? labels : ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
          datasets: [
            {
              label: 'Tasks Completed',
              data: tasksData.length ? tasksData : [2, 4, 5, 6, 4],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.12)',
              fill: true,
              tension: 0.35,
              borderWidth: 2.5,
              pointBackgroundColor: '#3b82f6',
              pointRadius: 4
            },
            {
              label: 'Study Hours',
              data: hoursData.length ? hoursData : [2.0, 3.0, 3.5, 4.0, 3.0],
              borderColor: '#10b981',
              backgroundColor: 'transparent',
              borderDash: [4, 4],
              tension: 0.35,
              borderWidth: 2,
              pointBackgroundColor: '#10b981',
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { color: gridColor }, ticks: { color: textColor } },
            y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    // Chart 4: Study Hours Bar Chart
    const ctx4 = document.getElementById('chart-hours-bar');
    if (ctx4) {
      this.charts.hours = new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: ['Est. Planned Hours', 'Actual Logged Hours'],
          datasets: [{
            data: [stats.totalEstHours, stats.totalActualHours],
            backgroundColor: ['#64748b', '#10b981'],
            borderRadius: 6,
            barThickness: 38
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { beginAtZero: true, grid: { color: gridColor }, ticks: { color: textColor, callback: v => v + 'h' } },
            x: { grid: { display: false }, ticks: { color: textColor } }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    // Chart 5: Spaced Revision Workload
    const ctx5 = document.getElementById('chart-revision-donut');
    if (ctx5) {
      const revs = window.State.getRevisions();
      this.charts.revisions = new Chart(ctx5, {
        type: 'doughnut',
        data: {
          labels: ['Due Today', 'Overdue', 'Upcoming', 'Completed'],
          datasets: [{
            data: [revs.dueToday.length, revs.overdue.length, revs.upcoming.length, revs.completed.length],
            backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'],
            borderWidth: 2,
            borderColor: isDark ? '#1e293b' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor, boxWidth: 10, padding: 10 }
            }
          },
          cutout: '70%'
        }
      });
    }
  }
};

window.Dashboard = Dashboard;
