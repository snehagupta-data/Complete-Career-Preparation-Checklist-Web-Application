# Career Preparation & Skill Mastery Checklist Web Application

> **A production-grade, non-punitive productivity and syllabus tracking system designed for final-year B.Sc Data Science students preparing simultaneously for Data Analyst internships, Entry-level Data Science roles, Indian Mass Hiring fresher assessments, and DSA technical rounds.**

---

## 1. Product Philosophy

The foundational guiding principle of this system is:

> **"Progress is based on completed knowledge and demonstrated skills, not calendar perfection."**

Unlike conventional habit trackers and rigid 100-day roadmaps, this system never penalizes the user for life happening:
- **NO Day 1 → Day 100 forced sequence**: You are free to tackle topics based on current academic focus or drive schedules.
- **NO automatic streak resets to zero**: If a day or week is missed, the streak simply displays `Streak Paused ⏸️` and offers a one-click recovery without shaming or loss of progress.
- **NO requirement to complete yesterday before today**: Work on whatever is most relevant today.
- **NO deletion of unfinished tasks**: Unfinished tasks simply retain their status.
- **Rescheduling preserves completion state**: Moving a task from September 20 to September 24 updates the planned date without touching its completion timestamp or earned XP.
- **Dynamic Target Date (1 January 2027)**: Automatically counts down remaining days (~100–110 days relative to late 2026). Once 1 January 2027 arrives, the application transitions smoothly into `Preparation Target Completed` and remains 100% functional for continuous career growth.

---

## 2. Key Features Breakdown

### 🎯 1. Primary Command Center (Dashboard)
- **Target Countdown**: Dynamic days remaining calculation until 1 January 2027 with preparation phase chips (Phase 1: Foundation, Phase 2: Assessments & Applications, Phase 3: Internships & Growth).
- **7 Real-time KPI Cards**: Overall completion percentage, completed tasks, remaining tasks, in-progress tasks, tasks needing revision, today's assigned tasks, and overdue tasks (with explicit reminder that overdue does not mean failed).
- **Interactive Visualizations (Chart.js)**:
  1. *Status Breakdown Donut*: Completed vs. In Progress vs. Need Revision vs. Not Started.
  2. *Track Mastery Horizontal Bar Chart*: Completion comparison across Data Analytics, Data Science, Mass Hiring, and DSA.
  3. *Velocity & Output Line Chart*: Daily/weekly completion trends and study hours logged over time.
  4. *Study Hours Bar Chart*: Estimated planned hours vs. actual logged hours.
  5. *Spaced Revision Pipeline Donut*: Due today, past due, upcoming, and completed reviews.
- **Track Quick Launch Cards**: Instant access to subject-level completion bars.

### 📋 2. Master Checklist Hierarchy
- **Strict 5-Level Structure**: `TRACK → SUBJECT → TOPIC → SUBTOPIC → TASK`
- **Preloaded with 190+ Comprehensive Skills**:
  - **Track 1: Data Analytics**: SQL (aggregations, joins, subqueries, CTEs, window functions `ROW_NUMBER`, `RANK`, `LAG`, `LEAD`, retention/churn, RFM, optimization), Excel (formulas, `XLOOKUP`, `INDEX/MATCH`, pivot tables, slicers, Power Query), Power BI (ETL, star schema, DAX `CALCULATE`, time intelligence), Python for Analytics (NumPy, Pandas, Matplotlib, Seaborn, EDA), Statistics (measures, distributions, hypothesis testing, ANOVA, A/B testing), Business Analytics (KPIs, unit economics, retention curves), and Interview Prep.
  - **Track 2: Data Science**: Advanced Python & OOP, NumPy & Pandas vectorized computing, Statistics & Probability (Bayes, CLT, distributions), EDA diagnostics & outlier treatment, Machine Learning (Linear/Ridge/Lasso regression, Logistic, Decision Trees, Random Forest, XGBoost, K-Means, DBSCAN, PCA, bias-variance tradeoff), Feature Engineering (encoding, scaling, pipelines, leakage prevention), Model Evaluation (ROC-AUC, Precision/Recall, PR curve, cross-validation), Advanced ML (LightGBM, SHAP interpretability, SMOTE), and Case Studies.
  - **Track 3: Mass Hiring Exams**: Quantitative Aptitude (Number Systems, Percentages, Profit & Loss, Time & Work, Speed & Distance, Combinatorics, DI), Logical Reasoning (Series, Blood Relations, Syllogisms, Seating Arrangements, Puzzles), Verbal Ability (Reading Comprehension, Grammar rules, Para Jumbles), Assessment Coding & SQL MCQs, Core CS (DBMS Normalization & ACID, OOP 4 pillars, OS processes & deadlocks, Computer Networks OSI/TCP/IP, Cloud basics, SDLC), and Professional Communication/Essay Writing.
  - **Track 4: DSA**: Complexity (Big O, time/space), Arrays (Kadane's, Dutch National Flag, prefix sums), Strings (Anagrams, Palindromes), Hashing (Two Sum, Subarray Sum K), Linked Lists (Reversal, Floyd's Cycle, Merge), Stack & Monotonic Stack (Next Greater Element), Queue, Recursion, Sorting & Searching (Binary Search variants, Merge Sort, Quick Sort), Two Pointers & Sliding Window, Trees & BST, Heap, Graphs (BFS/DFS), Greedy, and 1D Dynamic Programming.
