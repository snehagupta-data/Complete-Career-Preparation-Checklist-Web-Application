/**
 * Career Preparation & Skill Mastery Checklist
 * Central Reactive State Manager
 */

const State = {
  data: null,
  listeners: [],

  init() {
    this.data = window.Storage.load();
    this.checkDailyState();
  },

  subscribe(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    }
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notify(event, payload) {
    window.Storage.save(this.data);
    this.listeners.forEach(fn => {
      try {
        fn(event, payload, this.data);
      } catch (err) {
        console.error('Error in state subscriber:', err);
      }
    });
  },

  /**
   * Daily check for streak and activity
   */
  checkDailyState() {
    if (!this.data || !this.data.settings) return;
    const today = window.Utils.getTodayString();
    const lastActive = this.data.settings.lastActiveDate;

    if (!lastActive) {
      this.data.settings.lastActiveDate = today;
      return;
    }

    if (lastActive !== today) {
      // Calculate how many days have passed
      const d1 = new Date(lastActive);
      const d2 = new Date(today);
      const diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));

      // PHILOSOPHY: Do NOT reset streak to 0 or penalize user!
      // If user missed a day, pause the streak gracefully.
      if (diffDays > 1 && !this.data.settings.streakPaused) {
        this.data.settings.streakPaused = true;
      }
    }
  },

  /* ==========================================================================
     GETTERS & QUERIES
     ========================================================================== */

  getState() {
    return this.data;
  },

  getSettings() {
    return this.data.settings || {};
  },

  getTracks() {
    return this.data.tracks || [];
  },

  getTrackById(trackId) {
    return this.getTracks().find(t => t.id === trackId) || null;
  },

  /**
   * Flatten all tasks across all tracks with rich breadcrumb context
   */
  getAllTasks() {
    const list = [];
    const tracks = this.getTracks();
    for (const track of tracks) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          for (const subtopic of topic.subtopics || []) {
            for (const task of subtopic.tasks || []) {
              list.push({
                ...task,
                trackId: track.id,
                trackName: track.name,
                trackColor: track.color || '#3b82f6',
                subjectId: subject.id,
                subjectName: subject.name,
                topicId: topic.id,
                topicName: topic.name,
                subtopicId: subtopic.id,
                subtopicName: subtopic.name
              });
            }
          }
        }
      }
    }
    return list;
  },

  /**
   * Deep lookup of task by ID returning parent references
   */
  getTaskById(taskId) {
    const tracks = this.getTracks();
    for (const track of tracks) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          for (const subtopic of topic.subtopics || []) {
            for (const task of subtopic.tasks || []) {
              if (task.id === taskId) {
                return { task, subtopic, topic, subject, track };
              }
            }
          }
        }
      }
    }
    return null;
  },

  /**
   * Calculate Target Date and Days Remaining
   */
  getTargetInfo() {
    const targetDateStr = this.data.settings.targetDate || '2027-01-01';
    const targetTitle = this.data.settings.targetTitle || '1 January 2027 Career Preparation Target';
    const daysRemaining = window.Utils.getDaysRemaining(targetDateStr);
    const isPastTarget = daysRemaining <= 0;

    return {
      targetDate: targetDateStr,
      targetTitle,
      daysRemaining: Math.max(0, daysRemaining),
      rawDaysRemaining: daysRemaining,
      isPastTarget,
      statusLabel: isPastTarget ? 'Preparation Target Completed' : `${daysRemaining} Days Remaining`
    };
  },

  /**
   * Compute comprehensive completion statistics
   */
  getCompletionStats() {
    const tasks = this.getAllTasks();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'Completed').length;
    const inProgressTasks = tasks.filter(t => t.status === 'In Progress').length;
    const needRevisionTasks = tasks.filter(t => t.status === 'Need Revision').length;
    const notStartedTasks = tasks.filter(t => t.status === 'Not Started').length;

    // Optional project tasks inclusion
    let projectTotal = 0;
    let projectCompleted = 0;
    if (this.data.settings.includeProjectsInOverallProgress && this.data.projects) {
      this.data.projects.forEach(p => {
        (p.checklist || []).forEach(item => {
          projectTotal++;
          if (item.completed) projectCompleted++;
        });
      });
    }

    const grandTotal = totalTasks + projectTotal;
    const grandCompleted = completedTasks + projectCompleted;
    const overallPercentage = grandTotal > 0 ? Math.round((grandCompleted / grandTotal) * 100) : 0;
    const coreChecklistPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Track Breakdown
    const trackStats = this.getTracks().map(track => {
      let trkTotal = 0;
      let trkCompleted = 0;
      let trkInProgress = 0;
      let trkRevision = 0;

      (track.subjects || []).forEach(s => {
        (s.topics || []).forEach(top => {
          (top.subtopics || []).forEach(sub => {
            (sub.tasks || []).forEach(t => {
              trkTotal++;
              if (t.status === 'Completed') trkCompleted++;
              else if (t.status === 'In Progress') trkInProgress++;
              else if (t.status === 'Need Revision') trkRevision++;
            });
          });
        });
      });

      return {
        id: track.id,
        name: track.name,
        color: track.color,
        icon: track.icon,
        total: trkTotal,
        completed: trkCompleted,
        inProgress: trkInProgress,
        revision: trkRevision,
        percentage: trkTotal > 0 ? Math.round((trkCompleted / trkTotal) * 100) : 0
      };
    });

    // Today / Overdue counts
    const todayStr = window.Utils.getTodayString();
    const todayAssigned = tasks.filter(t => 
      t.plannedDate === todayStr || (this.data.settings.todayTaskIds || []).includes(t.id)
    ).length;

    const overdueTasks = tasks.filter(t => 
      t.status !== 'Completed' && t.plannedDate && t.plannedDate < todayStr
    ).length;

    // Study hours
    const totalEstHours = tasks.reduce((acc, t) => acc + (parseFloat(t.estimatedHours) || 0), 0);
    const totalActualHours = tasks.reduce((acc, t) => acc + (parseFloat(t.actualHours) || 0), 0);

    return {
      totalTasks,
      completedTasks,
      inProgressTasks,
      needRevisionTasks,
      notStartedTasks,
      remainingTasks: totalTasks - completedTasks,
      overallPercentage,
      coreChecklistPercentage,
      projectTotal,
      projectCompleted,
      trackStats,
      todayAssigned,
      overdueTasks,
      totalEstHours: parseFloat(totalEstHours.toFixed(1)),
      totalActualHours: parseFloat(totalActualHours.toFixed(1))
    };
  },

  /**
   * Get Today's tasks (Assigned for today + Overdue items + Revisions)
   */
  getTodayTasks() {
    const today = window.Utils.getTodayString();
    const all = this.getAllTasks();
    const pinnedIds = this.data.settings.todayTaskIds || [];

    const assignedToday = [];
    const overdue = [];
    const completedToday = [];

    all.forEach(task => {
      const isPinned = pinnedIds.includes(task.id);
      const isPlannedToday = task.plannedDate === today;
      const isCompleted = task.status === 'Completed';

      if (task.completionDate === today && isCompleted) {
        completedToday.push(task);
      } else if (isPinned || isPlannedToday) {
        if (isCompleted) {
          completedToday.push(task);
        } else {
          assignedToday.push(task);
        }
      } else if (!isCompleted && task.plannedDate && task.plannedDate < today) {
        overdue.push(task);
      }
    });

    return { assignedToday, overdue, completedToday };
  },

  /**
   * Spaced Revisions queue
   */
  getRevisions() {
    const today = window.Utils.getTodayString();
    const revisions = this.data.revisions || [];

    const dueToday = [];
    const overdue = [];
    const upcoming = [];
    const completed = [];

    revisions.forEach(rev => {
      if (rev.status === 'Completed') {
        completed.push(rev);
      } else if (rev.scheduledDate === today) {
        dueToday.push(rev);
      } else if (rev.scheduledDate < today) {
        overdue.push(rev);
      } else {
        upcoming.push(rev);
      }
    });

    return { all: revisions, dueToday, overdue, upcoming, completed };
  },

  getProjects() {
    return this.data.projects || [];
  },

  getExams() {
    return this.data.exams || [];
  },

  /* ==========================================================================
     TASK MUTATIONS
     ========================================================================== */

  addTask(subtopicId, taskData) {
    const tracks = this.getTracks();
    for (const track of tracks) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          for (const subtopic of topic.subtopics || []) {
            if (subtopic.id === subtopicId) {
              const newTask = {
                id: window.Utils.generateId('tsk'),
                name: taskData.name || 'Untitled Task',
                description: taskData.description || '',
                status: taskData.status || 'Not Started',
                plannedDate: taskData.plannedDate || '',
                deadline: taskData.deadline || '',
                estimatedHours: parseFloat(taskData.estimatedHours) || 2,
                actualHours: parseFloat(taskData.actualHours) || 0,
                notes: taskData.notes || '',
                resources: taskData.resources || [],
                interviewQuestions: taskData.interviewQuestions || '',
                revisionDate: taskData.revisionDate || '',
                completionDate: taskData.status === 'Completed' ? window.Utils.getTodayString() : '',
                createdAt: window.Utils.getTodayString(),
                updatedAt: window.Utils.getTodayString()
              };

              subtopic.tasks = subtopic.tasks || [];
              subtopic.tasks.push(newTask);
              this.awardXP(10, 'Created new task');
              this.notify('task:created', { task: newTask, subtopicId });
              return newTask;
            }
          }
        }
      }
    }
    return null;
  },

  updateTask(taskId, updatedFields) {
    const found = this.getTaskById(taskId);
    if (!found) return null;

    const { task } = found;
    const oldStatus = task.status;
    const newStatus = updatedFields.status !== undefined ? updatedFields.status : oldStatus;

    Object.assign(task, updatedFields);
    task.updatedAt = window.Utils.getTodayString();

    // Check completion status transition
    if (newStatus === 'Completed' && oldStatus !== 'Completed') {
      task.completionDate = task.completionDate || window.Utils.getTodayString();
      task.completedAt = new Date().toISOString();
      this.handleTaskCompleted(task);
    } else if (newStatus !== 'Completed' && oldStatus === 'Completed') {
      task.completionDate = '';
      task.completedAt = null;
    }

    this.notify('task:updated', { task });
    return task;
  },

  deleteTask(taskId) {
    const found = this.getTaskById(taskId);
    if (!found) return false;

    const { subtopic } = found;
    subtopic.tasks = (subtopic.tasks || []).filter(t => t.id !== taskId);

    // Also remove from pinned today
    if (this.data.settings.todayTaskIds) {
      this.data.settings.todayTaskIds = this.data.settings.todayTaskIds.filter(id => id !== taskId);
    }

    // Also remove corresponding revision items if any
    if (this.data.revisions) {
      this.data.revisions = this.data.revisions.filter(r => r.taskId !== taskId);
    }

    this.notify('task:deleted', { taskId });
    return true;
  },

  duplicateTask(taskId) {
    const found = this.getTaskById(taskId);
    if (!found) return null;

    const { task, subtopic } = found;
    const copy = JSON.parse(JSON.stringify(task));
    copy.id = window.Utils.generateId('tsk');
    copy.name = `${copy.name} (Copy)`;
    copy.status = 'Not Started';
    copy.completionDate = '';
    copy.completedAt = null;
    copy.createdAt = window.Utils.getTodayString();
    copy.updatedAt = window.Utils.getTodayString();

    const idx = subtopic.tasks.findIndex(t => t.id === taskId);
    subtopic.tasks.splice(idx + 1, 0, copy);

    this.notify('task:duplicated', { task: copy });
    return copy;
  },

  /**
   * Move task across hierarchy: target can be different subtopic, subject, or track
   */
  moveTask(taskId, targetSubtopicId) {
    const found = this.getTaskById(taskId);
    if (!found) return false;

    const { task, subtopic: sourceSubtopic } = found;
    if (sourceSubtopic.id === targetSubtopicId) return true; // Already there

    // Find target subtopic
    let targetSubtopic = null;
    const tracks = this.getTracks();
    for (const track of tracks) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          for (const sub of topic.subtopics || []) {
            if (sub.id === targetSubtopicId) {
              targetSubtopic = sub;
              break;
            }
          }
          if (targetSubtopic) break;
        }
        if (targetSubtopic) break;
      }
      if (targetSubtopic) break;
    }

    if (!targetSubtopic) return false;

    // Remove from source and insert into target
    sourceSubtopic.tasks = sourceSubtopic.tasks.filter(t => t.id !== taskId);
    targetSubtopic.tasks = targetSubtopic.tasks || [];
    targetSubtopic.tasks.push(task);

    task.updatedAt = window.Utils.getTodayString();
    this.notify('task:moved', { taskId, targetSubtopicId });
    return true;
  },

  /**
   * Toggle or set status (Not Started, In Progress, Completed, Need Revision)
   */
  setTaskStatus(taskId, status) {
    return this.updateTask(taskId, { status });
  },

  /**
   * Move/Reschedule planned date (crucial: preserves completion state!)
   */
  rescheduleTask(taskId, newDate) {
    return this.updateTask(taskId, { plannedDate: newDate });
  },

  /**
   * Manual Today View curation
   */
  addToToday(taskId) {
    if (!this.data.settings.todayTaskIds) {
      this.data.settings.todayTaskIds = [];
    }
    if (!this.data.settings.todayTaskIds.includes(taskId)) {
      this.data.settings.todayTaskIds.push(taskId);
      this.notify('today:updated', { taskId, action: 'add' });
    }
  },

  removeFromToday(taskId) {
    if (this.data.settings.todayTaskIds) {
      this.data.settings.todayTaskIds = this.data.settings.todayTaskIds.filter(id => id !== taskId);
      this.notify('today:updated', { taskId, action: 'remove' });
    }
  },

  /* ==========================================================================
     HIERARCHY CRUD (Track, Subject, Topic, Subtopic)
     ========================================================================== */

  addTrack(trackData) {
    const newTrack = {
      id: window.Utils.generateId('track'),
      name: trackData.name || 'New Track',
      description: trackData.description || '',
      color: trackData.color || '#3b82f6',
      icon: trackData.icon || 'book-open',
      order: this.data.tracks.length + 1,
      subjects: []
    };
    this.data.tracks.push(newTrack);
    this.notify('track:created', { track: newTrack });
    return newTrack;
  },

  updateTrack(trackId, data) {
    const track = this.getTrackById(trackId);
    if (!track) return null;
    Object.assign(track, data);
    this.notify('track:updated', { track });
    return track;
  },

  deleteTrack(trackId) {
    this.data.tracks = this.data.tracks.filter(t => t.id !== trackId);
    this.notify('track:deleted', { trackId });
    return true;
  },

  addSubject(trackId, subjectData) {
    const track = this.getTrackById(trackId);
    if (!track) return null;

    const newSubject = {
      id: window.Utils.generateId('subj'),
      name: subjectData.name || 'New Subject',
      description: subjectData.description || '',
      topics: [
        {
          id: window.Utils.generateId('top'),
          name: 'General Topics',
          subtopics: [
            {
              id: window.Utils.generateId('sub'),
              name: 'Core Concepts',
              tasks: []
            }
          ]
        }
      ]
    };

    track.subjects = track.subjects || [];
    track.subjects.push(newSubject);
    this.notify('subject:created', { subject: newSubject, trackId });
    return newSubject;
  },

  updateSubject(subjectId, data) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        if (subject.id === subjectId) {
          Object.assign(subject, data);
          this.notify('subject:updated', { subject });
          return subject;
        }
      }
    }
    return null;
  },

  deleteSubject(subjectId) {
    for (const track of this.getTracks()) {
      const idx = (track.subjects || []).findIndex(s => s.id === subjectId);
      if (idx !== -1) {
        track.subjects.splice(idx, 1);
        this.notify('subject:deleted', { subjectId });
        return true;
      }
    }
    return false;
  },

  addTopic(subjectId, topicData) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        if (subject.id === subjectId) {
          const newTopic = {
            id: window.Utils.generateId('top'),
            name: topicData.name || 'New Topic',
            subtopics: [
              {
                id: window.Utils.generateId('sub'),
                name: 'Concepts & Tasks',
                tasks: []
              }
            ]
          };
          subject.topics = subject.topics || [];
          subject.topics.push(newTopic);
          this.notify('topic:created', { topic: newTopic, subjectId });
          return newTopic;
        }
      }
    }
    return null;
  },

  updateTopic(topicId, data) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          if (topic.id === topicId) {
            Object.assign(topic, data);
            this.notify('topic:updated', { topic });
            return topic;
          }
        }
      }
    }
    return null;
  },

  deleteTopic(topicId) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        const idx = (subject.topics || []).findIndex(t => t.id === topicId);
        if (idx !== -1) {
          subject.topics.splice(idx, 1);
          this.notify('topic:deleted', { topicId });
          return true;
        }
      }
    }
    return false;
  },

  addSubtopic(topicId, subtopicData) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          if (topic.id === topicId) {
            const newSub = {
              id: window.Utils.generateId('sub'),
              name: subtopicData.name || 'New Subtopic',
              tasks: []
            };
            topic.subtopics = topic.subtopics || [];
            topic.subtopics.push(newSub);
            this.notify('subtopic:created', { subtopic: newSub, topicId });
            return newSub;
          }
        }
      }
    }
    return null;
  },

  updateSubtopic(subtopicId, data) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          for (const sub of topic.subtopics || []) {
            if (sub.id === subtopicId) {
              Object.assign(sub, data);
              this.notify('subtopic:updated', { subtopic: sub });
              return sub;
            }
          }
        }
      }
    }
    return null;
  },

  deleteSubtopic(subtopicId) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        for (const topic of subject.topics || []) {
          const idx = (topic.subtopics || []).findIndex(s => s.id === subtopicId);
          if (idx !== -1) {
            topic.subtopics.splice(idx, 1);
            this.notify('subtopic:deleted', { subtopicId });
            return true;
          }
        }
      }
    }
    return false;
  },

  /* ==========================================================================
     PROJECTS CRUD
     ========================================================================== */

  addProject(projectData) {
    const newProject = {
      id: window.Utils.generateId('proj'),
      category: projectData.category || 'Data Analytics',
      name: projectData.name || 'New Portfolio Project',
      description: projectData.description || '',
      status: projectData.status || 'Not Started',
      tools: projectData.tools || [],
      githubUrl: projectData.githubUrl || '',
      dashboardUrl: projectData.dashboardUrl || '',
      notebookUrl: projectData.notebookUrl || '',
      datasetUrl: projectData.datasetUrl || '',
      reportUrl: projectData.reportUrl || '',
      notes: projectData.notes || '',
      checklist: projectData.checklist || [
        { id: window.Utils.generateId('cl'), text: 'Define problem & acquire data', completed: false },
        { id: window.Utils.generateId('cl'), text: 'Data exploration & cleaning', completed: false },
        { id: window.Utils.generateId('cl'), text: 'Analysis / modeling', completed: false },
        { id: window.Utils.generateId('cl'), text: 'Documentation & GitHub README', completed: false }
      ]
    };

    this.data.projects = this.data.projects || [];
    this.data.projects.push(newProject);
    this.awardXP(30, 'Added portfolio project');
    this.notify('project:created', { project: newProject });
    return newProject;
  },

  updateProject(projectId, data) {
    const proj = (this.data.projects || []).find(p => p.id === projectId);
    if (!proj) return null;
    Object.assign(proj, data);
    this.notify('project:updated', { project: proj });
    return proj;
  },

  deleteProject(projectId) {
    this.data.projects = (this.data.projects || []).filter(p => p.id !== projectId);
    this.notify('project:deleted', { projectId });
    return true;
  },

  toggleProjectChecklistItem(projectId, checklistItemId) {
    const proj = (this.data.projects || []).find(p => p.id === projectId);
    if (!proj) return false;
    const item = (proj.checklist || []).find(c => c.id === checklistItemId);
    if (!item) return false;

    item.completed = !item.completed;
    if (item.completed) {
      this.awardXP(25, 'Completed project milestone');
      window.Utils.celebrate();
    }
    this.notify('project:checklist_toggled', { projectId, checklistItemId, completed: item.completed });
    return true;
  },

  addProjectChecklistItem(projectId, text) {
    const proj = (this.data.projects || []).find(p => p.id === projectId);
    if (!proj) return null;
    proj.checklist = proj.checklist || [];
    const newItem = { id: window.Utils.generateId('cl'), text, completed: false };
    proj.checklist.push(newItem);
    this.notify('project:checklist_added', { projectId, item: newItem });
    return newItem;
  },

  deleteProjectChecklistItem(projectId, itemId) {
    const proj = (this.data.projects || []).find(p => p.id === projectId);
    if (!proj) return false;
    proj.checklist = (proj.checklist || []).filter(c => c.id !== itemId);
    this.notify('project:checklist_deleted', { projectId, itemId });
    return true;
  },

  /* ==========================================================================
     EXAMS CRUD
     ========================================================================== */

  addExam(examData) {
    const newExam = {
      id: window.Utils.generateId('exam'),
      company: examData.company || 'Company Name',
      name: examData.name || 'Assessment / Exam Name',
      eligibility: examData.eligibility || '',
      syllabus: examData.syllabus || '',
      status: examData.status || 'Not Started',
      registrationStatus: examData.registrationStatus || 'Check Career Portal',
      registrationUrl: examData.registrationUrl || '',
      officialUrl: examData.officialUrl || '',
      examDate: examData.examDate || '',
      expectedTiming: examData.expectedTiming || '',
      notes: examData.notes || ''
    };

    this.data.exams = this.data.exams || [];
    this.data.exams.push(newExam);
    this.notify('exam:created', { exam: newExam });
    return newExam;
  },

  updateExam(examId, data) {
    const exam = (this.data.exams || []).find(e => e.id === examId);
    if (!exam) return null;
    Object.assign(exam, data);
    this.notify('exam:updated', { exam });
    return exam;
  },

  deleteExam(examId) {
    this.data.exams = (this.data.exams || []).filter(e => e.id !== examId);
    this.notify('exam:deleted', { examId });
    return true;
  },

  /* ==========================================================================
     REVISIONS CRUD
     ========================================================================== */

  addRevision(taskId, intervalDays = 3, scheduledDate = '', notes = '') {
    const found = this.getTaskById(taskId);
    if (!found) return null;

    const today = window.Utils.getTodayString();
    let targetDate = scheduledDate;
    if (!targetDate) {
      const d = new Date();
      d.setDate(d.getDate() + intervalDays);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      targetDate = `${year}-${month}-${day}`;
    }

    const newRev = {
      id: window.Utils.generateId('rev'),
      taskId,
      taskName: found.task.name,
      subjectName: found.subject.name,
      trackName: found.track.name,
      scheduledDate: targetDate,
      status: 'Pending',
      intervalDays,
      reviewCount: 0,
      notes: notes || `Spaced revision for ${found.task.name}`
    };

    this.data.revisions = this.data.revisions || [];
    this.data.revisions.push(newRev);

    // Also update task's revisionDate
    found.task.revisionDate = targetDate;

    this.notify('revision:scheduled', { revision: newRev });
    return newRev;
  },

  completeRevision(revisionId, nextIntervalDays = null) {
    const rev = (this.data.revisions || []).find(r => r.id === revisionId);
    if (!rev) return false;

    rev.status = 'Completed';
    rev.lastReviewedAt = window.Utils.getTodayString();
    rev.reviewCount = (rev.reviewCount || 0) + 1;

    this.awardXP(35, 'Completed spaced revision');

    // If next interval requested, automatically schedule next spaced review!
    if (nextIntervalDays && nextIntervalDays > 0) {
      const d = new Date();
      d.setDate(d.getDate() + nextIntervalDays);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const nextDate = `${year}-${month}-${day}`;

      const nextRev = {
        id: window.Utils.generateId('rev'),
        taskId: rev.taskId,
        taskName: rev.taskName,
        subjectName: rev.subjectName,
        trackName: rev.trackName,
        scheduledDate: nextDate,
        status: 'Pending',
        intervalDays: nextIntervalDays,
        reviewCount: rev.reviewCount,
        notes: `Next iteration (${nextIntervalDays}d spaced review)`
      };
      this.data.revisions.push(nextRev);
    }

    this.notify('revision:completed', { revision: rev });
    return true;
  },

  deleteRevision(revisionId) {
    this.data.revisions = (this.data.revisions || []).filter(r => r.id !== revisionId);
    this.notify('revision:deleted', { revisionId });
    return true;
  },

  /* ==========================================================================
     GAMIFICATION, STREAKS & XP
     ========================================================================== */

  handleTaskCompleted(task) {
    this.awardXP(50, `Completed task: ${task.name}`);
    window.Utils.celebrate();

    // Update streak
    const today = window.Utils.getTodayString();
    if (!this.data.settings.lastActiveDate || this.data.settings.lastActiveDate !== today) {
      this.data.settings.streakCount = (this.data.settings.streakCount || 0) + 1;
      this.data.settings.lastActiveDate = today;
      this.data.settings.streakPaused = false;
    }

    // Check badges
    this.checkBadges();
  },

  awardXP(amount, reason = '') {
    if (!this.data.gamification) this.data.gamification = { xp: 0, level: 1, badges: [] };
    this.data.gamification.xp = (this.data.gamification.xp || 0) + amount;

    // Calculate level: 300 XP per level tier
    const newLevel = Math.floor(this.data.gamification.xp / 350) + 1;
    const oldLevel = this.data.gamification.level || 1;
    this.data.gamification.level = newLevel;

    if (newLevel > oldLevel && window.Utils) {
      window.Utils.showToast(`🎉 Level Up! You achieved Level ${newLevel}!`, 'success', 4000);
      window.Utils.celebrate();
    }
  },

  toggleStreakPause() {
    this.data.settings.streakPaused = !this.data.settings.streakPaused;
    this.notify('streak:toggled', { paused: this.data.settings.streakPaused });
  },

  recoverStreak() {
    this.data.settings.streakPaused = false;
    this.data.settings.streakCount = (this.data.settings.streakCount || 0) + 1;
    this.data.settings.lastActiveDate = window.Utils.getTodayString();
    this.notify('streak:recovered', { count: this.data.settings.streakCount });
    if (window.Utils) {
      window.Utils.showToast('🔥 Streak recovered! Consistency maintained.', 'success');
    }
  },

  checkBadges() {
    const badges = this.data.gamification.badges || [];
    const stats = this.getCompletionStats();
    const today = window.Utils.getTodayString();

    badges.forEach(b => {
      if (!b.unlocked) {
        if (b.id === 'b_first_step' && stats.completedTasks >= 1) {
          b.unlocked = true;
          b.unlockedAt = today;
          window.Utils.showToast(`🏆 Badge Unlocked: ${b.name}!`, 'success');
        } else if (b.id === 'b_sql_starter') {
          const sqlCompleted = this.getAllTasks().filter(t => t.subjectName === 'SQL' && t.status === 'Completed').length;
          if (sqlCompleted >= 5) {
            b.unlocked = true;
            b.unlockedAt = today;
            window.Utils.showToast(`🏆 Badge Unlocked: ${b.name}!`, 'success');
          }
        } else if (b.id === 'b_dsa_foundation') {
          const dsaCompleted = this.getAllTasks().filter(t => t.trackId === 'track_dsa' && t.status === 'Completed').length;
          if (dsaCompleted >= 10) {
            b.unlocked = true;
            b.unlockedAt = today;
            window.Utils.showToast(`🏆 Badge Unlocked: ${b.name}!`, 'success');
          }
        } else if (b.id === 'b_revision_habit') {
          const revs = (this.data.revisions || []).filter(r => r.status === 'Completed').length;
          if (revs >= 3) {
            b.unlocked = true;
            b.unlockedAt = today;
            window.Utils.showToast(`🏆 Badge Unlocked: ${b.name}!`, 'success');
          }
        }
      }
    });
  },

  /**
   * Transparent productivity score calculation
   * Factors:
   * - Task completion velocity (up to 40 pts)
   * - Active streak consistency (up to 25 pts)
   * - Logged study hours vs target (up to 20 pts)
   * - Spaced revision retention (up to 15 pts)
   */
  getProductivityScore() {
    const stats = this.getCompletionStats();
    const streak = this.data.settings.streakCount || 0;
    const revs = this.data.revisions || [];
    const completedRevs = revs.filter(r => r.status === 'Completed').length;

    // Component 1: Task progress (0-40)
    const taskScore = Math.min(40, Math.round((stats.completedTasks / Math.max(1, stats.totalTasks)) * 80));

    // Component 2: Consistency & streak (0-25)
    const streakScore = Math.min(25, streak * 5);

    // Component 3: Study hours (0-20)
    const hoursRatio = stats.totalEstHours > 0 ? (stats.totalActualHours / stats.totalEstHours) : 0.5;
    const hoursScore = Math.min(20, Math.round(hoursRatio * 20));

    // Component 4: Revision completion (0-15)
    const revScore = revs.length > 0 ? Math.min(15, Math.round((completedRevs / revs.length) * 15)) : 10;

    const total = Math.min(100, taskScore + streakScore + hoursScore + revScore);

    return {
      total,
      breakdown: {
        taskProgress: { score: taskScore, max: 40, label: 'Completed Knowledge' },
        consistency: { score: streakScore, max: 25, label: 'Habit Consistency' },
        studyHours: { score: hoursScore, max: 20, label: 'Focused Study Hours' },
        spacedRevision: { score: revScore, max: 15, label: 'Spaced Repetition' }
      }
    };
  },

  /* ==========================================================================
     SETTINGS & RESET OPERATIONS
     ========================================================================== */

  updateSettings(newSettings) {
    this.data.settings = { ...this.data.settings, ...newSettings };
    this.notify('settings:updated', { settings: this.data.settings });
  },

  resetTask(taskId) {
    const found = this.getTaskById(taskId);
    if (!found) return false;
    found.task.status = 'Not Started';
    found.task.actualHours = 0;
    found.task.completionDate = '';
    found.task.completedAt = null;
    this.notify('task:reset', { taskId });
    return true;
  },

  resetSubject(subjectId) {
    for (const track of this.getTracks()) {
      for (const subject of track.subjects || []) {
        if (subject.id === subjectId) {
          (subject.topics || []).forEach(top => {
            (top.subtopics || []).forEach(sub => {
              (sub.tasks || []).forEach(t => {
                t.status = 'Not Started';
                t.actualHours = 0;
                t.completionDate = '';
                t.completedAt = null;
              });
            });
          });
          this.notify('subject:reset', { subjectId });
          return true;
        }
      }
    }
    return false;
  },

  resetTrack(trackId) {
    const track = this.getTrackById(trackId);
    if (!track) return false;
    (track.subjects || []).forEach(s => {
      (s.topics || []).forEach(top => {
        (top.subtopics || []).forEach(sub => {
          (sub.tasks || []).forEach(t => {
            t.status = 'Not Started';
            t.actualHours = 0;
            t.completionDate = '';
            t.completedAt = null;
          });
        });
      });
    });
    this.notify('track:reset', { trackId });
    return true;
  },

  resetAllData() {
    this.data = window.Storage.resetAll();
    this.notify('all:reset', {});
    return true;
  }
};

window.State = State;
