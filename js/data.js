/* Central Seed / Default State for Career Preparation Web Application */
window.INITIAL_APP_DATA = {
  "version": "1.0.0",
  "settings": {
    "targetDate": "2027-01-01",
    "targetTitle": "1 January 2027 Career Preparation Target",
    "phase1Title": "Phase 1: Foundation & Mastery",
    "phase1Dates": "Sep \u2013 Dec 2026",
    "phase2Title": "Phase 2: Assessments & DS Applications",
    "phase2Dates": "Jan \u2013 Mar 2027",
    "phase3Title": "Phase 3: Internships & Career Growth",
    "phase3Dates": "Apr 2027 Onwards",
    "theme": "dark",
    "dailyGoalTasks": 3,
    "dailyGoalHours": 2.5,
    "weeklyGoalTasks": 15,
    "weeklyGoalHours": 12,
    "includeProjectsInOverallProgress": true,
    "revisionIntervals": [
      1,
      3,
      7,
      14,
      30
    ],
    "streakCount": 5,
    "streakPaused": false,
    "lastActiveDate": "2026-09-20",
    "todayTaskIds": [
      "t_sql_4",
      "t_sql_7",
      "t_ex_4",
      "t_pya_5"
    ]
  },
  "gamification": {
    "xp": 950,
    "level": 3,
    "productivityScore": 82,
    "badges": [
      {
        "id": "b_first_step",
        "name": "First Step",
        "desc": "Completed your first career preparation task",
        "icon": "footprints",
        "unlocked": true,
        "unlockedAt": "2026-09-15"
      },
      {
        "id": "b_sql_starter",
        "name": "Query Initiator",
        "desc": "Mastered foundational SQL queries & aggregations",
        "icon": "database",
        "unlocked": true,
        "unlockedAt": "2026-09-17"
      },
      {
        "id": "b_consistency_5",
        "name": "5-Day Momentum",
        "desc": "Maintained an active learning streak for 5 days",
        "icon": "flame",
        "unlocked": true,
        "unlockedAt": "2026-09-20"
      },
      {
        "id": "b_project_builder",
        "name": "Project Builder",
        "desc": "Completed tasks in your portfolio projects",
        "icon": "folder-git-2",
        "unlocked": true,
        "unlockedAt": "2026-09-18"
      },
      {
        "id": "b_revision_habit",
        "name": "Retention Master",
        "desc": "Scheduled and reviewed spaced repetition items",
        "icon": "repeat",
        "unlocked": false
      },
      {
        "id": "b_dsa_foundation",
        "name": "Algorithm Apprentice",
        "desc": "Completed 10 DSA questions and algorithmic patterns",
        "icon": "code-2",
        "unlocked": false
      },
      {
        "id": "b_ml_practitioner",
        "name": "ML Practitioner",
        "desc": "Trained and evaluated core Machine Learning models",
        "icon": "brain-circuit",
        "unlocked": false
      },
      {
        "id": "b_exam_ready",
        "name": "Assessment Ready",
        "desc": "Cleared foundational Aptitude, Logic & CS subjects",
        "icon": "award",
        "unlocked": false
      }
    ],
    "history": [
      {
        "date": "2026-09-15",
        "tasksCompleted": 2,
        "hoursLogged": 2.0,
        "xpEarned": 100
      },
      {
        "date": "2026-09-16",
        "tasksCompleted": 4,
        "hoursLogged": 3.0,
        "xpEarned": 220
      },
      {
        "date": "2026-09-17",
        "tasksCompleted": 5,
        "hoursLogged": 3.5,
        "xpEarned": 270
      },
      {
        "date": "2026-09-18",
        "tasksCompleted": 6,
        "hoursLogged": 4.0,
        "xpEarned": 310
      },
      {
        "date": "2026-09-19",
        "tasksCompleted": 5,
        "hoursLogged": 3.5,
        "xpEarned": 260
      },
      {
        "date": "2026-09-20",
        "tasksCompleted": 1,
        "hoursLogged": 1.5,
        "xpEarned": 70
      }
    ]
  },
  "tracks": [
    {
      "id": "track_analytics",
      "name": "Data Analytics",
      "description": "SQL, Excel, Power BI, Python for Analytics, Statistics, Business Case Studies & Projects.",
      "color": "#3b82f6",
      "icon": "bar-chart-3",
      "order": 1,
      "subjects": [
        {
          "id": "da_sql",
          "name": "SQL",
          "description": "Relational database querying, joins, aggregations, window functions, and business queries.",
          "topics": [
            {
              "id": "top_sql_fund",
              "name": "SQL Fundamentals & Joins",
              "subtopics": [
                {
                  "id": "sub_sql_1",
                  "name": "Core Querying & Relational Joins",
                  "tasks": [
                    {
                      "id": "t_sql_1",
                      "name": "SQL Fundamentals & Relational Concepts",
                      "description": "Tables, columns, primary & foreign keys, relational integrity, DDL vs DML.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2.5,
                      "notes": "Mastered table schemas and constraints.",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Differentiate DDL, DML, DCL, and TCL.",
                      "revisionDate": "2026-09-23",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_2",
                      "name": "SELECT, WHERE, DISTINCT & LIMIT",
                      "description": "Column projection, conditional filtering, deduplication, row limiting.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain SELECT, WHERE, DISTINCT & LIMIT with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_3",
                      "name": "ORDER BY & Column Aliases",
                      "description": "Ascending/descending sorting, multi-column sorting, alias usage.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 1,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain ORDER BY & Column Aliases with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_4",
                      "name": "NULL Handling & COALESCE",
                      "description": "Three-valued logic (TRUE, FALSE, UNKNOWN), IS NULL, IS NOT NULL, COALESCE.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "COALESCE replaces nulls with fallback defaults.",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain NULL Handling & COALESCE with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_5",
                      "name": "Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)",
                      "description": "Summary metrics across rows, COUNT(*) vs COUNT(col).",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Aggregate Functions (SUM, COUNT, AVG, MIN, MAX) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_6",
                      "name": "GROUP BY & HAVING Clauses",
                      "description": "Grouping records, filter after aggregation using HAVING vs WHERE.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain GROUP BY & HAVING Clauses with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "2026-09-25",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_7",
                      "name": "CASE WHEN & Conditional Aggregation",
                      "description": "Conditional column transformation and pivoting count/sum via CASE WHEN.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain CASE WHEN & Conditional Aggregation with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_8",
                      "name": "INNER JOIN & LEFT JOIN",
                      "description": "Matching records, left outer preservation, identifying unlinked rows.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain INNER JOIN & LEFT JOIN with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_9",
                      "name": "RIGHT JOIN, FULL OUTER JOIN & CROSS JOIN",
                      "description": "Right tables, bi-directional outer joins, Cartesian products.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain RIGHT JOIN, FULL OUTER JOIN & CROSS JOIN with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_10",
                      "name": "SELF JOIN & Hierarchical Data",
                      "description": "Joining a table to itself: employee-manager hierarchies, sequential steps.",
                      "status": "Need Revision",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "Review ON e1.manager_id = e2.emp_id join conditions.",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain SELF JOIN & Hierarchical Data with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "2026-09-21",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_11",
                      "name": "Multiple-Table Joins & ERD Navigation",
                      "description": "Joining 3+ normalized tables, maintaining row integrity without unintended duplicates.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Multiple-Table Joins & ERD Navigation with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_sql_adv",
              "name": "Advanced SQL & Business Analytics",
              "subtopics": [
                {
                  "id": "sub_sql_2",
                  "name": "Subqueries, Window Functions & Retention",
                  "tasks": [
                    {
                      "id": "t_sql_12",
                      "name": "Scalar & In-List Subqueries",
                      "description": "Nested SELECT in WHERE/FROM/SELECT, IN, EXISTS.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Scalar & In-List Subqueries with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_13",
                      "name": "Correlated Subqueries & Performance",
                      "description": "Subqueries referencing outer query columns, evaluation per row.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Correlated Subqueries & Performance with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_14",
                      "name": "Common Table Expressions (WITH CTE & Recursive CTE)",
                      "description": "Modular query structuring, readability, recursive organizational hierarchies.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Common Table Expressions (WITH CTE & Recursive CTE) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_15",
                      "name": "ROW_NUMBER, RANK & DENSE_RANK",
                      "description": "Assigning rankings with PARTITION BY and ORDER BY, handling ties.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "Essential for top-N analysis per category.",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain ROW_NUMBER, RANK & DENSE_RANK with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_16",
                      "name": "LAG, LEAD & Offset Functions",
                      "description": "Comparing current row to previous/next row (MoM growth, churn gaps).",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain LAG, LEAD & Offset Functions with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_17",
                      "name": "Running Totals & Moving Averages",
                      "description": "Cumulative sums: SUM() OVER (PARTITION BY ... ORDER BY ... ROWS BETWEEN).",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Running Totals & Moving Averages with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_18",
                      "name": "Date & String Functions in SQL",
                      "description": "DATE_TRUNC, DATEDIFF, EXTRACT, CONCAT, SUBSTRING, TRIM, LIKE.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Date & String Functions in SQL with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_19",
                      "name": "Customer Retention & Churn Analysis in SQL",
                      "description": "Cohort retention tables, identifying active vs churned users over 30/60/90 days.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Customer Retention & Churn Analysis in SQL with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_20",
                      "name": "Sales, Revenue & RFM Segmentation in SQL",
                      "description": "Recency, Frequency, Monetary scoring via NTILE window functions.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Sales, Revenue & RFM Segmentation in SQL with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sql_21",
                      "name": "Query Optimization, Indexes & Transactions Basics",
                      "description": "EXPLAIN execution plan, B-tree indexes, ACID transactions, commit/rollback.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Query Optimization, Indexes & Transactions Basics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_excel",
          "name": "Excel",
          "description": "Spreadsheet mastery, advanced formulas, text & date functions, pivot tables, and dashboards.",
          "topics": [
            {
              "id": "top_ex_core",
              "name": "Formulas & Functions",
              "subtopics": [
                {
                  "id": "sub_ex_1",
                  "name": "Logical, Lookup & Text Functions",
                  "tasks": [
                    {
                      "id": "t_ex_1",
                      "name": "Spreadsheet Fundamentals & Data Cleaning",
                      "description": "Cell references (absolute $ vs relative), removing blank rows, trimming data.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Spreadsheet Fundamentals & Data Cleaning with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_2",
                      "name": "Logical Formulas (IF, IFS, AND, OR)",
                      "description": "Nested IF statements, multi-condition categorization.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Logical Formulas (IF, IFS, AND, OR) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_3",
                      "name": "Conditional Aggregations (SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIF)",
                      "description": "Calculating metrics based on single and multiple criteria.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Conditional Aggregations (SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIF) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_4",
                      "name": "Lookup Mastery: XLOOKUP & INDEX/MATCH",
                      "description": "Replacing VLOOKUP with robust two-way lookups and approximate matches.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Lookup Mastery: XLOOKUP & INDEX/MATCH with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_5",
                      "name": "Text Manipulation (LEFT, RIGHT, MID, TRIM, CLEAN, SUBSTITUTE)",
                      "description": "Parsing names, SKU codes, addresses, removing non-printable characters.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Text Manipulation (LEFT, RIGHT, MID, TRIM, CLEAN, SUBSTITUTE) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_6",
                      "name": "Date Functions (DATEDIF, EOMONTH, EDATE, YEAR, MONTH)",
                      "description": "Calculating age, tenure, fiscal quarters, end-of-month projections.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Date Functions (DATEDIF, EOMONTH, EDATE, YEAR, MONTH) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_7",
                      "name": "Sorting, Filtering & Conditional Formatting",
                      "description": "Drop-down lists, input restrictions, heatmaps, highlight rules.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Sorting, Filtering & Conditional Formatting with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_ex_bi",
              "name": "Pivots & Modern Excel",
              "subtopics": [
                {
                  "id": "sub_ex_2",
                  "name": "Pivot Dashboards & Power Query",
                  "tasks": [
                    {
                      "id": "t_ex_8",
                      "name": "Pivot Tables & Pivot Charts",
                      "description": "Summarizing sales data, calculated fields, grouped dates, drill-downs.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Pivot Tables & Pivot Charts with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_9",
                      "name": "Slicers & Interactive Dashboard Design",
                      "description": "Connecting multiple pivot charts to unified slicers, executive KPI summary.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Slicers & Interactive Dashboard Design with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ex_10",
                      "name": "Power Query Basics in Excel",
                      "description": "Extracting, transforming, unpivoting columns, appending monthly sheets.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Power Query Basics in Excel with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_powerbi",
          "name": "Power BI",
          "description": "ETL with Power Query, star schema modeling, DAX measures, and executive dashboards.",
          "topics": [
            {
              "id": "top_pbi_etl",
              "name": "Data Ingestion & Modeling",
              "subtopics": [
                {
                  "id": "sub_pbi_1",
                  "name": "Power Query & Star Schema",
                  "tasks": [
                    {
                      "id": "t_pbi_1",
                      "name": "Power BI Interface & Ingesting Data",
                      "description": "Connecting to CSV, Excel, SQL database; interface navigation.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Power BI Interface & Ingesting Data with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_2",
                      "name": "Power Query: Cleaning, Transformation, Merge & Append",
                      "description": "Data types, split columns, unpivot, merging and appending tables.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Power Query: Cleaning, Transformation, Merge & Append with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_3",
                      "name": "Star Schema, Fact & Dimension Tables",
                      "description": "One-to-many relationships, cardinality, active vs inactive relationships.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Star Schema, Fact & Dimension Tables with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_4",
                      "name": "Filter Propagation Direction & Date Tables",
                      "description": "Cross-filter direction, dedicated calendar tables with DAX CALENDARAUTO.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Filter Propagation Direction & Date Tables with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_pbi_dax",
              "name": "DAX & Dashboard Design",
              "subtopics": [
                {
                  "id": "sub_pbi_2",
                  "name": "Time Intelligence & Storytelling",
                  "tasks": [
                    {
                      "id": "t_pbi_5",
                      "name": "Calculated Columns vs Measures",
                      "description": "Row context vs filter context, memory impact, best practices.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Calculated Columns vs Measures with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_6",
                      "name": "Core DAX: SUM, COUNT, DISTINCTCOUNT, DIVIDE",
                      "description": "Safe divisions, handling blank values, basic summaries.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Core DAX: SUM, COUNT, DISTINCTCOUNT, DIVIDE with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_7",
                      "name": "CALCULATE, FILTER, ALL & ALLEXCEPT",
                      "description": "Context transition, overriding filters, calculating % of total.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain CALCULATE, FILTER, ALL & ALLEXCEPT with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_8",
                      "name": "Time Intelligence DAX (YoY, MoM, Rolling Averages)",
                      "description": "SAMEPERIODLASTYEAR, DATEADD, DATESYTD, 30-day moving sales.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Time Intelligence DAX (YoY, MoM, Rolling Averages) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_9",
                      "name": "Interactive Visuals, Tooltips & Drillthrough",
                      "description": "Card KPIs, matrix tables, custom tooltips, page-level drill-through.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Interactive Visuals, Tooltips & Drillthrough with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pbi_10",
                      "name": "Business Storytelling & Executive Dashboard Design",
                      "description": "Visual hierarchy, framing actionable insights for leadership.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Business Storytelling & Executive Dashboard Design with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_python",
          "name": "Python for Analytics",
          "description": "Python fundamentals, NumPy arrays, Pandas DataFrames, and Matplotlib/Seaborn visualization.",
          "topics": [
            {
              "id": "top_pya_core",
              "name": "Language Foundations",
              "subtopics": [
                {
                  "id": "sub_pya_1",
                  "name": "Variables, Data Structures & Functions",
                  "tasks": [
                    {
                      "id": "t_pya_1",
                      "name": "Python Variables, Types & Control Flow",
                      "description": "Int, float, str, bool, if-elif-else, while and for loops.",
                      "status": "Completed",
                      "plannedDate": "2026-09-15",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Python Variables, Types & Control Flow with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-15",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_2",
                      "name": "Lists, Tuples, Sets & Dictionaries",
                      "description": "Indexing, slicing, key-value mappings, set operations, comprehensions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Lists, Tuples, Sets & Dictionaries with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_3",
                      "name": "Functions, Lambdas & Exception Handling",
                      "description": "Def, args/kwargs, return, inline lambdas, try-except-finally blocks.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Functions, Lambdas & Exception Handling with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_4",
                      "name": "NumPy Arrays, Indexing, Slicing & Vectorization",
                      "description": "1D/2D arrays, mathematical operations, boolean masking.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain NumPy Arrays, Indexing, Slicing & Vectorization with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_pya_data",
              "name": "Pandas & Visualization",
              "subtopics": [
                {
                  "id": "sub_pya_2",
                  "name": "Wrangling, EDA & Matplotlib/Seaborn",
                  "tasks": [
                    {
                      "id": "t_pya_5",
                      "name": "Pandas Series & DataFrames Inspection",
                      "description": "Head, info, describe, dtypes, shape, missing values check.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Pandas Series & DataFrames Inspection with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_6",
                      "name": "Pandas Filtering, Sorting & GroupBy Aggregations",
                      "description": "Loc/iloc, conditional selection, groupby with .agg(['mean', 'count']).",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Pandas Filtering, Sorting & GroupBy Aggregations with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_7",
                      "name": "Merge, Concat, Pivot & Melt in Pandas",
                      "description": "Combining DataFrames, restructuring wide to long formats.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Merge, Concat, Pivot & Melt in Pandas with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_8",
                      "name": "Handling Datetime, Missing Values & Duplicates",
                      "description": "pd.to_datetime, dt accessor, fillna, dropna, imputation strategies.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Handling Datetime, Missing Values & Duplicates with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_9",
                      "name": "Matplotlib & Seaborn Visualizations",
                      "description": "Bar charts, histograms, box plots, scatter plots, correlation heatmaps.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Matplotlib & Seaborn Visualizations with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_pya_10",
                      "name": "End-to-End Business EDA Walkthrough",
                      "description": "Formulating hypotheses, detecting anomalies, summarizing findings in Jupyter.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain End-to-End Business EDA Walkthrough with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_stats",
          "name": "Statistics",
          "description": "Descriptive statistics, distributions, hypothesis testing, ANOVA, and A/B testing.",
          "topics": [
            {
              "id": "top_sta_desc",
              "name": "Descriptive & Distributions",
              "subtopics": [
                {
                  "id": "sub_sta_1",
                  "name": "Summary Metrics & Probability",
                  "tasks": [
                    {
                      "id": "t_sta_1",
                      "name": "Measures of Central Tendency & Dispersion",
                      "description": "Mean, median, mode, range, variance, standard deviation, quartiles, IQR.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Measures of Central Tendency & Dispersion with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_2",
                      "name": "Probability Rules & Bayes Theorem",
                      "description": "Conditional probability, independence, prior and posterior probabilities.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Probability Rules & Bayes Theorem with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_3",
                      "name": "Distributions: Normal, Binomial, Poisson & Uniform",
                      "description": "Bell curves, 68-95-99.7 empirical rule, discrete vs continuous.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Distributions: Normal, Binomial, Poisson & Uniform with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_sta_inf",
              "name": "Inferential & Experiments",
              "subtopics": [
                {
                  "id": "sub_sta_2",
                  "name": "Hypothesis Tests & A/B Testing",
                  "tasks": [
                    {
                      "id": "t_sta_4",
                      "name": "Sampling & Central Limit Theorem",
                      "description": "Standard error, population vs sample, confidence intervals.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Sampling & Central Limit Theorem with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_5",
                      "name": "Hypothesis Testing: Null/Alt, P-Values & Errors",
                      "description": "Significance level (alpha), p-value interpretation, Type I vs Type II errors.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Hypothesis Testing: Null/Alt, P-Values & Errors with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_6",
                      "name": "T-tests, Chi-Square & ANOVA",
                      "description": "One-sample/two-sample t-test, categorical independence, variance comparison.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain T-tests, Chi-Square & ANOVA with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_7",
                      "name": "Correlation, Covariance & Regression Intuition",
                      "description": "Pearson vs Spearman, correlation vs causation, line of best fit.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Correlation, Covariance & Regression Intuition with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_sta_8",
                      "name": "A/B Testing Framework for Analytics",
                      "description": "Sample size determination, test duration, metric lift, statistical power.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain A/B Testing Framework for Analytics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_biz",
          "name": "Business Analytics",
          "description": "Business framing, KPIs, revenue analysis, churn, and executive presentations.",
          "topics": [
            {
              "id": "top_biz_core",
              "name": "Business Problem Solving",
              "subtopics": [
                {
                  "id": "sub_biz_1",
                  "name": "Metrics, Retention & Cohort Analysis",
                  "tasks": [
                    {
                      "id": "t_ba_1",
                      "name": "Defining Business Problems & KPI Trees",
                      "description": "Translating executive questions into measurable data metrics (CAC, LTV, ARR).",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Defining Business Problems & KPI Trees with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ba_2",
                      "name": "Revenue, Profitability & Margin Analysis",
                      "description": "Gross margin, net margin, contribution margin, COGS breakdown.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Revenue, Profitability & Margin Analysis with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ba_3",
                      "name": "Customer Segmentation & RFM Analysis",
                      "description": "Recency, frequency, monetary value segment mapping.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Customer Segmentation & RFM Analysis with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ba_4",
                      "name": "Retention, Churn & Funnel Drop-off Analysis",
                      "description": "Top-of-funnel conversion, drop-off bottlenecks, cohort retention curves.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Retention, Churn & Funnel Drop-off Analysis with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ba_5",
                      "name": "Marketing, Product & Operational Analytics",
                      "description": "Channel attribution, feature adoption rate, SLA tracking.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Marketing, Product & Operational Analytics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ba_6",
                      "name": "Communicating Insights & Executive Storytelling",
                      "description": "Structuring presentations (SCQA framework), actionable recommendations.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Communicating Insights & Executive Storytelling with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "da_interview",
          "name": "Interview Preparation",
          "description": "Technical questions, case studies, and behavioral interview defense for Analyst roles.",
          "topics": [
            {
              "id": "top_dai_core",
              "name": "Analyst Interview Readiness",
              "subtopics": [
                {
                  "id": "sub_dai_1",
                  "name": "SQL, BI, Python & Case Studies",
                  "tasks": [
                    {
                      "id": "t_dai_1",
                      "name": "SQL Technical Interview Questions (Top 30)",
                      "description": "Live coding Joins, Window Functions, aggregation edge cases.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain SQL Technical Interview Questions (Top 30) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dai_2",
                      "name": "Excel & Power BI Technical Interview Qs",
                      "description": "DAX evaluation order, XLOOKUP vs INDEX/MATCH, relationship issues.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Excel & Power BI Technical Interview Qs with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dai_3",
                      "name": "Python Analytics Technical Interview Qs",
                      "description": "Pandas performance, missing data handling, vectorized logic.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Python Analytics Technical Interview Qs with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dai_4",
                      "name": "Statistics & Business Case Study Questions",
                      "description": "Why did revenue drop 15% last week? Root cause analysis framework.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Statistics & Business Case Study Questions with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dai_5",
                      "name": "Behavioral Interview Prep & Project Defense",
                      "description": "STAR method: Situation, Task, Action, Result for portfolio projects.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-30",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Behavioral Interview Prep & Project Defense with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "track_datascience",
      "name": "Data Science",
      "description": "Python, NumPy, Pandas, Statistics, Probability, EDA, Machine Learning & Portfolio Projects.",
      "color": "#10b981",
      "icon": "brain-circuit",
      "order": 2,
      "subjects": [
        {
          "id": "ds_python",
          "name": "Python",
          "description": "Advanced Python, OOP, clean code, virtual environments, and modules.",
          "topics": [
            {
              "id": "top_dspy",
              "name": "Advanced Python & Software Engineering",
              "subtopics": [
                {
                  "id": "sub_dspy",
                  "name": "OOP, Generators, Clean Code",
                  "tasks": [
                    {
                      "id": "t_dspy_1",
                      "name": "OOP in Python: Classes, Objects, Dunder Methods",
                      "description": "Encapsulation, inheritance, __init__, __str__, __repr__.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain OOP in Python: Classes, Objects, Dunder Methods with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dspy_2",
                      "name": "Comprehensions, Generators & Iterators",
                      "description": "Memory-efficient data pipelines using yield and generator expressions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Comprehensions, Generators & Iterators with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dspy_3",
                      "name": "Modules, Packages & Virtual Environments",
                      "description": "venv, pip, requirements.txt, structuring clean reusable packages.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Modules, Packages & Virtual Environments with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dspy_4",
                      "name": "Clean Code Basics & Exception Handling",
                      "description": "PEP8, type hinting, custom exceptions, docstrings.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Clean Code Basics & Exception Handling with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_numpy_pandas",
          "name": "NumPy & Pandas",
          "description": "Vectorized computing, reshaping, broadcasting, and advanced DataFrame operations.",
          "topics": [
            {
              "id": "top_ds_wrangling",
              "name": "Vectorized Data Wrangling",
              "subtopics": [
                {
                  "id": "sub_ds_np_pd",
                  "name": "Arrays, GroupBy & Missing Values",
                  "tasks": [
                    {
                      "id": "t_ds_np_1",
                      "name": "NumPy Dimensions, Slicing & Reshaping",
                      "description": "Array shapes, flatten vs ravel, transpositions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain NumPy Dimensions, Slicing & Reshaping with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_np_2",
                      "name": "Broadcasting & Vectorized Mathematical Operations",
                      "description": "Broadcasting rules, matrix multiplication (dot, @), universal functions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Broadcasting & Vectorized Mathematical Operations with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_pd_1",
                      "name": "Pandas DataFrames: Selection, Filtering & Transformations",
                      "description": "loc vs iloc, boolean conditions, query method.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Pandas DataFrames: Selection, Filtering & Transformations with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_pd_2",
                      "name": "Advanced GroupBy, Aggregations & Pivot Tables",
                      "description": "Multiple groupings, custom apply functions, pivot vs melt.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Advanced GroupBy, Aggregations & Pivot Tables with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_pd_3",
                      "name": "Missing Value Diagnostics & Efficient Operations",
                      "description": "Categorical dtypes, memory optimization, chunk processing.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Missing Value Diagnostics & Efficient Operations with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_stats_prob",
          "name": "Statistics & Probability",
          "description": "Mathematical foundations: random variables, Bayes theorem, distributions, and hypothesis tests.",
          "topics": [
            {
              "id": "top_ds_statprob",
              "name": "Mathematical Foundations",
              "subtopics": [
                {
                  "id": "sub_ds_sp",
                  "name": "Expectation, Distributions & Testing",
                  "tasks": [
                    {
                      "id": "t_ds_st_1",
                      "name": "Random Variables, Expectation & Variance",
                      "description": "Discrete and continuous random variables, covariance matrix.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Random Variables, Expectation & Variance with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_st_2",
                      "name": "Distributions: Normal, Binomial, Poisson & Exponential",
                      "description": "PDF, CDF, central limit theorem intuition and proof.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Distributions: Normal, Binomial, Poisson & Exponential with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_st_3",
                      "name": "Bayes' Theorem & Prior/Posterior Reasoning",
                      "description": "Likelihood, evidence, posterior odds in ML algorithms.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Bayes' Theorem & Prior/Posterior Reasoning with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_st_4",
                      "name": "Hypothesis Testing, P-Values, T-tests & ANOVA",
                      "description": "Null hypothesis testing, Type I/II error balance in model validation.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Hypothesis Testing, P-Values, T-tests & ANOVA with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_eda",
          "name": "EDA",
          "description": "Exploratory data analysis, distributions, outlier detection, and correlation analysis.",
          "topics": [
            {
              "id": "top_ds_eda",
              "name": "EDA Framework",
              "subtopics": [
                {
                  "id": "sub_ds_eda",
                  "name": "Diagnostics, Outliers & Feature Trends",
                  "tasks": [
                    {
                      "id": "t_ds_eda_1",
                      "name": "Data Understanding & Missing Value Profiling",
                      "description": "MCAR vs MAR vs MNAR, missingness heatmaps.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Data Understanding & Missing Value Profiling with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_eda_2",
                      "name": "Outlier Detection & Treatment",
                      "description": "Z-score method, IQR fencing, capping vs removal.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Outlier Detection & Treatment with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_eda_3",
                      "name": "Univariate, Bivariate & Multivariate Analysis",
                      "description": "Histograms, pairplots, scatter matrices, hue breakdowns.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Univariate, Bivariate & Multivariate Analysis with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_eda_4",
                      "name": "Correlation & Feature Interaction Diagnostics",
                      "description": "Multicollinearity, VIF (Variance Inflation Factor), non-linear trends.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Correlation & Feature Interaction Diagnostics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_ml",
          "name": "Machine Learning",
          "description": "Supervised regression, classification, unsupervised clustering, PCA, and validation.",
          "topics": [
            {
              "id": "top_ds_ml_regclf",
              "name": "Supervised ML",
              "subtopics": [
                {
                  "id": "sub_ds_ml_1",
                  "name": "Regression & Classification Algorithms",
                  "tasks": [
                    {
                      "id": "t_ds_ml_1",
                      "name": "Linear & Multiple Linear Regression",
                      "description": "Ordinary Least Squares (OLS), coefficients, assumptions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Linear & Multiple Linear Regression with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_2",
                      "name": "Regularized Regression: Ridge (L2) & Lasso (L1)",
                      "description": "Penalty terms, preventing overfitting, feature selection via Lasso.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Regularized Regression: Ridge (L2) & Lasso (L1) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_3",
                      "name": "Logistic Regression & Odds Ratio",
                      "description": "Sigmoid function, log-loss, decision boundaries, probability outputs.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Logistic Regression & Odds Ratio with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_4",
                      "name": "K-Nearest Neighbors (KNN)",
                      "description": "Distance metrics (Euclidean, Manhattan), curse of dimensionality.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain K-Nearest Neighbors (KNN) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_5",
                      "name": "Decision Trees & Splitting Criteria",
                      "description": "Gini impurity, Entropy, Information Gain, pruning strategies.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Decision Trees & Splitting Criteria with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_6",
                      "name": "Random Forest & Bagging Ensembles",
                      "description": "Bootstrapping, feature sub-sampling, out-of-bag error.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Random Forest & Bagging Ensembles with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_7",
                      "name": "Naive Bayes Classifier",
                      "description": "Conditional independence assumption, Gaussian vs Multinomial NB.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Naive Bayes Classifier with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_8",
                      "name": "Gradient Boosting & XGBoost Basics",
                      "description": "Sequential error correction, learning rate, tree depth.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 3.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Gradient Boosting & XGBoost Basics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_ds_ml_unsup",
              "name": "Unsupervised ML & Validation",
              "subtopics": [
                {
                  "id": "sub_ds_ml_2",
                  "name": "Clustering, PCA & Bias-Variance",
                  "tasks": [
                    {
                      "id": "t_ds_ml_9",
                      "name": "K-Means Clustering & Elbow Method",
                      "description": "Centroid updates, inertia, silhouette score evaluation.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain K-Means Clustering & Elbow Method with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_10",
                      "name": "Hierarchical Clustering & DBSCAN",
                      "description": "Dendrograms, density-based clustering, noise handling.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Hierarchical Clustering & DBSCAN with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_11",
                      "name": "PCA (Principal Component Analysis)",
                      "description": "Eigenvectors, eigenvalues, explained variance ratio.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain PCA (Principal Component Analysis) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ml_12",
                      "name": "Bias-Variance Tradeoff & Overfitting Prevention",
                      "description": "Validation curves, train/test split, cross-validation.",
                      "status": "Need Revision",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "High bias = underfitting; high variance = overfitting.",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Bias-Variance Tradeoff & Overfitting Prevention with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "2026-09-21",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_fe_eval",
          "name": "Feature Engineering & Model Evaluation",
          "description": "Encoding, scaling, transformations, pipelines, ROC-AUC, F1, and cross-validation.",
          "topics": [
            {
              "id": "top_ds_fe",
              "name": "Feature Pipelines",
              "subtopics": [
                {
                  "id": "sub_ds_fe",
                  "name": "Encoding, Scaling & Pipelines",
                  "tasks": [
                    {
                      "id": "t_ds_fe_1",
                      "name": "Categorical Encoding (One-Hot, Ordinal, Target)",
                      "description": "Handling high cardinality, target encoding without data leakage.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Categorical Encoding (One-Hot, Ordinal, Target) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_fe_2",
                      "name": "Feature Scaling: StandardScaler vs MinMaxScaler",
                      "description": "Distance-based vs tree-based algorithm sensitivity.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Feature Scaling: StandardScaler vs MinMaxScaler with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_fe_3",
                      "name": "Temporal, Interaction & Aggregated Features",
                      "description": "Extracting day-of-week, ratios, rolling statistics.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Temporal, Interaction & Aggregated Features with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_fe_4",
                      "name": "Scikit-Learn Pipelines & ColumnTransformers",
                      "description": "Bundling preprocessing and modeling without test set contamination.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Scikit-Learn Pipelines & ColumnTransformers with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            },
            {
              "id": "top_ds_ev",
              "name": "Evaluation Metrics",
              "subtopics": [
                {
                  "id": "sub_ds_ev",
                  "name": "Metrics, Curves & Validation",
                  "tasks": [
                    {
                      "id": "t_ds_ev_1",
                      "name": "Regression Metrics: MAE, MSE, RMSE, R\u00b2",
                      "description": "Penalizing large errors, interpretation against business baseline.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Regression Metrics: MAE, MSE, RMSE, R\u00b2 with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ev_2",
                      "name": "Classification: Confusion Matrix, Precision, Recall, F1",
                      "description": "Cost of False Positives vs False Negatives in real deployments.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Classification: Confusion Matrix, Precision, Recall, F1 with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ev_3",
                      "name": "ROC-AUC & Precision-Recall Curve",
                      "description": "Threshold-independent evaluation, imbalanced dataset dynamics.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-30",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain ROC-AUC & Precision-Recall Curve with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_ev_4",
                      "name": "K-Fold & Stratified K-Fold Cross-Validation",
                      "description": "Stable validation splits, avoiding optimistic bias.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-01",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain K-Fold & Stratified K-Fold Cross-Validation with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_adv_ml",
          "name": "Advanced ML & Production",
          "description": "Boosting (XGBoost, LightGBM), SHAP interpretability, SMOTE, and production considerations.",
          "topics": [
            {
              "id": "top_ds_adv",
              "name": "Production ML & Interpretability",
              "subtopics": [
                {
                  "id": "sub_ds_adv",
                  "name": "Ensembles, SHAP & Imbalance",
                  "tasks": [
                    {
                      "id": "t_ds_adv_1",
                      "name": "LightGBM & CatBoost Architecture Awareness",
                      "description": "Leaf-wise vs depth-wise splitting, categorical feature support.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-02",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain LightGBM & CatBoost Architecture Awareness with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_adv_2",
                      "name": "Imbalanced Data: Class Weights & SMOTE",
                      "description": "Synthetic minority oversampling, threshold adjustment.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-03",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Imbalanced Data: Class Weights & SMOTE with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_adv_3",
                      "name": "Model Interpretability: Feature Importance & SHAP",
                      "description": "Global vs local explanations, Shapley values intuition.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-04",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Model Interpretability: Feature Importance & SHAP with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_ds_adv_4",
                      "name": "Production ML Considerations & Data Leakage",
                      "description": "Model serialization (joblib/pickle), concept drift, serving APIs.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-05",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Production ML Considerations & Data Leakage with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "ds_interview",
          "name": "Interview Preparation",
          "description": "ML algorithm deep-dives, probability questions, and end-to-end case studies.",
          "topics": [
            {
              "id": "top_dsi",
              "name": "Data Science Interviews",
              "subtopics": [
                {
                  "id": "sub_dsi",
                  "name": "Theory, Algorithms & Case Studies",
                  "tasks": [
                    {
                      "id": "t_dsi_1",
                      "name": "ML Algorithms Deep Dive: Under the Hood",
                      "description": "Deriving gradient descent, tree split mechanics, logistic loss.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-06",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain ML Algorithms Deep Dive: Under the Hood with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsi_2",
                      "name": "Probability & Statistics Interview Questions",
                      "description": "A/B test sample size calculation, coin flip puzzles, CLT.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-07",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Probability & Statistics Interview Questions with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsi_3",
                      "name": "End-to-End Machine Learning Case Studies",
                      "description": "Design a recommendation system, churn model, or fraud detector.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-08",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain End-to-End Machine Learning Case Studies with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsi_4",
                      "name": "Behavioral & Portfolio Project Defense",
                      "description": "Explaining ML project trade-offs, metrics chosen, and business ROI.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-09",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Behavioral & Portfolio Project Defense with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "track_masshiring",
      "name": "Mass Hiring Exams",
      "description": "Aptitude, Reasoning, Verbal, Programming MCQs, DBMS, OOP, OS, Networks & HR Preparation.",
      "color": "#f59e0b",
      "icon": "award",
      "order": 3,
      "subjects": [
        {
          "id": "mh_quant",
          "name": "Quantitative Aptitude",
          "description": "Number systems, percentages, ratios, profit/loss, time & work, geometry, and DI.",
          "topics": [
            {
              "id": "top_mh_qa",
              "name": "Aptitude Foundations",
              "subtopics": [
                {
                  "id": "sub_mh_qa",
                  "name": "Arithmetic, Algebra & Modern Math",
                  "tasks": [
                    {
                      "id": "t_qa_1",
                      "name": "Number System, HCF & LCM",
                      "description": "Divisibility rules, unit digits, remainders, factorials.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Number System, HCF & LCM with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_2",
                      "name": "Percentages, Ratio & Proportion, Averages",
                      "description": "Base changes, successive % change, mixtures, weighted averages.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Percentages, Ratio & Proportion, Averages with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_3",
                      "name": "Profit, Loss & Discount",
                      "description": "Cost price, marked price, successive discounts, dishonest dealer.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Profit, Loss & Discount with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_4",
                      "name": "Simple Interest & Compound Interest",
                      "description": "Annual/semi-annual compounding, difference between CI and SI.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Simple Interest & Compound Interest with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_5",
                      "name": "Time and Work, Pipes & Cisterns",
                      "description": "Efficiency method, alternate working days, negative work.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-21",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Time and Work, Pipes & Cisterns with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_6",
                      "name": "Time, Speed & Distance, Trains & Boats",
                      "description": "Relative speed, upstream/downstream, circular tracks.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Time, Speed & Distance, Trains & Boats with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_7",
                      "name": "Algebra, Equations & Series",
                      "description": "Linear/quadratic equations, AP, GP, algebraic identities.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Algebra, Equations & Series with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_8",
                      "name": "Permutation, Combination & Probability",
                      "description": "Selections, arrangements with constraints, dice/cards problems.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Permutation, Combination & Probability with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_9",
                      "name": "Geometry, Mensuration & Mixtures",
                      "description": "2D/3D area and volume, alligation cross method.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Geometry, Mensuration & Mixtures with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_qa_10",
                      "name": "Data Interpretation (Tables, Bar, Line & Pie Charts)",
                      "description": "Fast percentage calculations, index numbers, ratio analysis.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Data Interpretation (Tables, Bar, Line & Pie Charts) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "mh_reasoning",
          "name": "Logical Reasoning",
          "description": "Series, coding-decoding, blood relations, syllogisms, and seating arrangements.",
          "topics": [
            {
              "id": "top_mh_lr",
              "name": "Logical & Analytical Reasoning",
              "subtopics": [
                {
                  "id": "sub_mh_lr",
                  "name": "Deductive, Verbal & Analytical Reasoning",
                  "tasks": [
                    {
                      "id": "t_lr_1",
                      "name": "Number & Letter Series, Coding-Decoding",
                      "description": "Pattern detection, shift ciphers, alphabet positions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Number & Letter Series, Coding-Decoding with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_2",
                      "name": "Blood Relations & Direction Sense",
                      "description": "Family trees, coded relations, distance and angle tracking.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Blood Relations & Direction Sense with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_3",
                      "name": "Analogy & Classification",
                      "description": "Word relationships, odd-one-out, symbolic categorization.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Analogy & Classification with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_4",
                      "name": "Syllogisms & Statement-Conclusion",
                      "description": "Venn diagram method, affirmative vs negative conclusions.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Syllogisms & Statement-Conclusion with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_5",
                      "name": "Data Sufficiency & Decision Tables",
                      "description": "Checking if statements 1 or 2 suffice, condition matrices.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Data Sufficiency & Decision Tables with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_6",
                      "name": "Seating Arrangement: Linear & Circular",
                      "description": "Facing center vs outward, complex conditions.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Seating Arrangement: Linear & Circular with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_lr_7",
                      "name": "Puzzles & Pattern Recognition",
                      "description": "Grid solving, attribute matching, non-verbal matrices.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Puzzles & Pattern Recognition with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "mh_verbal",
          "name": "Verbal Ability",
          "description": "Reading comprehension, vocabulary, grammar rules, error spotting, and para jumbles.",
          "topics": [
            {
              "id": "top_mh_va",
              "name": "Verbal English Ability",
              "subtopics": [
                {
                  "id": "sub_mh_va",
                  "name": "Grammar, Vocabulary & Comprehension",
                  "tasks": [
                    {
                      "id": "t_va_1",
                      "name": "Reading Comprehension Strategies",
                      "description": "Skimming, finding tone, central idea, inference questions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Reading Comprehension Strategies with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_va_2",
                      "name": "Grammar Rules: Subject-Verb Agreement, Tenses, Articles",
                      "description": "Singular/plural traps, conditional tenses, definite articles.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Grammar Rules: Subject-Verb Agreement, Tenses, Articles with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_va_3",
                      "name": "Prepositions, Conjunctions & Active/Passive Voice",
                      "description": "Appropriate prepositions, voice conversion rules.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Prepositions, Conjunctions & Active/Passive Voice with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_va_4",
                      "name": "Vocabulary, Synonyms, Antonyms & Error Detection",
                      "description": "High-frequency exam words, identifying grammatical flaws.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Vocabulary, Synonyms, Antonyms & Error Detection with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_va_5",
                      "name": "Sentence Correction, Fill in the Blanks & Para Jumbles",
                      "description": "Mandatory pairs, pronoun antecedents, contextual fit.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Sentence Correction, Fill in the Blanks & Para Jumbles with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "mh_prog_sql",
          "name": "Programming & SQL",
          "description": "Syntax fundamentals, loops, arrays, strings, basic algorithms, and assessment SQL.",
          "topics": [
            {
              "id": "top_mh_code",
              "name": "Assessment Coding & SQL",
              "subtopics": [
                {
                  "id": "sub_mh_code",
                  "name": "Control Flow, Arrays & Relational Queries",
                  "tasks": [
                    {
                      "id": "t_mp_1",
                      "name": "Programming Fundamentals & Common Coding Patterns",
                      "description": "Variables, nested loops, conditional logic in Python/C++.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Programming Fundamentals & Common Coding Patterns with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_mp_2",
                      "name": "Array & String Manipulation for MCQ/Coding Rounds",
                      "description": "Reverse string, count vowels, find duplicates, check anagram.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Array & String Manipulation for MCQ/Coding Rounds with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_mp_3",
                      "name": "Basic Algorithms: Searching & Sorting MCQs",
                      "description": "Linear/binary search passes, bubble/insertion sort swaps.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Basic Algorithms: Searching & Sorting MCQs with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_mp_4",
                      "name": "Python Basics vs C/C++/Java Awareness",
                      "description": "Pointers, memory management, garbage collection, compile vs interpret.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Python Basics vs C/C++/Java Awareness with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_msq_1",
                      "name": "SQL Fundamentals, CRUD & Filtering for Assessments",
                      "description": "SELECT, INSERT, UPDATE, DELETE, WHERE conditions.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain SQL Fundamentals, CRUD & Filtering for Assessments with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_msq_2",
                      "name": "Aggregation, GROUP BY, HAVING & Joins",
                      "description": "Standard assessment queries: 2nd highest salary, unlinked records.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Aggregation, GROUP BY, HAVING & Joins with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_msq_3",
                      "name": "Subqueries, Constraints & Keys",
                      "description": "Primary, foreign, unique, check constraints, subquery MCQs.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Subqueries, Constraints & Keys with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "mh_cs_core",
          "name": "Computer Science Core",
          "description": "DBMS, Normalization, OOP 4 pillars, OS processes, Networks, Cloud, and Communication.",
          "topics": [
            {
              "id": "top_mh_cs",
              "name": "Core Computer Science & HR",
              "subtopics": [
                {
                  "id": "sub_mh_cs",
                  "name": "OS, Networks, Cloud & Professional Communication",
                  "tasks": [
                    {
                      "id": "t_cs_1",
                      "name": "DBMS: Keys, Normalization (1NF-3NF) & ACID",
                      "description": "Primary/foreign keys, BCNF, Atomicity, Consistency, Isolation, Durability.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 2.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain DBMS: Keys, Normalization (1NF-3NF) & ACID with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_2",
                      "name": "ER Diagrams, Relationships & SQL vs NoSQL",
                      "description": "1:1, 1:N, M:N relationships, document vs relational stores.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain ER Diagrams, Relationships & SQL vs NoSQL with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_3",
                      "name": "OOP: Encapsulation, Abstraction, Inheritance & Polymorphism",
                      "description": "Overloading vs overriding, abstract classes, interfaces, constructors.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain OOP: Encapsulation, Abstraction, Inheritance & Polymorphism with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_4",
                      "name": "Data Structures Fundamentals for MCQs",
                      "description": "Arrays, linked lists, stacks, queues, binary trees, hash tables.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Data Structures Fundamentals for MCQs with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_5",
                      "name": "Operating Systems: Processes, Threads, Scheduling & Deadlocks",
                      "description": "Process states, scheduling (SJF, Round Robin), Coffman conditions, paging.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Operating Systems: Processes, Threads, Scheduling & Deadlocks with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_6",
                      "name": "Computer Networks: OSI Model, TCP/IP, DNS & HTTP/HTTPS",
                      "description": "Layer duties, 3-way handshake, TCP vs UDP, status codes.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Computer Networks: OSI Model, TCP/IP, DNS & HTTP/HTTPS with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_7",
                      "name": "Computer Fundamentals, SDLC, Git & GitHub",
                      "description": "Hardware/software, Agile sprint lifecycle, Git commit/push/branch.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Computer Fundamentals, SDLC, Git & GitHub with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_8",
                      "name": "Cloud Basics: IaaS, PaaS, SaaS & AWS/Azure/GCP Overview",
                      "description": "Cloud deployment models, shared responsibility, cloud advantages.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Cloud Basics: IaaS, PaaS, SaaS & AWS/Azure/GCP Overview with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_cs_9",
                      "name": "Professional Communication, Essay Writing & HR Prep",
                      "description": "TCS/Wipro essay framework, project storytelling, behavioral readiness.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Professional Communication, Essay Writing & HR Prep with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "track_dsa",
      "name": "DSA",
      "description": "Fresher Assessment & Coding Interview readiness: Complexity, Arrays, Strings, Trees, and Core DP.",
      "color": "#8b5cf6",
      "icon": "code-2",
      "order": 4,
      "subjects": [
        {
          "id": "dsa_complexity",
          "name": "Complexity",
          "description": "Big O notation, time complexity, space complexity, and algorithmic performance.",
          "topics": [
            {
              "id": "top_dsa_cpx",
              "name": "Big O Foundations",
              "subtopics": [
                {
                  "id": "sub_dsa_cpx",
                  "name": "Asymptotic Analysis & Stack Memory",
                  "tasks": [
                    {
                      "id": "t_dsa_1",
                      "name": "Big O, Omega, Theta Notations & Growth Rates",
                      "description": "Comparing O(1), O(log N), O(N), O(N log N), O(N^2), O(2^N).",
                      "status": "Completed",
                      "plannedDate": "2026-09-16",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Big O, Omega, Theta Notations & Growth Rates with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-16",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_2",
                      "name": "Time Complexity Analysis of Loops & Recursion",
                      "description": "Counting iterations, recurrence relation intuition.",
                      "status": "Completed",
                      "plannedDate": "2026-09-17",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Time Complexity Analysis of Loops & Recursion with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-17",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_3",
                      "name": "Space Complexity & Auxiliary Memory",
                      "description": "In-place algorithms vs extra data structures, call stack memory.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Space Complexity & Auxiliary Memory with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_arrays_strings",
          "name": "Arrays & Strings",
          "description": "Array traversal, prefix sum, Kadane's algorithm, Dutch flag, and string patterns.",
          "topics": [
            {
              "id": "top_dsa_arr_str",
              "name": "Arrays & String Techniques",
              "subtopics": [
                {
                  "id": "sub_dsa_as",
                  "name": "Kadane, Prefix Sum, Palindrome, Anagrams",
                  "tasks": [
                    {
                      "id": "t_dsa_4",
                      "name": "Array Traversal, Insertion & Deletion Mechanics",
                      "description": "Static vs dynamic arrays, memory layout, amortized resizing.",
                      "status": "Completed",
                      "plannedDate": "2026-09-18",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Array Traversal, Insertion & Deletion Mechanics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-18",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_5",
                      "name": "Prefix Sum & Range Sum Queries",
                      "description": "Precomputing cumulative sums to answer subarray queries in O(1).",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Prefix Sum & Range Sum Queries with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_6",
                      "name": "Kadane's Algorithm: Maximum Subarray Sum",
                      "description": "Dynamic programming intuition for maximum contiguous subarray.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Kadane's Algorithm: Maximum Subarray Sum with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_7",
                      "name": "Dutch National Flag Algorithm (Sort 0s, 1s, 2s)",
                      "description": "Three-pointer in-place partition technique.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-22",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Dutch National Flag Algorithm (Sort 0s, 1s, 2s) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_8",
                      "name": "Palindrome Checking & String Inversion",
                      "description": "Two pointers moving inward, case and non-alphanumeric handling.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 1.5,
                      "actualHours": 1.5,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Palindrome Checking & String Inversion with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_9",
                      "name": "Valid Anagram & Character Frequency Hashing",
                      "description": "Counting frequencies using array maps or hash tables.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Valid Anagram & Character Frequency Hashing with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_10",
                      "name": "Longest Common Prefix & Substring Matching Basics",
                      "description": "Horizontal/vertical scanning, substring extraction.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Longest Common Prefix & Substring Matching Basics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_hash_pointers",
          "name": "Hashing, Two Pointers & Sliding Window",
          "description": "Hash maps/sets, pair sums, opposite pointers, and sliding window patterns.",
          "topics": [
            {
              "id": "top_dsa_hp_sw",
              "name": "Window & Lookup Patterns",
              "subtopics": [
                {
                  "id": "sub_dsa_hsw",
                  "name": "Two Sum, K-Subarray, Sliding Window",
                  "tasks": [
                    {
                      "id": "t_dsa_11",
                      "name": "Hash Map & Hash Set Fundamentals",
                      "description": "Collision handling, hash functions, load factor, O(1) average lookup.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Hash Map & Hash Set Fundamentals with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_12",
                      "name": "Two Sum Problem using Hash Map",
                      "description": "O(N) single pass lookup of target complement.",
                      "status": "Completed",
                      "plannedDate": "2026-09-19",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 2,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Two Sum Problem using Hash Map with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "2026-09-19",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_13",
                      "name": "Subarray Sum Equals K",
                      "description": "Prefix sum with hash map of prefix frequencies.",
                      "status": "In Progress",
                      "plannedDate": "2026-09-20",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 1,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Subarray Sum Equals K with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_26",
                      "name": "Two Pointers: Container With Most Water & 3Sum",
                      "description": "Greedy pointer shifting based on height bottlenecks.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-23",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Two Pointers: Container With Most Water & 3Sum with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_27",
                      "name": "Sliding Window: Longest Substring Without Repeating",
                      "description": "Dynamic window expansion and contraction with hash set.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Sliding Window: Longest Substring Without Repeating with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_28",
                      "name": "Fixed-Size Sliding Window: Max Subarray of Size K",
                      "description": "Maintaining rolling sum by adding incoming and subtracting outgoing.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Fixed-Size Sliding Window: Max Subarray of Size K with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_linear",
          "name": "Linked Lists, Stack & Queue",
          "description": "Singly/doubly linked lists, cycle detection, LIFO stack, Next Greater Element, and queue.",
          "topics": [
            {
              "id": "top_dsa_lsq",
              "name": "Linear Data Structures",
              "subtopics": [
                {
                  "id": "sub_dsa_lsq",
                  "name": "Linked Lists, Stack, Monotonic Stack & Queue",
                  "tasks": [
                    {
                      "id": "t_dsa_14",
                      "name": "Singly Linked List Implementation & Reversal",
                      "description": "Iterative and recursive linked list reversal.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-24",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Singly Linked List Implementation & Reversal with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_15",
                      "name": "Detect Cycle in Linked List (Floyd's Tortoise & Hare)",
                      "description": "Fast and slow pointer rendezvous, finding cycle start.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-25",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Detect Cycle in Linked List (Floyd's Tortoise & Hare) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_16",
                      "name": "Merge Two Sorted Linked Lists & Middle of List",
                      "description": "Dummy node technique, pointer manipulation.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-26",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Merge Two Sorted Linked Lists & Middle of List with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_17",
                      "name": "Valid Parentheses Problem using Stack",
                      "description": "Matching opening and closing brackets, boundary checks.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Valid Parentheses Problem using Stack with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_18",
                      "name": "Next Greater Element (Monotonic Stack)",
                      "description": "Traversing right-to-left with stack to find next greater item in O(N).",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Next Greater Element (Monotonic Stack) with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_19",
                      "name": "Implement Queue using Stacks & Min Stack Design",
                      "description": "Amortized O(1) operations, tracking current minimum.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Implement Queue using Stacks & Min Stack Design with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_search_sort",
          "name": "Recursion, Sorting & Searching",
          "description": "Recursive call stacks, Merge Sort, Quick Sort, and Binary Search variants.",
          "topics": [
            {
              "id": "top_dsa_rss",
              "name": "Divide & Conquer, Search",
              "subtopics": [
                {
                  "id": "sub_dsa_rss",
                  "name": "Binary Search, Merge Sort, Quick Sort, Subsets",
                  "tasks": [
                    {
                      "id": "t_dsa_20",
                      "name": "Recursion Fundamentals & Call Stack Visualization",
                      "description": "Base condition, recursive leap of faith, subsets problem.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-27",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Recursion Fundamentals & Call Stack Visualization with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_21",
                      "name": "Permutations & Combinations Recursion",
                      "description": "Backtracking tree, state restoration, boolean visited array.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Permutations & Combinations Recursion with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_22",
                      "name": "Binary Search: Lower Bound, Upper Bound",
                      "description": "Dividing search space in half, avoiding integer overflow.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-28",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Binary Search: Lower Bound, Upper Bound with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_23",
                      "name": "Search in Rotated Sorted Array",
                      "description": "Determining which half is sorted, adjusted binary conditions.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-29",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Search in Rotated Sorted Array with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_24",
                      "name": "Merge Sort Algorithm & Analysis",
                      "description": "Divide, sort, merge halves, O(N log N) guarantee, O(N) auxiliary space.",
                      "status": "Not Started",
                      "plannedDate": "2026-09-30",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Merge Sort Algorithm & Analysis with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_25",
                      "name": "Quick Sort & Partitioning Logic",
                      "description": "Lomuto vs Hoare partition, pivot choice, worst-case handling.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-01",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Quick Sort & Partitioning Logic with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_trees_heap",
          "name": "Trees, BST & Heap",
          "description": "Binary tree traversals (DFS/BFS), BST validation, Heap, and Priority Queue.",
          "topics": [
            {
              "id": "top_dsa_tbh",
              "name": "Hierarchical Structures",
              "subtopics": [
                {
                  "id": "sub_dsa_tbh",
                  "name": "Traversals, Depth, BST & Top-K Heap",
                  "tasks": [
                    {
                      "id": "t_dsa_29",
                      "name": "Binary Tree Traversals: DFS (In/Pre/Post) & BFS",
                      "description": "Recursive DFS, iterative Level Order traversal using queue.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-02",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Binary Tree Traversals: DFS (In/Pre/Post) & BFS with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_30",
                      "name": "Maximum Depth & Diameter of Binary Tree",
                      "description": "Height calculations, longest path between any two nodes.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-03",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Maximum Depth & Diameter of Binary Tree with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_31",
                      "name": "Binary Search Tree: Search, Insert & Validate BST",
                      "description": "BST ordering property, range verification (-inf, +inf).",
                      "status": "Not Started",
                      "plannedDate": "2026-10-04",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Binary Search Tree: Search, Insert & Validate BST with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_32",
                      "name": "Min Heap, Max Heap & Kth Largest Element",
                      "description": "Heapify, priority queue operations, top-K pattern.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-05",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Min Heap, Max Heap & Kth Largest Element with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "dsa_graphs_dp",
          "name": "Graphs, Greedy & Dynamic Programming",
          "description": "Graph BFS/DFS, cycle detection, greedy choices, memoization, and core DP.",
          "topics": [
            {
              "id": "top_dsa_ggd",
              "name": "Advanced Paradigms",
              "subtopics": [
                {
                  "id": "sub_dsa_ggd",
                  "name": "Graph Traversal, Greedy & 1D Dynamic Programming",
                  "tasks": [
                    {
                      "id": "t_dsa_33",
                      "name": "Graph Representation & BFS/DFS Traversal",
                      "description": "Adjacency lists, visited sets, connected components.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-06",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Graph Representation & BFS/DFS Traversal with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_34",
                      "name": "Cycle Detection in Undirected Graph",
                      "description": "DFS with parent tracking or BFS with queue.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-07",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Cycle Detection in Undirected Graph with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_35",
                      "name": "Greedy Strategy: Activity Selection & Jump Game",
                      "description": "Locally optimal choices leading to global optimum.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-08",
                      "deadline": "",
                      "estimatedHours": 2,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Greedy Strategy: Activity Selection & Jump Game with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_36",
                      "name": "Dynamic Programming: Memoization vs Tabulation",
                      "description": "Overlapping subproblems, optimal substructure, Fibonacci, Climbing Stairs.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-09",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain Dynamic Programming: Memoization vs Tabulation with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_37",
                      "name": "1D DP: House Robber Problem",
                      "description": "State transition: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
                      "status": "Not Started",
                      "plannedDate": "2026-10-10",
                      "deadline": "",
                      "estimatedHours": 2.5,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain 1D DP: House Robber Problem with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    },
                    {
                      "id": "t_dsa_38",
                      "name": "0/1 Knapsack & Coin Change DP Basics",
                      "description": "Include vs exclude decision matrix, 2D to 1D space optimization.",
                      "status": "Not Started",
                      "plannedDate": "2026-10-11",
                      "deadline": "",
                      "estimatedHours": 3,
                      "actualHours": 0.0,
                      "notes": "",
                      "resources": [
                        {
                          "title": "Documentation / Guide",
                          "url": "https://www.geeksforgeeks.org"
                        },
                        {
                          "title": "Practice Problems",
                          "url": "https://leetcode.com"
                        }
                      ],
                      "interviewQuestions": "Explain 0/1 Knapsack & Coin Change DP Basics with a real-world scenario. What are key edge cases and time/space complexities?",
                      "revisionDate": "",
                      "completionDate": "",
                      "createdAt": "2026-09-15",
                      "updatedAt": "2026-09-20"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "proj_da_1",
      "category": "Data Analytics",
      "name": "LendX Finance Loan Portfolio Analysis",
      "description": "Comprehensive loan default risk, debt-to-income distribution, and portfolio yield analysis across 50,000+ customer records.",
      "status": "In Progress",
      "tools": [
        "SQL",
        "Power BI",
        "Excel"
      ],
      "githubUrl": "https://github.com/example/lendx-finance-analytics",
      "dashboardUrl": "https://app.powerbi.com/view?r=example-lendx",
      "notebookUrl": "",
      "datasetUrl": "https://www.kaggle.com/datasets/example/loan-risk-dataset",
      "reportUrl": "",
      "notes": "Calculated non-performing loan (NPL) rates, delinquency buckets, and interest income forecasts.",
      "checklist": [
        {
          "id": "cl_p1_1",
          "text": "Clean raw borrower records & validate loan status codes",
          "completed": true
        },
        {
          "id": "cl_p1_2",
          "text": "Build SQL views for loan vintage and default rate calculations",
          "completed": true
        },
        {
          "id": "cl_p1_3",
          "text": "Design Power BI executive summary with delinquency waterfall",
          "completed": false
        },
        {
          "id": "cl_p1_4",
          "text": "Publish interactive report & document business takeaways",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_da_2",
      "category": "Data Analytics",
      "name": "Customer Transaction SQL & ERD Architecture",
      "description": "Normalized multi-table retail transactional database schema (3NF) with optimized indexing and complex business query performance.",
      "status": "Completed",
      "tools": [
        "PostgreSQL",
        "ERD Design",
        "SQL"
      ],
      "githubUrl": "https://github.com/example/customer-transaction-erd",
      "dashboardUrl": "",
      "notebookUrl": "",
      "datasetUrl": "https://github.com/example/retail-sql-seed",
      "reportUrl": "https://example.com/erd-documentation.pdf",
      "notes": "Designed tables for customers, orders, order_items, products, and payments. Solved recursive referral query.",
      "checklist": [
        {
          "id": "cl_p2_1",
          "text": "Create conceptual and physical ER diagram",
          "completed": true
        },
        {
          "id": "cl_p2_2",
          "text": "Implement DDL with foreign keys, constraints & indexes",
          "completed": true
        },
        {
          "id": "cl_p2_3",
          "text": "Write 20 complex business analytics queries with CTEs & Window functions",
          "completed": true
        },
        {
          "id": "cl_p2_4",
          "text": "Analyze query performance with EXPLAIN ANALYZE",
          "completed": true
        }
      ]
    },
    {
      "id": "proj_da_3",
      "category": "Data Analytics",
      "name": "Cartly E-Commerce Python EDA",
      "description": "In-depth exploratory analysis on e-commerce transaction logs to identify seasonal sales trends, customer churn triggers, and product affinity.",
      "status": "Completed",
      "tools": [
        "Python",
        "Pandas",
        "Seaborn",
        "Jupyter"
      ],
      "githubUrl": "https://github.com/example/cartly-ecommerce-eda",
      "dashboardUrl": "",
      "notebookUrl": "https://github.com/example/cartly-ecommerce-eda/blob/main/EDA.ipynb",
      "datasetUrl": "https://www.kaggle.com/datasets/example/cartly-ecommerce",
      "reportUrl": "",
      "notes": "Uncovered that 68% of repeat purchases happen within 14 days of the initial order.",
      "checklist": [
        {
          "id": "cl_p3_1",
          "text": "Ingest and inspect 1.2M e-commerce event rows",
          "completed": true
        },
        {
          "id": "cl_p3_2",
          "text": "Handle missing user location data and fix price outliers",
          "completed": true
        },
        {
          "id": "cl_p3_3",
          "text": "Calculate customer lifetime value and average order value (AOV)",
          "completed": true
        },
        {
          "id": "cl_p3_4",
          "text": "Create Seaborn visualizations and executive insight deck",
          "completed": true
        }
      ]
    },
    {
      "id": "proj_da_4",
      "category": "Data Analytics",
      "name": "99Acres Real Estate Price Intelligence",
      "description": "Interactive Excel pricing and valuation intelligence model using advanced XLOOKUP, dynamic array formulas, and slicer-driven pivot dashboards.",
      "status": "In Progress",
      "tools": [
        "Excel",
        "Power Query",
        "Data Modeling"
      ],
      "githubUrl": "",
      "dashboardUrl": "",
      "notebookUrl": "",
      "datasetUrl": "https://www.kaggle.com/datasets/example/99acres-property-data",
      "reportUrl": "",
      "notes": "Modeled price per square foot trends across tier-1 and tier-2 metro areas.",
      "checklist": [
        {
          "id": "cl_p4_1",
          "text": "Extract and clean multi-city listing data with Power Query",
          "completed": true
        },
        {
          "id": "cl_p4_2",
          "text": "Build dynamic valuation model with nested IFS and XLOOKUP",
          "completed": true
        },
        {
          "id": "cl_p4_3",
          "text": "Create KPI summary dashboard with custom property type slicers",
          "completed": false
        },
        {
          "id": "cl_p4_4",
          "text": "Finalize documentation and summary sheet",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_da_5",
      "category": "Data Analytics",
      "name": "Meta Ads Marketing ROI & Funnel Dashboard",
      "description": "Multi-channel advertising performance tracking, calculating ROAS, CAC, CTR, and conversion drop-offs across ad creatives.",
      "status": "Not Started",
      "tools": [
        "Power BI",
        "DAX",
        "SQL"
      ],
      "githubUrl": "",
      "dashboardUrl": "",
      "notebookUrl": "",
      "datasetUrl": "",
      "reportUrl": "",
      "notes": "Tracking return on ad spend (ROAS) and cost per acquisition (CPA).",
      "checklist": [
        {
          "id": "cl_p5_1",
          "text": "Consolidate campaign and adset level metrics",
          "completed": false
        },
        {
          "id": "cl_p5_2",
          "text": "Implement DAX measures for blended CAC and ROAS",
          "completed": false
        },
        {
          "id": "cl_p5_3",
          "text": "Design funnel conversion waterfall in Power BI",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_da_6",
      "category": "Data Analytics",
      "name": "HR Workforce Attrition & Diversity Dashboard",
      "description": "People analytics dashboard evaluating attrition drivers, salary equity, department tenure, and promotion velocity.",
      "status": "Completed",
      "tools": [
        "Power BI",
        "DAX",
        "Excel"
      ],
      "githubUrl": "https://github.com/example/hr-workforce-analytics",
      "dashboardUrl": "https://app.powerbi.com/view?r=example-hr",
      "notebookUrl": "",
      "datasetUrl": "https://www.kaggle.com/datasets/example/ibm-hr-analytics",
      "reportUrl": "",
      "notes": "Identified overtime and years under current manager as top factors for employee turnover.",
      "checklist": [
        {
          "id": "cl_p6_1",
          "text": "Clean HR census data and standardize compensation bands",
          "completed": true
        },
        {
          "id": "cl_p6_2",
          "text": "Calculate attrition rate DAX measures with time intelligence",
          "completed": true
        },
        {
          "id": "cl_p6_3",
          "text": "Design interactive Power BI dashboard with department drilldown",
          "completed": true
        }
      ]
    },
    {
      "id": "proj_da_7",
      "category": "Data Analytics",
      "name": "Shopkart Retail Sales & Cohort Intelligence",
      "description": "Full-scale retail analytics platform analyzing customer cohorts, repurchase latency, and seasonal revenue variations using SQL and BI.",
      "status": "In Progress",
      "tools": [
        "SQL",
        "Power BI",
        "Python"
      ],
      "githubUrl": "https://github.com/example/shopkart-retail-cohorts",
      "dashboardUrl": "",
      "notebookUrl": "https://github.com/example/shopkart-retail-cohorts/blob/main/cohorts.ipynb",
      "datasetUrl": "https://www.kaggle.com/datasets/example/retail-shopkart",
      "reportUrl": "",
      "notes": "Building cohort retention heatmap in Python and embedding it in Power BI report.",
      "checklist": [
        {
          "id": "cl_p7_1",
          "text": "Develop SQL monthly customer acquisition cohort queries",
          "completed": true
        },
        {
          "id": "cl_p7_2",
          "text": "Calculate repeat purchase rate and order latency",
          "completed": true
        },
        {
          "id": "cl_p7_3",
          "text": "Build cohort retention matrix in Python",
          "completed": false
        },
        {
          "id": "cl_p7_4",
          "text": "Create interactive sales drilldown dashboard in Power BI",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_ds_1",
      "category": "Data Science",
      "name": "Customer Churn Prediction (Flagship ML Project)",
      "description": "End-to-end Machine Learning classification predicting subscription churn with XGBoost, SMOTE balancing, SHAP feature explainability, and actionable business ROI strategy.",
      "status": "In Progress",
      "tools": [
        "Python",
        "Scikit-Learn",
        "XGBoost",
        "SHAP",
        "Streamlit"
      ],
      "githubUrl": "https://github.com/example/telecom-churn-prediction-ml",
      "dashboardUrl": "https://share.streamlit.io/example/telecom-churn-app",
      "notebookUrl": "https://github.com/example/telecom-churn-prediction-ml/blob/main/churn_model.ipynb",
      "datasetUrl": "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
      "reportUrl": "https://example.com/churn-recommendation-report.pdf",
      "notes": "Best model achieved 0.85 ROC-AUC using XGBoost with hyperparameter tuning. Top churn drivers: Month-to-month contracts and fiber optic tenure.",
      "checklist": [
        {
          "id": "cl_ds1_1",
          "text": "Problem Definition & Business Objective Formulation",
          "completed": true
        },
        {
          "id": "cl_ds1_2",
          "text": "Dataset Acquisition & Schema Validation (7,043 customer rows)",
          "completed": true
        },
        {
          "id": "cl_ds1_3",
          "text": "Data Cleaning & TotalCharges Type Coercion / Imputation",
          "completed": true
        },
        {
          "id": "cl_ds1_4",
          "text": "Comprehensive Exploratory Data Analysis & Bivariate Churn Splits",
          "completed": true
        },
        {
          "id": "cl_ds1_5",
          "text": "Feature Engineering: One-Hot Encoding, Tenure Buckets & Scaling",
          "completed": true
        },
        {
          "id": "cl_ds1_6",
          "text": "Baseline Model Implementation (Logistic Regression benchmark)",
          "completed": true
        },
        {
          "id": "cl_ds1_7",
          "text": "Model Training & Comparison: Random Forest vs XGBoost vs LightGBM",
          "completed": false
        },
        {
          "id": "cl_ds1_8",
          "text": "Class Imbalance Treatment with SMOTE and class_weight adjustments",
          "completed": false
        },
        {
          "id": "cl_ds1_9",
          "text": "Hyperparameter Tuning with Stratified 5-Fold RandomizedSearchCV",
          "completed": false
        },
        {
          "id": "cl_ds1_10",
          "text": "Model Evaluation: Confusion Matrix, ROC-AUC, Recall & Cost Matrix",
          "completed": false
        },
        {
          "id": "cl_ds1_11",
          "text": "Model Interpretation using SHAP Summary and Force Plots",
          "completed": false
        },
        {
          "id": "cl_ds1_12",
          "text": "Formulate Actionable Retention Recommendations for Leadership",
          "completed": false
        },
        {
          "id": "cl_ds1_13",
          "text": "Build Interactive Streamlit Web App for Real-Time Churn Scoring",
          "completed": false
        },
        {
          "id": "cl_ds1_14",
          "text": "Finalize GitHub Repository README & Executive Presentation Slides",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_ds_2",
      "category": "Data Science",
      "name": "Retail Sales Forecasting Model",
      "description": "Time-series forecasting model estimating store-level weekly demand, accounting for promotional holidays and seasonal patterns.",
      "status": "Not Started",
      "tools": [
        "Python",
        "Prophet",
        "Statsmodels",
        "Pandas"
      ],
      "githubUrl": "",
      "dashboardUrl": "",
      "notebookUrl": "",
      "datasetUrl": "https://www.kaggle.com/c/walmart-recruiting-store-sales-forecasting",
      "reportUrl": "",
      "notes": "Testing ARIMA vs Prophet vs XGBoost with lag features.",
      "checklist": [
        {
          "id": "cl_ds2_1",
          "text": "Formulate time series problem & clean calendar data",
          "completed": false
        },
        {
          "id": "cl_ds2_2",
          "text": "Create lag features, rolling means & holiday indicators",
          "completed": false
        },
        {
          "id": "cl_ds2_3",
          "text": "Train Prophet and gradient boosting models",
          "completed": false
        },
        {
          "id": "cl_ds2_4",
          "text": "Evaluate forecast accuracy with WMAE and RMSE",
          "completed": false
        }
      ]
    },
    {
      "id": "proj_ds_3",
      "category": "Data Science",
      "name": "Customer Segmentation & Persona Clustering",
      "description": "Unsupervised machine learning engine identifying high-value behavioral buyer segments using RFM features, PCA, and K-Means clustering.",
      "status": "Not Started",
      "tools": [
        "Python",
        "Scikit-Learn",
        "Seaborn",
        "PCA"
      ],
      "githubUrl": "",
      "dashboardUrl": "",
      "notebookUrl": "",
      "datasetUrl": "https://archive.ics.uci.edu/ml/datasets/online+retail",
      "reportUrl": "",
      "notes": "Derives distinct marketing personas: Champions, At-Risk, Hibernating, High Potential.",
      "checklist": [
        {
          "id": "cl_ds3_1",
          "text": "Extract RFM (Recency, Frequency, Monetary) metrics per customer",
          "completed": false
        },
        {
          "id": "cl_ds3_2",
          "text": "Scale features and perform PCA dimensionality reduction",
          "completed": false
        },
        {
          "id": "cl_ds3_3",
          "text": "Determine optimal K using Elbow Curve and Silhouette Analysis",
          "completed": false
        },
        {
          "id": "cl_ds3_4",
          "text": "Profile clusters and deliver persona marketing strategies",
          "completed": false
        }
      ]
    }
  ],
  "exams": [
    {
      "id": "exam_tcs",
      "company": "Tata Consultancy Services (TCS)",
      "name": "TCS B.Sc Ignite & Smart Hiring",
      "eligibility": "B.Sc (Data Science, CS, IT, Math, Stats) / BCA final year candidates. Minimum 50% or 5.0 CGPA aggregate without active backlogs.",
      "syllabus": "Numerical Ability (26 Qs), Reasoning Ability (30 Qs), Verbal Ability (24 Qs), Cognitive Aptitude, and Basic Programming Concepts MCQ.",
      "status": "Preparing",
      "registrationStatus": "Notification Expected / Open Soon",
      "registrationUrl": "https://www.tcs.com/careers/india/tcs-smart-hiring",
      "officialUrl": "https://nextstep.tcs.com/campus/#/",
      "examDate": "2026-11-15",
      "expectedTiming": "Typically conducted between October and December for final year students.",
      "notes": "Smart Hiring offers trainee roles while Ignite fast-tracks B.Sc students into software engineering with higher compensation brackets upon clearing higher assessment tiers."
    },
    {
      "id": "exam_wipro",
      "company": "Wipro",
      "name": "Wipro WILP (Work Integrated Learning Program)",
      "eligibility": "B.Sc (Data Science, CS, IT, Math, Stats, Electronics, Physics) & BCA. 60% or 6.0 CGPA throughout 10th, 12th, and Degree. Core Mathematics required in 12th.",
      "syllabus": "Online Assessment: Verbal (20 mins), Analytical (20 mins), Quantitative (20 mins), Written Communication / Essay Test (20 mins).",
      "status": "Preparing",
      "registrationStatus": "Applications Open",
      "registrationUrl": "https://careers.wipro.com/wilp",
      "officialUrl": "https://careers.wipro.com/wilp",
      "examDate": "2026-11-28",
      "expectedTiming": "Rolling recruitment window with tests scheduled in batches.",
      "notes": "Sponsors M.Tech from a premier institution (BITS Pilani) alongside full-time employment with progressive stipend increases."
    },
    {
      "id": "exam_cognizant",
      "company": "Cognizant",
      "name": "Cognizant GenC / Graduate Trainee Program",
      "eligibility": "B.Sc (Data Science, CS, IT) & BCA. Minimum 60% aggregate across academics with no standing arrears at the time of recruitment.",
      "syllabus": "Cognitive Assessment (Quantitative, Logical, English), Technical Aptitude & Programming MCQs (Pseudocode, DBMS, SQL, OOP).",
      "status": "Preparing",
      "registrationStatus": "Upcoming Drive",
      "registrationUrl": "https://careers.cognizant.com/global-en/jobs/campus-hiring",
      "officialUrl": "https://careers.cognizant.com",
      "examDate": "2026-12-05",
      "expectedTiming": "Campus drive and off-campus pool drives across Q4 2026.",
      "notes": "GenC Elevate track provides higher package for strong performance on programming and SQL questions."
    },
    {
      "id": "exam_hcl",
      "company": "HCLTech",
      "name": "HCLTech Graduate Trainee Program",
      "eligibility": "B.Sc / BCA graduates with 60%+ in 10th, 12th, and Graduation.",
      "syllabus": "Quantitative Aptitude, Logical Reasoning, English Language, Basic Computer Fundamentals, and Technical Interview.",
      "status": "Not Started",
      "registrationStatus": "Check Career Portal",
      "registrationUrl": "https://www.hcltech.com/careers/early-careers",
      "officialUrl": "https://www.hcltech.com/careers",
      "examDate": "2026-12-15",
      "expectedTiming": "Quarterly recruitment cycles.",
      "notes": "Focus heavily on clear communication, basic programming logic, and relational database concepts."
    },
    {
      "id": "exam_accenture",
      "company": "Accenture",
      "name": "Accenture Associate / Fresher Assessment",
      "eligibility": "B.Sc (Data Science, CS, IT, Math, Stats) & BCA. No active backlogs, 60% or 6.5 CGPA minimum.",
      "syllabus": "Stage 1: Cognitive & Technical Assessment (English, Critical Reasoning, Abstract Reasoning, MS Office, Pseudo Code, Networking, Cloud). Stage 2: Coding Assessment (Fundamentals).",
      "status": "Preparing",
      "registrationStatus": "Portal Registration Active",
      "registrationUrl": "https://indiacampus.accenture.com",
      "officialUrl": "https://www.accenture.com/in-en/careers",
      "examDate": "2026-12-10",
      "expectedTiming": "Recruitment drives typically held between November and January.",
      "notes": "Both Cognitive and Technical assessments are elimination rounds. Pseudo-code and cloud awareness questions are common."
    },
    {
      "id": "exam_amcat",
      "company": "SHL / Aspiring Minds",
      "name": "AMCAT Standardized Employability Assessment",
      "eligibility": "Open to all graduates and final year students. High scores shared with 500+ corporate hiring partners.",
      "syllabus": "Compulsory: English Comprehension, Quantitative Ability, Logical Ability, AMCAT Personality Inventory. Optional Technical Modules: Computer Programming, Automata Fix, Data Science.",
      "status": "Not Started",
      "registrationStatus": "On-Demand Booking",
      "registrationUrl": "https://www.myamcat.com",
      "officialUrl": "https://www.myamcat.com",
      "examDate": "2026-11-20",
      "expectedTiming": "Candidate can book slot anytime; results valid for 1 year.",
      "notes": "A score above 85th percentile in Quant, Logic, and English opens interview calls from numerous mid-tier IT and analytics companies."
    }
  ],
  "revisions": [
    {
      "id": "rev_1",
      "taskId": "t_sql_10",
      "taskName": "SELF JOIN & Hierarchical Data",
      "subjectName": "SQL",
      "trackName": "Data Analytics",
      "scheduledDate": "2026-09-21",
      "status": "Pending",
      "intervalDays": 3,
      "reviewCount": 1,
      "notes": "Review employee-manager relationship query with NULL handling for CEO."
    },
    {
      "id": "rev_2",
      "taskId": "t_ds_ml_12",
      "taskName": "Bias-Variance Tradeoff & Overfitting Prevention",
      "subjectName": "Machine Learning",
      "trackName": "Data Science",
      "scheduledDate": "2026-09-21",
      "status": "Pending",
      "intervalDays": 3,
      "reviewCount": 1,
      "notes": "Verify formulas for expected test error = Bias^2 + Variance + Irreducible error."
    },
    {
      "id": "rev_3",
      "taskId": "t_sql_1",
      "taskName": "SQL Fundamentals & Relational Concepts",
      "subjectName": "SQL",
      "trackName": "Data Analytics",
      "scheduledDate": "2026-09-23",
      "status": "Pending",
      "intervalDays": 7,
      "reviewCount": 2,
      "notes": "Quick 10-minute recap of DDL vs DML commands."
    },
    {
      "id": "rev_4",
      "taskId": "t_sql_6",
      "taskName": "GROUP BY & HAVING Clauses",
      "subjectName": "SQL",
      "trackName": "Data Analytics",
      "scheduledDate": "2026-09-25",
      "status": "Pending",
      "intervalDays": 7,
      "reviewCount": 1,
      "notes": "Review multi-column GROUP BY and HAVING count(*) > 5 conditions."
    }
  ]
};