- **Full In-App CRUD**: Add, rename, reorder, and delete at all levels with cascade warnings.
- **Task Operations**: Status cycling, drag-and-drop reordering, move across subjects/tracks, duplication, and rich task editing.
- **Deep Topic Inspector**: Click "Details" on any topic to inspect completion %, child task breakdown, and notes.

### ☀️ 3. Today's Focus View
- **Manually Curated Day**: The student decides what belongs to today.
- **Daily Goals Tracker**: Real-time progress bar for daily tasks (default: 3) and daily study hours (default: 2.5h).
- **Four Distinct Sections**:
  1. *Assigned for Today*: Pinned and planned items.
  2. *Spaced Revisions Due Today*: High-priority retention reviews.
  3. *Past Planned Date (Overdue)*: Non-punitive backlog with quick "Move to Today" or "Reschedule" options.
  4. *Completed Today*: Motivation log of items cleared today.
- **Searchable Syllabus Picker**: Click "Add Existing Task to Today" to instantly search your syllabus backlog and pull tasks into today's focus list.

### 🗓️ 4. Calendar Engine
- **Three Views**: Monthly calendar grid, weekly breakdown, and daily schedule.
- **HTML5 Drag-and-Drop**: Drag task chips from one date cell to another. The planned date updates instantly while completion status, notes, and XP remain untouched.
- **Accessibility Date Picker**: Click any task or "Move Date" button to pick a date via keyboard or standard date picker.

### 💼 5. Portfolio Projects Tracker
- **Dedicated Project Showcases**:
  - *Data Analytics*: LendX Finance, Customer Transaction SQL & ERD Architecture, Cartly E-Commerce Python EDA, 99Acres Real Estate Price Intelligence, Meta Ads Marketing ROI Dashboard, HR Workforce Attrition Dashboard, Shopkart Retail Sales & Cohort Intelligence.
  - *Data Science*: Customer Churn Prediction (flagship project with 14 editable milestone steps: Problem Definition, Cleaning, EDA, Feature Engineering, Baseline, Model Training, SMOTE, Hyperparameter Tuning, SHAP Interpretation, Business Recommendations, Streamlit App, GitHub Repo), Retail Sales Forecasting, Customer Segmentation Engine.
- **Milestone Checklists**: Interactive item checkboxes that award +25 XP per milestone and optionally feed into overall mastery progress.
- **Clean Action Link Buttons**: GitHub, Live Dashboard (Power BI / Streamlit), Jupyter Notebook, Dataset, and Presentation Deck links.

### 🎓 6. Fresher Recruitment & Exam Tracker
- **Preloaded Hiring Drives**:
  - TCS B.Sc Ignite & Smart Hiring
  - Wipro WILP (Work Integrated Learning Program) / WASE / WIMS
  - Cognizant GenC & Elevate
  - HCLTech Graduate Trainee Program
  - Accenture Associate & Fresher Assessment
  - AMCAT Employability Assessment
- **Field Support**: Eligibility criteria, syllabus breakdown, preparation status (Not Started, Preparing, Ready, Registered, Exam Completed), registration portal status, registration URL, official career portal URL, exam dates, and preparation notes.

### 🔁 7. Spaced Repetition (Revision System)
- **Scientific Retention Model**: Built around the Ebbinghaus forgetting curve with configurable intervals (default: 1, 3, 7, 14, 30 days).
- **Workload Queues**: Due Today, Overdue, Upcoming, and Completed Review Log.
- **Automated Iteration Scheduling**: When marking a review complete, the app automatically suggests scheduling the next interval in the sequence.

### 📊 8. In-Depth Analytics
- **Multi-Factor Transparent Productivity Score (0–100)**:
  - *Completed Knowledge* (up to 40 pts)
  - *Habit Consistency & Streak* (up to 25 pts)
  - *Focused Study Hours* (up to 20 pts)
  - *Spaced Revision Retention* (up to 15 pts)
- **Subject-Level Inspection Table**: Displays completed tasks, percentage, and logged hours for all subjects across all tracks.

### ⚙️ 9. Settings & Data Management
- **Appearance**: One-click toggle between Dark Mode and Light Mode.
- **Target & Roadmap Editor**: Customize the 1 Jan 2027 target date, milestone titles, and phase date ranges.
- **Goal Configuration**: Edit daily/weekly task and hour targets.
- **JSON Backup & Restore**: One-click download of all user data as `.json` and full backup restore.
- **Safe Reset Controls**: Scope-limited reset options (Reset Task, Reset Subject, Reset Track, Factory Reset) protected by confirmation modals.

---

## 3. Technology Stack

- **Markup**: HTML5 (semantic, accessible ARIA roles, modern modal structure)
- **Styling**: CSS3 (modular architecture, CSS custom properties for theming, CSS grid, flexbox, smooth transitions)
- **Scripting**: Vanilla JavaScript (ES6+ modular architecture, zero framework overhead, zero build step)
- **External CDN Libraries**:
  - [Chart.js v4.4](https://www.chartjs.org/) (responsive, canvas-based visualizations)
  - [Lucide Icons](https://lucide.dev/) (lightweight icon system)
  - [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (subtle celebration effects on milestone achievements)
- **Storage**: Browser-local `localStorage` with in-memory fallback for high-security environments.

---

## 4. File Structure

```text
/home/user/
│
├── index.html                  # Main application HTML structure and shell
│
├── css/
│   ├── styles.css              # Core design system, variables, card styles, dark/light themes
│   └── responsive.css          # Breakpoints for tablets, mobile drawers, and touch targets
│
├── js/
│   ├── data.js                 # 190+ preloaded syllabus tasks, 10 projects, 6 exams, badges
│   ├── utils.js                # Formatting, dates, day differences, IDs, sanitization, toasts
│   ├── storage.js              # Centralized localStorage manager, export/import JSON, resets
│   ├── state.js                # Central reactive store, mutations, queries, XP, streaks
│   ├── dashboard.js            # Command center view, KPI cards, Chart.js integrations
│   ├── checklist.js            # Hierarchy tree (Track -> Subject -> Topic -> Subtopic -> Task)
│   ├── today.js                # User-curated daily focus list, overdue handler, task picker
│   ├── calendar.js             # Monthly/Weekly/Daily views, HTML5 drag-and-drop between dates
│   ├── tracks.js               # Dedicated tracks view with subject progress breakdown cards
│   ├── projects.js             # Data Analytics & Data Science portfolio cards & checklists
│   ├── exams.js                # Fresher mass-hiring exam tracker & portal links
│   ├── revisions.js            # Spaced repetition queue (1d, 3d, 7d, 14d, 30d intervals)
│   ├── analytics.js            # Advanced charts, velocity curves, transparent productivity index
│   ├── gamification.js         # Level tiers, badges grid, non-punitive streak pause handler
│   ├── settings.js             # Theme switcher, target editor, goal configuration, backups
│   └── app.js                  # Router, global search (Ctrl+K), modal controller, bootstrap
│
├── generate_syllabus.py        # Python utility script used to regenerate or customize seed data
└── README.md                   # Complete architectural, deployment, and usage documentation
```

---

## 5. Local Setup Instructions

No Node.js compilation, npm installation, or database setup is required!

### Option A: Open directly in any Web Browser
1. Clone or download this project folder to your local machine.
2. Double-click `index.html` to open it in Chrome, Firefox, Edge, Safari, or Brave.
3. The application will immediately load and store data in that browser's `localStorage`.

### Option B: Run via a Local HTTP Server (Recommended)
Running through a lightweight local server ensures full support for local caching and service features:

**Using Python (pre-installed on macOS/Linux/Windows):**
```bash
# Navigate to the project folder
cd career-checklist

# Start server on port 3000
python3 -m http.server 3000 --bind 0.0.0.0
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Using Node.js npx:**
```bash
npx serve .
```

---

## 6. Beginner-Friendly Vercel Deployment Guide

Deploying this application to Vercel is instantaneous because it uses clean, zero-build static architecture.

### Method 1: Deploy via GitHub & Vercel Web Dashboard (Recommended)

1. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository (e.g. `career-mastery-checklist`).
   - Push your project files:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Career Preparation Checklist Web Application"
     git branch -M main
     git remote add origin https://github.com/<your-username>/career-mastery-checklist.git
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub.
   - Click the **"Add New..."** button and select **"Project"**.
   - Select your `career-mastery-checklist` repository from the list.

3. **Configure Settings (Zero Configuration)**:
   - **Framework Preset**: Select **"Other"** (or leave as Default).
   - **Build Command**: Leave empty / disabled.
   - **Output Directory**: Leave empty / `./` (Root).
   - Click **"Deploy"**.

4. **Live URL**:
   - Within 10 seconds, Vercel will provide a live production URL (e.g., `https://career-mastery-checklist.vercel.app`).
   - Open the URL in any browser or on your mobile device.

### Method 2: Deploy directly via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# In project root, run deploy
vercel

# For production deployment:
vercel --prod
```

### How Updates and Redeployments Work on Vercel:
- Whenever you push new commits to your GitHub `main` branch, Vercel automatically redeploys in seconds.
- **Your `localStorage` data remains 100% intact after redeployment!** Browser local storage is tied to the domain name (e.g., `your-app.vercel.app`), so updating HTML, CSS, or JS code will not wipe your study progress.

---

## 7. Data Persistence & Known Limitations

### How `localStorage` Works:
- Every task created, status change, date reschedule, project milestone checked, exam status updated, and study hour logged is immediately serialized and persisted to the browser's `localStorage` key `career_mastery_app_state_v1`.
- **Survives**: Page refreshes, closing browser tabs, browser restarts, computer reboots, and normal Vercel deployments.

### Critical Limitations to Understand:
1. **Per-Browser & Per-Device Storage**: Data is saved inside that specific browser on that specific machine. If you use the app on your laptop and then open the Vercel link on your mobile phone, the phone starts with clean initial seed data.
2. **Site Data Clearing**: If you run "Clear Browsing Data" or "Delete Cookies and Site Data" in your browser settings, `localStorage` will be cleared.
3. **Private / Incognito Windows**: Data created inside an Incognito tab is wiped by the browser when the private window is closed.

### Best Practice Recommendation:
- Go to **Settings → Data Persistence & Backup** and click **"Export JSON Backup"** once a week or after completing major milestones.
- Keep the `.json` file in your Google Drive or GitHub. You can restore your entire workspace on any device in 2 clicks.

---

## 8. Customizing the Preloaded Syllabus

Everything in this application is dynamic. You can customize the curriculum in two ways:

### 1. In-App Customization (No Code Required)
- Go to **Master Checklist**.
- Click **"Add Track"**, **"+ Subject"**, **"+ Topic"**, or **"Add Task"** to add custom content.
- Click the edit icon (`✎`) on any subject, topic, or task to rename it or adjust notes.
- Use the **Move** action to reorganize tasks across subjects.

### 2. Programmatic Seed Customization (`generate_syllabus.py`)
- If you want to customize the initial template before deploying for yourself or other students:
  1. Open `generate_syllabus.py` in your code editor.
  2. Add, remove, or modify task tuples, subjects, projects, or exam targets.
  3. Run:
     ```bash
     python3 generate_syllabus.py
     ```
  4. This updates `js/data.js` with your custom curriculum.
  5. Commit and push to deploy to Vercel!

---

## 9. Verification & Testing Checklist

The following test suite was verified:

| Test Case | Expected Behavior | Result |
|---|---|---|
| **Task Status Toggle** | Click checkbox cycles: Not Started → In Progress → Completed → Need Revision | ✅ Verified |
| **Non-Punitive Reschedule** | Moving task date preserves completed status and completion date | ✅ Verified |
| **Drag and Drop Calendar** | Dragging task chip to another date cell updates plannedDate without error | ✅ Verified |
| **Global Search (`Ctrl+K`)** | Searches across tasks, topics, projects, exams, and notes; clicking jumps to item | ✅ Verified |
| **Spaced Repetition** | Marking review completed awards XP and auto-suggests next spaced interval | ✅ Verified |
| **Milestone Checklists** | Project checklists award milestone XP and update progress bar in real time | ✅ Verified |
| **Streak Pausing** | Inactive days pause streak gracefully with 1-click restore without data loss | ✅ Verified |
| **Mobile Drawer** | Navigation collapses smoothly into off-canvas drawer on mobile screens | ✅ Verified |
| **Theme Switching** | Dark and Light modes toggle instantly and persist across reloads | ✅ Verified |
| **Data Backup / Restore** | JSON backup downloads valid JSON; import validates and restores state | ✅ Verified |
| **Edge Cases** | Parent deletion, empty tracks, missing dates, and URL sanitization handled cleanly | ✅ Verified |

---

*Built for ambitious B.Sc Data Science students conquering Data Analytics, Data Science, Fresher Drives, and Technical Coding assessments.*
