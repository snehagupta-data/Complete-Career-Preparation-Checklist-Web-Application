import json
import os

def create_task(tid, name, desc="", status="Not Started", planned="", deadline="", est=2.0, actual=0.0, notes="", questions="", rev_date="", comp_date=""):
    return {
        "id": tid,
        "name": name,
        "description": desc or f"Master theory, syntax, hands-on implementation, and interview patterns for {name}.",
        "status": status,
        "plannedDate": planned,
        "deadline": deadline,
        "estimatedHours": est,
        "actualHours": actual,
        "notes": notes,
        "resources": [
            {"title": "Documentation / Guide", "url": "https://www.geeksforgeeks.org"},
            {"title": "Practice Problems", "url": "https://leetcode.com"}
        ],
        "interviewQuestions": questions or f"Explain {name} with a real-world scenario. What are key edge cases and time/space complexities?",
        "revisionDate": rev_date,
        "completionDate": comp_date or ("2026-09-18" if status == "Completed" else ""),
        "createdAt": "2026-09-15",
        "updatedAt": "2026-09-20"
    }

# Track 1: Data Analytics
da_sql_tasks = [
    create_task("t_sql_1", "SQL Fundamentals & Relational Concepts", "Tables, columns, primary & foreign keys, relational integrity, DDL vs DML.", "Completed", "2026-09-16", est=2, actual=2.5, rev_date="2026-09-23", comp_date="2026-09-16", notes="Mastered table schemas and constraints.", questions="Differentiate DDL, DML, DCL, and TCL."),
    create_task("t_sql_2", "SELECT, WHERE, DISTINCT & LIMIT", "Column projection, conditional filtering, deduplication, row limiting.", "Completed", "2026-09-16", est=1.5, actual=1.5, comp_date="2026-09-16"),
    create_task("t_sql_3", "ORDER BY & Column Aliases", "Ascending/descending sorting, multi-column sorting, alias usage.", "Completed", "2026-09-17", est=1, actual=1, comp_date="2026-09-17"),
    create_task("t_sql_4", "NULL Handling & COALESCE", "Three-valued logic (TRUE, FALSE, UNKNOWN), IS NULL, IS NOT NULL, COALESCE.", "In Progress", "2026-09-20", est=2, actual=1, notes="COALESCE replaces nulls with fallback defaults."),
    create_task("t_sql_5", "Aggregate Functions (SUM, COUNT, AVG, MIN, MAX)", "Summary metrics across rows, COUNT(*) vs COUNT(col).", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_sql_6", "GROUP BY & HAVING Clauses", "Grouping records, filter after aggregation using HAVING vs WHERE.", "Completed", "2026-09-18", est=2, actual=2.5, rev_date="2026-09-25", comp_date="2026-09-18"),
    create_task("t_sql_7", "CASE WHEN & Conditional Aggregation", "Conditional column transformation and pivoting count/sum via CASE WHEN.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_sql_8", "INNER JOIN & LEFT JOIN", "Matching records, left outer preservation, identifying unlinked rows.", "Completed", "2026-09-18", est=2.5, actual=2.5, comp_date="2026-09-18"),
    create_task("t_sql_9", "RIGHT JOIN, FULL OUTER JOIN & CROSS JOIN", "Right tables, bi-directional outer joins, Cartesian products.", "Not Started", "2026-09-21", est=2),
    create_task("t_sql_10", "SELF JOIN & Hierarchical Data", "Joining a table to itself: employee-manager hierarchies, sequential steps.", "Need Revision", "2026-09-19", est=2, actual=2, rev_date="2026-09-21", notes="Review ON e1.manager_id = e2.emp_id join conditions."),
    create_task("t_sql_11", "Multiple-Table Joins & ERD Navigation", "Joining 3+ normalized tables, maintaining row integrity without unintended duplicates.", "Not Started", "2026-09-22", est=3),
    create_task("t_sql_12", "Scalar & In-List Subqueries", "Nested SELECT in WHERE/FROM/SELECT, IN, EXISTS.", "Not Started", "2026-09-22", est=2),
    create_task("t_sql_13", "Correlated Subqueries & Performance", "Subqueries referencing outer query columns, evaluation per row.", "Not Started", "2026-09-23", est=2),
    create_task("t_sql_14", "Common Table Expressions (WITH CTE & Recursive CTE)", "Modular query structuring, readability, recursive organizational hierarchies.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_sql_15", "ROW_NUMBER, RANK & DENSE_RANK", "Assigning rankings with PARTITION BY and ORDER BY, handling ties.", "Not Started", "2026-09-24", est=2.5, notes="Essential for top-N analysis per category."),
    create_task("t_sql_16", "LAG, LEAD & Offset Functions", "Comparing current row to previous/next row (MoM growth, churn gaps).", "Not Started", "2026-09-24", est=2),
    create_task("t_sql_17", "Running Totals & Moving Averages", "Cumulative sums: SUM() OVER (PARTITION BY ... ORDER BY ... ROWS BETWEEN).", "Not Started", "2026-09-25", est=2),
    create_task("t_sql_18", "Date & String Functions in SQL", "DATE_TRUNC, DATEDIFF, EXTRACT, CONCAT, SUBSTRING, TRIM, LIKE.", "Not Started", "2026-09-25", est=2),
    create_task("t_sql_19", "Customer Retention & Churn Analysis in SQL", "Cohort retention tables, identifying active vs churned users over 30/60/90 days.", "Not Started", "2026-09-26", est=3),
    create_task("t_sql_20", "Sales, Revenue & RFM Segmentation in SQL", "Recency, Frequency, Monetary scoring via NTILE window functions.", "Not Started", "2026-09-27", est=3),
    create_task("t_sql_21", "Query Optimization, Indexes & Transactions Basics", "EXPLAIN execution plan, B-tree indexes, ACID transactions, commit/rollback.", "Not Started", "2026-09-28", est=2.5)
]

da_excel_tasks = [
    create_task("t_ex_1", "Spreadsheet Fundamentals & Data Cleaning", "Cell references (absolute $ vs relative), removing blank rows, trimming data.", "Completed", "2026-09-16", est=2, actual=2, comp_date="2026-09-16"),
    create_task("t_ex_2", "Logical Formulas (IF, IFS, AND, OR)", "Nested IF statements, multi-condition categorization.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_ex_3", "Conditional Aggregations (SUMIF, SUMIFS, COUNTIF, COUNTIFS, AVERAGEIF)", "Calculating metrics based on single and multiple criteria.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_ex_4", "Lookup Mastery: XLOOKUP & INDEX/MATCH", "Replacing VLOOKUP with robust two-way lookups and approximate matches.", "In Progress", "2026-09-20", est=2.5, actual=1),
    create_task("t_ex_5", "Text Manipulation (LEFT, RIGHT, MID, TRIM, CLEAN, SUBSTITUTE)", "Parsing names, SKU codes, addresses, removing non-printable characters.", "Not Started", "2026-09-21", est=2),
    create_task("t_ex_6", "Date Functions (DATEDIF, EOMONTH, EDATE, YEAR, MONTH)", "Calculating age, tenure, fiscal quarters, end-of-month projections.", "Not Started", "2026-09-22", est=2),
    create_task("t_ex_7", "Sorting, Filtering & Conditional Formatting", "Drop-down lists, input restrictions, heatmaps, highlight rules.", "Not Started", "2026-09-23", est=2),
    create_task("t_ex_8", "Pivot Tables & Pivot Charts", "Summarizing sales data, calculated fields, grouped dates, drill-downs.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_ex_9", "Slicers & Interactive Dashboard Design", "Connecting multiple pivot charts to unified slicers, executive KPI summary.", "Not Started", "2026-09-25", est=3),
    create_task("t_ex_10", "Power Query Basics in Excel", "Extracting, transforming, unpivoting columns, appending monthly sheets.", "Not Started", "2026-09-26", est=2.5)
]

da_pbi_tasks = [
    create_task("t_pbi_1", "Power BI Interface & Ingesting Data", "Connecting to CSV, Excel, SQL database; interface navigation.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_pbi_2", "Power Query: Cleaning, Transformation, Merge & Append", "Data types, split columns, unpivot, merging and appending tables.", "Completed", "2026-09-18", est=2.5, actual=2.5, comp_date="2026-09-18"),
    create_task("t_pbi_3", "Star Schema, Fact & Dimension Tables", "One-to-many relationships, cardinality, active vs inactive relationships.", "In Progress", "2026-09-20", est=2.5, actual=1),
    create_task("t_pbi_4", "Filter Propagation Direction & Date Tables", "Cross-filter direction, dedicated calendar tables with DAX CALENDARAUTO.", "Not Started", "2026-09-22", est=2),
    create_task("t_pbi_5", "Calculated Columns vs Measures", "Row context vs filter context, memory impact, best practices.", "Not Started", "2026-09-23", est=2),
    create_task("t_pbi_6", "Core DAX: SUM, COUNT, DISTINCTCOUNT, DIVIDE", "Safe divisions, handling blank values, basic summaries.", "Not Started", "2026-09-24", est=1.5),
    create_task("t_pbi_7", "CALCULATE, FILTER, ALL & ALLEXCEPT", "Context transition, overriding filters, calculating % of total.", "Not Started", "2026-09-25", est=3),
    create_task("t_pbi_8", "Time Intelligence DAX (YoY, MoM, Rolling Averages)", "SAMEPERIODLASTYEAR, DATEADD, DATESYTD, 30-day moving sales.", "Not Started", "2026-09-26", est=3),
    create_task("t_pbi_9", "Interactive Visuals, Tooltips & Drillthrough", "Card KPIs, matrix tables, custom tooltips, page-level drill-through.", "Not Started", "2026-09-27", est=2.5),
    create_task("t_pbi_10", "Business Storytelling & Executive Dashboard Design", "Visual hierarchy, framing actionable insights for leadership.", "Not Started", "2026-09-28", est=3)
]

da_py_tasks = [
    create_task("t_pya_1", "Python Variables, Types & Control Flow", "Int, float, str, bool, if-elif-else, while and for loops.", "Completed", "2026-09-15", est=2, actual=2, comp_date="2026-09-15"),
    create_task("t_pya_2", "Lists, Tuples, Sets & Dictionaries", "Indexing, slicing, key-value mappings, set operations, comprehensions.", "Completed", "2026-09-16", est=2, actual=2, comp_date="2026-09-16"),
    create_task("t_pya_3", "Functions, Lambdas & Exception Handling", "Def, args/kwargs, return, inline lambdas, try-except-finally blocks.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_pya_4", "NumPy Arrays, Indexing, Slicing & Vectorization", "1D/2D arrays, mathematical operations, boolean masking.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_pya_5", "Pandas Series & DataFrames Inspection", "Head, info, describe, dtypes, shape, missing values check.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_pya_6", "Pandas Filtering, Sorting & GroupBy Aggregations", "Loc/iloc, conditional selection, groupby with .agg(['mean', 'count']).", "Not Started", "2026-09-21", est=2.5),
    create_task("t_pya_7", "Merge, Concat, Pivot & Melt in Pandas", "Combining DataFrames, restructuring wide to long formats.", "Not Started", "2026-09-22", est=2.5),
    create_task("t_pya_8", "Handling Datetime, Missing Values & Duplicates", "pd.to_datetime, dt accessor, fillna, dropna, imputation strategies.", "Not Started", "2026-09-23", est=2),
    create_task("t_pya_9", "Matplotlib & Seaborn Visualizations", "Bar charts, histograms, box plots, scatter plots, correlation heatmaps.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_pya_10", "End-to-End Business EDA Walkthrough", "Formulating hypotheses, detecting anomalies, summarizing findings in Jupyter.", "Not Started", "2026-09-25", est=3)
]

da_stats_tasks = [
    create_task("t_sta_1", "Measures of Central Tendency & Dispersion", "Mean, median, mode, range, variance, standard deviation, quartiles, IQR.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_sta_2", "Probability Rules & Bayes Theorem", "Conditional probability, independence, prior and posterior probabilities.", "Completed", "2026-09-19", est=2.5, actual=2.5, comp_date="2026-09-19"),
    create_task("t_sta_3", "Distributions: Normal, Binomial, Poisson & Uniform", "Bell curves, 68-95-99.7 empirical rule, discrete vs continuous.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_sta_4", "Sampling & Central Limit Theorem", "Standard error, population vs sample, confidence intervals.", "Not Started", "2026-09-22", est=2),
    create_task("t_sta_5", "Hypothesis Testing: Null/Alt, P-Values & Errors", "Significance level (alpha), p-value interpretation, Type I vs Type II errors.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_sta_6", "T-tests, Chi-Square & ANOVA", "One-sample/two-sample t-test, categorical independence, variance comparison.", "Not Started", "2026-09-24", est=3),
    create_task("t_sta_7", "Correlation, Covariance & Regression Intuition", "Pearson vs Spearman, correlation vs causation, line of best fit.", "Not Started", "2026-09-25", est=2),
    create_task("t_sta_8", "A/B Testing Framework for Analytics", "Sample size determination, test duration, metric lift, statistical power.", "Not Started", "2026-09-26", est=2.5)
]

da_biz_tasks = [
    create_task("t_ba_1", "Defining Business Problems & KPI Trees", "Translating executive questions into measurable data metrics (CAC, LTV, ARR).", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_ba_2", "Revenue, Profitability & Margin Analysis", "Gross margin, net margin, contribution margin, COGS breakdown.", "Not Started", "2026-09-21", est=2),
    create_task("t_ba_3", "Customer Segmentation & RFM Analysis", "Recency, frequency, monetary value segment mapping.", "Not Started", "2026-09-22", est=2.5),
    create_task("t_ba_4", "Retention, Churn & Funnel Drop-off Analysis", "Top-of-funnel conversion, drop-off bottlenecks, cohort retention curves.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_ba_5", "Marketing, Product & Operational Analytics", "Channel attribution, feature adoption rate, SLA tracking.", "Not Started", "2026-09-24", est=2),
    create_task("t_ba_6", "Communicating Insights & Executive Storytelling", "Structuring presentations (SCQA framework), actionable recommendations.", "Not Started", "2026-09-25", est=2)
]

da_interview_tasks = [
    create_task("t_dai_1", "SQL Technical Interview Questions (Top 30)", "Live coding Joins, Window Functions, aggregation edge cases.", "In Progress", "2026-09-20", est=3, actual=1),
    create_task("t_dai_2", "Excel & Power BI Technical Interview Qs", "DAX evaluation order, XLOOKUP vs INDEX/MATCH, relationship issues.", "Not Started", "2026-09-27", est=2.5),
    create_task("t_dai_3", "Python Analytics Technical Interview Qs", "Pandas performance, missing data handling, vectorized logic.", "Not Started", "2026-09-28", est=2.5),
    create_task("t_dai_4", "Statistics & Business Case Study Questions", "Why did revenue drop 15% last week? Root cause analysis framework.", "Not Started", "2026-09-29", est=3),
    create_task("t_dai_5", "Behavioral Interview Prep & Project Defense", "STAR method: Situation, Task, Action, Result for portfolio projects.", "Not Started", "2026-09-30", est=2)
]

# Track 2: Data Science
ds_py_tasks = [
    create_task("t_dspy_1", "OOP in Python: Classes, Objects, Dunder Methods", "Encapsulation, inheritance, __init__, __str__, __repr__.", "Completed", "2026-09-17", est=2.5, actual=2.5, comp_date="2026-09-17"),
    create_task("t_dspy_2", "Comprehensions, Generators & Iterators", "Memory-efficient data pipelines using yield and generator expressions.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_dspy_3", "Modules, Packages & Virtual Environments", "venv, pip, requirements.txt, structuring clean reusable packages.", "Completed", "2026-09-19", est=1.5, actual=1.5, comp_date="2026-09-19"),
    create_task("t_dspy_4", "Clean Code Basics & Exception Handling", "PEP8, type hinting, custom exceptions, docstrings.", "In Progress", "2026-09-20", est=2, actual=1)
]

ds_np_pd_tasks = [
    create_task("t_ds_np_1", "NumPy Dimensions, Slicing & Reshaping", "Array shapes, flatten vs ravel, transpositions.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_ds_np_2", "Broadcasting & Vectorized Mathematical Operations", "Broadcasting rules, matrix multiplication (dot, @), universal functions.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_ds_pd_1", "Pandas DataFrames: Selection, Filtering & Transformations", "loc vs iloc, boolean conditions, query method.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_ds_pd_2", "Advanced GroupBy, Aggregations & Pivot Tables", "Multiple groupings, custom apply functions, pivot vs melt.", "In Progress", "2026-09-20", est=2.5, actual=1),
    create_task("t_ds_pd_3", "Missing Value Diagnostics & Efficient Operations", "Categorical dtypes, memory optimization, chunk processing.", "Not Started", "2026-09-22", est=2)
]

ds_stats_prob_tasks = [
    create_task("t_ds_st_1", "Random Variables, Expectation & Variance", "Discrete and continuous random variables, covariance matrix.", "Completed", "2026-09-17", est=2.5, actual=2.5, comp_date="2026-09-17"),
    create_task("t_ds_st_2", "Distributions: Normal, Binomial, Poisson & Exponential", "PDF, CDF, central limit theorem intuition and proof.", "Completed", "2026-09-18", est=2.5, actual=2.5, comp_date="2026-09-18"),
    create_task("t_ds_st_3", "Bayes' Theorem & Prior/Posterior Reasoning", "Likelihood, evidence, posterior odds in ML algorithms.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_ds_st_4", "Hypothesis Testing, P-Values, T-tests & ANOVA", "Null hypothesis testing, Type I/II error balance in model validation.", "Not Started", "2026-09-23", est=3)
]

ds_eda_tasks = [
    create_task("t_ds_eda_1", "Data Understanding & Missing Value Profiling", "MCAR vs MAR vs MNAR, missingness heatmaps.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_ds_eda_2", "Outlier Detection & Treatment", "Z-score method, IQR fencing, capping vs removal.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_ds_eda_3", "Univariate, Bivariate & Multivariate Analysis", "Histograms, pairplots, scatter matrices, hue breakdowns.", "Not Started", "2026-09-22", est=2.5),
    create_task("t_ds_eda_4", "Correlation & Feature Interaction Diagnostics", "Multicollinearity, VIF (Variance Inflation Factor), non-linear trends.", "Not Started", "2026-09-23", est=2.5)
]

ds_ml_tasks = [
    create_task("t_ds_ml_1", "Linear & Multiple Linear Regression", "Ordinary Least Squares (OLS), coefficients, assumptions.", "Completed", "2026-09-18", est=2.5, actual=2.5, comp_date="2026-09-18"),
    create_task("t_ds_ml_2", "Regularized Regression: Ridge (L2) & Lasso (L1)", "Penalty terms, preventing overfitting, feature selection via Lasso.", "In Progress", "2026-09-20", est=2.5, actual=1),
    create_task("t_ds_ml_3", "Logistic Regression & Odds Ratio", "Sigmoid function, log-loss, decision boundaries, probability outputs.", "Not Started", "2026-09-21", est=2.5),
    create_task("t_ds_ml_4", "K-Nearest Neighbors (KNN)", "Distance metrics (Euclidean, Manhattan), curse of dimensionality.", "Not Started", "2026-09-22", est=2),
    create_task("t_ds_ml_5", "Decision Trees & Splitting Criteria", "Gini impurity, Entropy, Information Gain, pruning strategies.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_ds_ml_6", "Random Forest & Bagging Ensembles", "Bootstrapping, feature sub-sampling, out-of-bag error.", "Not Started", "2026-09-24", est=3),
    create_task("t_ds_ml_7", "Naive Bayes Classifier", "Conditional independence assumption, Gaussian vs Multinomial NB.", "Not Started", "2026-09-25", est=2),
    create_task("t_ds_ml_8", "Gradient Boosting & XGBoost Basics", "Sequential error correction, learning rate, tree depth.", "Not Started", "2026-09-26", est=3.5),
    create_task("t_ds_ml_9", "K-Means Clustering & Elbow Method", "Centroid updates, inertia, silhouette score evaluation.", "Not Started", "2026-09-27", est=2.5),
    create_task("t_ds_ml_10", "Hierarchical Clustering & DBSCAN", "Dendrograms, density-based clustering, noise handling.", "Not Started", "2026-09-28", est=2.5),
    create_task("t_ds_ml_11", "PCA (Principal Component Analysis)", "Eigenvectors, eigenvalues, explained variance ratio.", "Not Started", "2026-09-29", est=3),
    create_task("t_ds_ml_12", "Bias-Variance Tradeoff & Overfitting Prevention", "Validation curves, train/test split, cross-validation.", "Need Revision", "2026-09-19", est=2, actual=2, rev_date="2026-09-21", notes="High bias = underfitting; high variance = overfitting.")
]

ds_fe_eval_tasks = [
    create_task("t_ds_fe_1", "Categorical Encoding (One-Hot, Ordinal, Target)", "Handling high cardinality, target encoding without data leakage.", "Not Started", "2026-09-24", est=2),
    create_task("t_ds_fe_2", "Feature Scaling: StandardScaler vs MinMaxScaler", "Distance-based vs tree-based algorithm sensitivity.", "Not Started", "2026-09-25", est=1.5),
    create_task("t_ds_fe_3", "Temporal, Interaction & Aggregated Features", "Extracting day-of-week, ratios, rolling statistics.", "Not Started", "2026-09-26", est=2),
    create_task("t_ds_fe_4", "Scikit-Learn Pipelines & ColumnTransformers", "Bundling preprocessing and modeling without test set contamination.", "Not Started", "2026-09-27", est=2.5),
    create_task("t_ds_ev_1", "Regression Metrics: MAE, MSE, RMSE, R²", "Penalizing large errors, interpretation against business baseline.", "Not Started", "2026-09-28", est=2),
    create_task("t_ds_ev_2", "Classification: Confusion Matrix, Precision, Recall, F1", "Cost of False Positives vs False Negatives in real deployments.", "Not Started", "2026-09-29", est=2.5),
    create_task("t_ds_ev_3", "ROC-AUC & Precision-Recall Curve", "Threshold-independent evaluation, imbalanced dataset dynamics.", "Not Started", "2026-09-30", est=2.5),
    create_task("t_ds_ev_4", "K-Fold & Stratified K-Fold Cross-Validation", "Stable validation splits, avoiding optimistic bias.", "Not Started", "2026-10-01", est=2)
]

ds_adv_ml_tasks = [
    create_task("t_ds_adv_1", "LightGBM & CatBoost Architecture Awareness", "Leaf-wise vs depth-wise splitting, categorical feature support.", "Not Started", "2026-10-02", est=2.5),
    create_task("t_ds_adv_2", "Imbalanced Data: Class Weights & SMOTE", "Synthetic minority oversampling, threshold adjustment.", "Not Started", "2026-10-03", est=2.5),
    create_task("t_ds_adv_3", "Model Interpretability: Feature Importance & SHAP", "Global vs local explanations, Shapley values intuition.", "Not Started", "2026-10-04", est=3),
    create_task("t_ds_adv_4", "Production ML Considerations & Data Leakage", "Model serialization (joblib/pickle), concept drift, serving APIs.", "Not Started", "2026-10-05", est=2.5)
]

ds_interview_tasks = [
    create_task("t_dsi_1", "ML Algorithms Deep Dive: Under the Hood", "Deriving gradient descent, tree split mechanics, logistic loss.", "Not Started", "2026-10-06", est=3),
    create_task("t_dsi_2", "Probability & Statistics Interview Questions", "A/B test sample size calculation, coin flip puzzles, CLT.", "Not Started", "2026-10-07", est=2.5),
    create_task("t_dsi_3", "End-to-End Machine Learning Case Studies", "Design a recommendation system, churn model, or fraud detector.", "Not Started", "2026-10-08", est=3),
    create_task("t_dsi_4", "Behavioral & Portfolio Project Defense", "Explaining ML project trade-offs, metrics chosen, and business ROI.", "Not Started", "2026-10-09", est=2)
]

# Track 3: Mass Hiring
mh_quant_tasks = [
    create_task("t_qa_1", "Number System, HCF & LCM", "Divisibility rules, unit digits, remainders, factorials.", "Completed", "2026-09-16", est=2, actual=2, comp_date="2026-09-16"),
    create_task("t_qa_2", "Percentages, Ratio & Proportion, Averages", "Base changes, successive % change, mixtures, weighted averages.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_qa_3", "Profit, Loss & Discount", "Cost price, marked price, successive discounts, dishonest dealer.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_qa_4", "Simple Interest & Compound Interest", "Annual/semi-annual compounding, difference between CI and SI.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_qa_5", "Time and Work, Pipes & Cisterns", "Efficiency method, alternate working days, negative work.", "Not Started", "2026-09-21", est=2.5),
    create_task("t_qa_6", "Time, Speed & Distance, Trains & Boats", "Relative speed, upstream/downstream, circular tracks.", "Not Started", "2026-09-22", est=2.5),
    create_task("t_qa_7", "Algebra, Equations & Series", "Linear/quadratic equations, AP, GP, algebraic identities.", "Not Started", "2026-09-23", est=2),
    create_task("t_qa_8", "Permutation, Combination & Probability", "Selections, arrangements with constraints, dice/cards problems.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_qa_9", "Geometry, Mensuration & Mixtures", "2D/3D area and volume, alligation cross method.", "Not Started", "2026-09-25", est=2),
    create_task("t_qa_10", "Data Interpretation (Tables, Bar, Line & Pie Charts)", "Fast percentage calculations, index numbers, ratio analysis.", "Not Started", "2026-09-26", est=2.5)
]

mh_reasoning_tasks = [
    create_task("t_lr_1", "Number & Letter Series, Coding-Decoding", "Pattern detection, shift ciphers, alphabet positions.", "Completed", "2026-09-16", est=2, actual=2, comp_date="2026-09-16"),
    create_task("t_lr_2", "Blood Relations & Direction Sense", "Family trees, coded relations, distance and angle tracking.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_lr_3", "Analogy & Classification", "Word relationships, odd-one-out, symbolic categorization.", "Completed", "2026-09-18", est=1.5, actual=1.5, comp_date="2026-09-18"),
    create_task("t_lr_4", "Syllogisms & Statement-Conclusion", "Venn diagram method, affirmative vs negative conclusions.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_lr_5", "Data Sufficiency & Decision Tables", "Checking if statements 1 or 2 suffice, condition matrices.", "Not Started", "2026-09-22", est=2),
    create_task("t_lr_6", "Seating Arrangement: Linear & Circular", "Facing center vs outward, complex conditions.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_lr_7", "Puzzles & Pattern Recognition", "Grid solving, attribute matching, non-verbal matrices.", "Not Started", "2026-09-24", est=2.5)
]

mh_verbal_tasks = [
    create_task("t_va_1", "Reading Comprehension Strategies", "Skimming, finding tone, central idea, inference questions.", "Completed", "2026-09-18", est=2, actual=2, comp_date="2026-09-18"),
    create_task("t_va_2", "Grammar Rules: Subject-Verb Agreement, Tenses, Articles", "Singular/plural traps, conditional tenses, definite articles.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_va_3", "Prepositions, Conjunctions & Active/Passive Voice", "Appropriate prepositions, voice conversion rules.", "Not Started", "2026-09-22", est=2),
    create_task("t_va_4", "Vocabulary, Synonyms, Antonyms & Error Detection", "High-frequency exam words, identifying grammatical flaws.", "Not Started", "2026-09-23", est=2),
    create_task("t_va_5", "Sentence Correction, Fill in the Blanks & Para Jumbles", "Mandatory pairs, pronoun antecedents, contextual fit.", "Not Started", "2026-09-24", est=2)
]

mh_programming_tasks = [
    create_task("t_mp_1", "Programming Fundamentals & Common Coding Patterns", "Variables, nested loops, conditional logic in Python/C++.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_mp_2", "Array & String Manipulation for MCQ/Coding Rounds", "Reverse string, count vowels, find duplicates, check anagram.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_mp_3", "Basic Algorithms: Searching & Sorting MCQs", "Linear/binary search passes, bubble/insertion sort swaps.", "Not Started", "2026-09-23", est=2),
    create_task("t_mp_4", "Python Basics vs C/C++/Java Awareness", "Pointers, memory management, garbage collection, compile vs interpret.", "Not Started", "2026-09-24", est=2)
]

mh_sql_tasks = [
    create_task("t_msq_1", "SQL Fundamentals, CRUD & Filtering for Assessments", "SELECT, INSERT, UPDATE, DELETE, WHERE conditions.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_msq_2", "Aggregation, GROUP BY, HAVING & Joins", "Standard assessment queries: 2nd highest salary, unlinked records.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_msq_3", "Subqueries, Constraints & Keys", "Primary, foreign, unique, check constraints, subquery MCQs.", "Not Started", "2026-09-25", est=2)
]

mh_cs_core_tasks = [
    create_task("t_cs_1", "DBMS: Keys, Normalization (1NF-3NF) & ACID", "Primary/foreign keys, BCNF, Atomicity, Consistency, Isolation, Durability.", "Completed", "2026-09-18", est=2.5, actual=2.5, comp_date="2026-09-18"),
    create_task("t_cs_2", "ER Diagrams, Relationships & SQL vs NoSQL", "1:1, 1:N, M:N relationships, document vs relational stores.", "Not Started", "2026-09-24", est=2),
    create_task("t_cs_3", "OOP: Encapsulation, Abstraction, Inheritance & Polymorphism", "Overloading vs overriding, abstract classes, interfaces, constructors.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_cs_4", "Data Structures Fundamentals for MCQs", "Arrays, linked lists, stacks, queues, binary trees, hash tables.", "Not Started", "2026-09-25", est=2.5),
    create_task("t_cs_5", "Operating Systems: Processes, Threads, Scheduling & Deadlocks", "Process states, scheduling (SJF, Round Robin), Coffman conditions, paging.", "In Progress", "2026-09-20", est=2.5, actual=1),
    create_task("t_cs_6", "Computer Networks: OSI Model, TCP/IP, DNS & HTTP/HTTPS", "Layer duties, 3-way handshake, TCP vs UDP, status codes.", "Not Started", "2026-09-26", est=2.5),
    create_task("t_cs_7", "Computer Fundamentals, SDLC, Git & GitHub", "Hardware/software, Agile sprint lifecycle, Git commit/push/branch.", "Not Started", "2026-09-27", est=2),
    create_task("t_cs_8", "Cloud Basics: IaaS, PaaS, SaaS & AWS/Azure/GCP Overview", "Cloud deployment models, shared responsibility, cloud advantages.", "Not Started", "2026-09-28", est=1.5),
    create_task("t_cs_9", "Professional Communication, Essay Writing & HR Prep", "TCS/Wipro essay framework, project storytelling, behavioral readiness.", "Not Started", "2026-09-29", est=2)
]

# Track 4: DSA
dsa_complexity_tasks = [
    create_task("t_dsa_1", "Big O, Omega, Theta Notations & Growth Rates", "Comparing O(1), O(log N), O(N), O(N log N), O(N^2), O(2^N).", "Completed", "2026-09-16", est=1.5, actual=1.5, comp_date="2026-09-16"),
    create_task("t_dsa_2", "Time Complexity Analysis of Loops & Recursion", "Counting iterations, recurrence relation intuition.", "Completed", "2026-09-17", est=2, actual=2, comp_date="2026-09-17"),
    create_task("t_dsa_3", "Space Complexity & Auxiliary Memory", "In-place algorithms vs extra data structures, call stack memory.", "Completed", "2026-09-18", est=1.5, actual=1.5, comp_date="2026-09-18")
]

dsa_arrays_tasks = [
    create_task("t_dsa_4", "Array Traversal, Insertion & Deletion Mechanics", "Static vs dynamic arrays, memory layout, amortized resizing.", "Completed", "2026-09-18", est=1.5, actual=1.5, comp_date="2026-09-18"),
    create_task("t_dsa_5", "Prefix Sum & Range Sum Queries", "Precomputing cumulative sums to answer subarray queries in O(1).", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_dsa_6", "Kadane's Algorithm: Maximum Subarray Sum", "Dynamic programming intuition for maximum contiguous subarray.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_dsa_7", "Dutch National Flag Algorithm (Sort 0s, 1s, 2s)", "Three-pointer in-place partition technique.", "Not Started", "2026-09-22", est=2)
]

dsa_strings_tasks = [
    create_task("t_dsa_8", "Palindrome Checking & String Inversion", "Two pointers moving inward, case and non-alphanumeric handling.", "Completed", "2026-09-19", est=1.5, actual=1.5, comp_date="2026-09-19"),
    create_task("t_dsa_9", "Valid Anagram & Character Frequency Hashing", "Counting frequencies using array maps or hash tables.", "In Progress", "2026-09-20", est=2, actual=1),
    create_task("t_dsa_10", "Longest Common Prefix & Substring Matching Basics", "Horizontal/vertical scanning, substring extraction.", "Not Started", "2026-09-23", est=2)
]

dsa_hash_tasks = [
    create_task("t_dsa_11", "Hash Map & Hash Set Fundamentals", "Collision handling, hash functions, load factor, O(1) average lookup.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_dsa_12", "Two Sum Problem using Hash Map", "O(N) single pass lookup of target complement.", "Completed", "2026-09-19", est=2, actual=2, comp_date="2026-09-19"),
    create_task("t_dsa_13", "Subarray Sum Equals K", "Prefix sum with hash map of prefix frequencies.", "In Progress", "2026-09-20", est=2.5, actual=1)
]

dsa_ll_tasks = [
    create_task("t_dsa_14", "Singly Linked List Implementation & Reversal", "Iterative and recursive linked list reversal.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_dsa_15", "Detect Cycle in Linked List (Floyd's Tortoise & Hare)", "Fast and slow pointer rendezvous, finding cycle start.", "Not Started", "2026-09-25", est=2),
    create_task("t_dsa_16", "Merge Two Sorted Linked Lists & Middle of List", "Dummy node technique, pointer manipulation.", "Not Started", "2026-09-26", est=2)
]

dsa_stack_queue_tasks = [
    create_task("t_dsa_17", "Valid Parentheses Problem using Stack", "Matching opening and closing brackets, boundary checks.", "Not Started", "2026-09-27", est=2),
    create_task("t_dsa_18", "Next Greater Element (Monotonic Stack)", "Traversing right-to-left with stack to find next greater item in O(N).", "Not Started", "2026-09-28", est=2.5),
    create_task("t_dsa_19", "Implement Queue using Stacks & Min Stack Design", "Amortized O(1) operations, tracking current minimum.", "Not Started", "2026-09-29", est=2)
]

dsa_recursion_tasks = [
    create_task("t_dsa_20", "Recursion Fundamentals & Call Stack Visualization", "Base condition, recursive leap of faith, subsets problem.", "Not Started", "2026-09-27", est=2),
    create_task("t_dsa_21", "Permutations & Combinations Recursion", "Backtracking tree, state restoration, boolean visited array.", "Not Started", "2026-09-28", est=2.5)
]

dsa_sort_search_tasks = [
    create_task("t_dsa_22", "Binary Search: Lower Bound, Upper Bound", "Dividing search space in half, avoiding integer overflow.", "Not Started", "2026-09-28", est=2.5),
    create_task("t_dsa_23", "Search in Rotated Sorted Array", "Determining which half is sorted, adjusted binary conditions.", "Not Started", "2026-09-29", est=2.5),
    create_task("t_dsa_24", "Merge Sort Algorithm & Analysis", "Divide, sort, merge halves, O(N log N) guarantee, O(N) auxiliary space.", "Not Started", "2026-09-30", est=2.5),
    create_task("t_dsa_25", "Quick Sort & Partitioning Logic", "Lomuto vs Hoare partition, pivot choice, worst-case handling.", "Not Started", "2026-10-01", est=2.5)
]

dsa_pointers_window_tasks = [
    create_task("t_dsa_26", "Two Pointers: Container With Most Water & 3Sum", "Greedy pointer shifting based on height bottlenecks.", "Not Started", "2026-09-23", est=2.5),
    create_task("t_dsa_27", "Sliding Window: Longest Substring Without Repeating", "Dynamic window expansion and contraction with hash set.", "Not Started", "2026-09-24", est=2.5),
    create_task("t_dsa_28", "Fixed-Size Sliding Window: Max Subarray of Size K", "Maintaining rolling sum by adding incoming and subtracting outgoing.", "Not Started", "2026-09-25", est=2)
]

dsa_trees_heap_tasks = [
    create_task("t_dsa_29", "Binary Tree Traversals: DFS (In/Pre/Post) & BFS", "Recursive DFS, iterative Level Order traversal using queue.", "Not Started", "2026-10-02", est=2.5),
    create_task("t_dsa_30", "Maximum Depth & Diameter of Binary Tree", "Height calculations, longest path between any two nodes.", "Not Started", "2026-10-03", est=2.5),
    create_task("t_dsa_31", "Binary Search Tree: Search, Insert & Validate BST", "BST ordering property, range verification (-inf, +inf).", "Not Started", "2026-10-04", est=2.5),
    create_task("t_dsa_32", "Min Heap, Max Heap & Kth Largest Element", "Heapify, priority queue operations, top-K pattern.", "Not Started", "2026-10-05", est=2.5)
]

dsa_graphs_dp_tasks = [
    create_task("t_dsa_33", "Graph Representation & BFS/DFS Traversal", "Adjacency lists, visited sets, connected components.", "Not Started", "2026-10-06", est=3),
    create_task("t_dsa_34", "Cycle Detection in Undirected Graph", "DFS with parent tracking or BFS with queue.", "Not Started", "2026-10-07", est=2.5),
    create_task("t_dsa_35", "Greedy Strategy: Activity Selection & Jump Game", "Locally optimal choices leading to global optimum.", "Not Started", "2026-10-08", est=2),
    create_task("t_dsa_36", "Dynamic Programming: Memoization vs Tabulation", "Overlapping subproblems, optimal substructure, Fibonacci, Climbing Stairs.", "Not Started", "2026-10-09", est=2.5),
    create_task("t_dsa_37", "1D DP: House Robber Problem", "State transition: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).", "Not Started", "2026-10-10", est=2.5),
    create_task("t_dsa_38", "0/1 Knapsack & Coin Change DP Basics", "Include vs exclude decision matrix, 2D to 1D space optimization.", "Not Started", "2026-10-11", est=3)
]

def make_subject(sid, name, desc, topics_spec):
    topics = []
    for top_id, top_name, subtop_id, subtop_name, task_list in topics_spec:
        topics.append({
            "id": top_id,
            "name": top_name,
            "subtopics": [
                {
                    "id": subtop_id,
                    "name": subtop_name,
                    "tasks": task_list
                }
            ]
        })
    return {
        "id": sid,
        "name": name,
        "description": desc,
        "topics": topics
    }

tracks = [
    {
        "id": "track_analytics",
        "name": "Data Analytics",
        "description": "SQL, Excel, Power BI, Python for Analytics, Statistics, Business Case Studies & Projects.",
        "color": "#3b82f6",
        "icon": "bar-chart-3",
        "order": 1,
        "subjects": [
            make_subject("da_sql", "SQL", "Relational database querying, joins, aggregations, window functions, and business queries.", [
                ("top_sql_fund", "SQL Fundamentals & Joins", "sub_sql_1", "Core Querying & Relational Joins", da_sql_tasks[:11]),
                ("top_sql_adv", "Advanced SQL & Business Analytics", "sub_sql_2", "Subqueries, Window Functions & Retention", da_sql_tasks[11:])
            ]),
            make_subject("da_excel", "Excel", "Spreadsheet mastery, advanced formulas, text & date functions, pivot tables, and dashboards.", [
                ("top_ex_core", "Formulas & Functions", "sub_ex_1", "Logical, Lookup & Text Functions", da_excel_tasks[:7]),
                ("top_ex_bi", "Pivots & Modern Excel", "sub_ex_2", "Pivot Dashboards & Power Query", da_excel_tasks[7:])
            ]),
            make_subject("da_powerbi", "Power BI", "ETL with Power Query, star schema modeling, DAX measures, and executive dashboards.", [
                ("top_pbi_etl", "Data Ingestion & Modeling", "sub_pbi_1", "Power Query & Star Schema", da_pbi_tasks[:4]),
                ("top_pbi_dax", "DAX & Dashboard Design", "sub_pbi_2", "Time Intelligence & Storytelling", da_pbi_tasks[4:])
            ]),
            make_subject("da_python", "Python for Analytics", "Python fundamentals, NumPy arrays, Pandas DataFrames, and Matplotlib/Seaborn visualization.", [
                ("top_pya_core", "Language Foundations", "sub_pya_1", "Variables, Data Structures & Functions", da_py_tasks[:4]),
                ("top_pya_data", "Pandas & Visualization", "sub_pya_2", "Wrangling, EDA & Matplotlib/Seaborn", da_py_tasks[4:])
            ]),
            make_subject("da_stats", "Statistics", "Descriptive statistics, distributions, hypothesis testing, ANOVA, and A/B testing.", [
                ("top_sta_desc", "Descriptive & Distributions", "sub_sta_1", "Summary Metrics & Probability", da_stats_tasks[:3]),
                ("top_sta_inf", "Inferential & Experiments", "sub_sta_2", "Hypothesis Tests & A/B Testing", da_stats_tasks[3:])
            ]),
            make_subject("da_biz", "Business Analytics", "Business framing, KPIs, revenue analysis, churn, and executive presentations.", [
                ("top_biz_core", "Business Problem Solving", "sub_biz_1", "Metrics, Retention & Cohort Analysis", da_biz_tasks)
            ]),
            make_subject("da_interview", "Interview Preparation", "Technical questions, case studies, and behavioral interview defense for Analyst roles.", [
                ("top_dai_core", "Analyst Interview Readiness", "sub_dai_1", "SQL, BI, Python & Case Studies", da_interview_tasks)
            ])
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
            make_subject("ds_python", "Python", "Advanced Python, OOP, clean code, virtual environments, and modules.", [
                ("top_dspy", "Advanced Python & Software Engineering", "sub_dspy", "OOP, Generators, Clean Code", ds_py_tasks)
            ]),
            make_subject("ds_numpy_pandas", "NumPy & Pandas", "Vectorized computing, reshaping, broadcasting, and advanced DataFrame operations.", [
                ("top_ds_wrangling", "Vectorized Data Wrangling", "sub_ds_np_pd", "Arrays, GroupBy & Missing Values", ds_np_pd_tasks)
            ]),
            make_subject("ds_stats_prob", "Statistics & Probability", "Mathematical foundations: random variables, Bayes theorem, distributions, and hypothesis tests.", [
                ("top_ds_statprob", "Mathematical Foundations", "sub_ds_sp", "Expectation, Distributions & Testing", ds_stats_prob_tasks)
            ]),
            make_subject("ds_eda", "EDA", "Exploratory data analysis, distributions, outlier detection, and correlation analysis.", [
                ("top_ds_eda", "EDA Framework", "sub_ds_eda", "Diagnostics, Outliers & Feature Trends", ds_eda_tasks)
            ]),
            make_subject("ds_ml", "Machine Learning", "Supervised regression, classification, unsupervised clustering, PCA, and validation.", [
                ("top_ds_ml_regclf", "Supervised ML", "sub_ds_ml_1", "Regression & Classification Algorithms", ds_ml_tasks[:8]),
                ("top_ds_ml_unsup", "Unsupervised ML & Validation", "sub_ds_ml_2", "Clustering, PCA & Bias-Variance", ds_ml_tasks[8:])
            ]),
            make_subject("ds_fe_eval", "Feature Engineering & Model Evaluation", "Encoding, scaling, transformations, pipelines, ROC-AUC, F1, and cross-validation.", [
                ("top_ds_fe", "Feature Pipelines", "sub_ds_fe", "Encoding, Scaling & Pipelines", ds_fe_eval_tasks[:4]),
                ("top_ds_ev", "Evaluation Metrics", "sub_ds_ev", "Metrics, Curves & Validation", ds_fe_eval_tasks[4:])
            ]),
            make_subject("ds_adv_ml", "Advanced ML & Production", "Boosting (XGBoost, LightGBM), SHAP interpretability, SMOTE, and production considerations.", [
                ("top_ds_adv", "Production ML & Interpretability", "sub_ds_adv", "Ensembles, SHAP & Imbalance", ds_adv_ml_tasks)
            ]),
            make_subject("ds_interview", "Interview Preparation", "ML algorithm deep-dives, probability questions, and end-to-end case studies.", [
                ("top_dsi", "Data Science Interviews", "sub_dsi", "Theory, Algorithms & Case Studies", ds_interview_tasks)
            ])
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
            make_subject("mh_quant", "Quantitative Aptitude", "Number systems, percentages, ratios, profit/loss, time & work, geometry, and DI.", [
                ("top_mh_qa", "Aptitude Foundations", "sub_mh_qa", "Arithmetic, Algebra & Modern Math", mh_quant_tasks)
            ]),
            make_subject("mh_reasoning", "Logical Reasoning", "Series, coding-decoding, blood relations, syllogisms, and seating arrangements.", [
                ("top_mh_lr", "Logical & Analytical Reasoning", "sub_mh_lr", "Deductive, Verbal & Analytical Reasoning", mh_reasoning_tasks)
            ]),
            make_subject("mh_verbal", "Verbal Ability", "Reading comprehension, vocabulary, grammar rules, error spotting, and para jumbles.", [
                ("top_mh_va", "Verbal English Ability", "sub_mh_va", "Grammar, Vocabulary & Comprehension", mh_verbal_tasks)
            ]),
            make_subject("mh_prog_sql", "Programming & SQL", "Syntax fundamentals, loops, arrays, strings, basic algorithms, and assessment SQL.", [
                ("top_mh_code", "Assessment Coding & SQL", "sub_mh_code", "Control Flow, Arrays & Relational Queries", mh_programming_tasks + mh_sql_tasks)
            ]),
            make_subject("mh_cs_core", "Computer Science Core", "DBMS, Normalization, OOP 4 pillars, OS processes, Networks, Cloud, and Communication.", [
                ("top_mh_cs", "Core Computer Science & HR", "sub_mh_cs", "OS, Networks, Cloud & Professional Communication", mh_cs_core_tasks)
            ])
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
            make_subject("dsa_complexity", "Complexity", "Big O notation, time complexity, space complexity, and algorithmic performance.", [
                ("top_dsa_cpx", "Big O Foundations", "sub_dsa_cpx", "Asymptotic Analysis & Stack Memory", dsa_complexity_tasks)
            ]),
            make_subject("dsa_arrays_strings", "Arrays & Strings", "Array traversal, prefix sum, Kadane's algorithm, Dutch flag, and string patterns.", [
                ("top_dsa_arr_str", "Arrays & String Techniques", "sub_dsa_as", "Kadane, Prefix Sum, Palindrome, Anagrams", dsa_arrays_tasks + dsa_strings_tasks)
            ]),
            make_subject("dsa_hash_pointers", "Hashing, Two Pointers & Sliding Window", "Hash maps/sets, pair sums, opposite pointers, and sliding window patterns.", [
                ("top_dsa_hp_sw", "Window & Lookup Patterns", "sub_dsa_hsw", "Two Sum, K-Subarray, Sliding Window", dsa_hash_tasks + dsa_pointers_window_tasks)
            ]),
            make_subject("dsa_linear", "Linked Lists, Stack & Queue", "Singly/doubly linked lists, cycle detection, LIFO stack, Next Greater Element, and queue.", [
                ("top_dsa_lsq", "Linear Data Structures", "sub_dsa_lsq", "Linked Lists, Stack, Monotonic Stack & Queue", dsa_ll_tasks + dsa_stack_queue_tasks)
            ]),
            make_subject("dsa_search_sort", "Recursion, Sorting & Searching", "Recursive call stacks, Merge Sort, Quick Sort, and Binary Search variants.", [
                ("top_dsa_rss", "Divide & Conquer, Search", "sub_dsa_rss", "Binary Search, Merge Sort, Quick Sort, Subsets", dsa_recursion_tasks + dsa_sort_search_tasks)
            ]),
            make_subject("dsa_trees_heap", "Trees, BST & Heap", "Binary tree traversals (DFS/BFS), BST validation, Heap, and Priority Queue.", [
                ("top_dsa_tbh", "Hierarchical Structures", "sub_dsa_tbh", "Traversals, Depth, BST & Top-K Heap", dsa_trees_heap_tasks)
            ]),
            make_subject("dsa_graphs_dp", "Graphs, Greedy & Dynamic Programming", "Graph BFS/DFS, cycle detection, greedy choices, memoization, and core DP.", [
                ("top_dsa_ggd", "Advanced Paradigms", "sub_dsa_ggd", "Graph Traversal, Greedy & 1D Dynamic Programming", dsa_graphs_dp_tasks)
            ])
        ]
    }
]

# Projects
projects = [
    {
        "id": "proj_da_1",
        "category": "Data Analytics",
        "name": "LendX Finance Loan Portfolio Analysis",
        "description": "Comprehensive loan default risk, debt-to-income distribution, and portfolio yield analysis across 50,000+ customer records.",
        "status": "In Progress",
        "tools": ["SQL", "Power BI", "Excel"],
        "githubUrl": "https://github.com/example/lendx-finance-analytics",
        "dashboardUrl": "https://app.powerbi.com/view?r=example-lendx",
        "notebookUrl": "",
        "datasetUrl": "https://www.kaggle.com/datasets/example/loan-risk-dataset",
        "reportUrl": "",
        "notes": "Calculated non-performing loan (NPL) rates, delinquency buckets, and interest income forecasts.",
        "checklist": [
            {"id": "cl_p1_1", "text": "Clean raw borrower records & validate loan status codes", "completed": True},
            {"id": "cl_p1_2", "text": "Build SQL views for loan vintage and default rate calculations", "completed": True},
            {"id": "cl_p1_3", "text": "Design Power BI executive summary with delinquency waterfall", "completed": False},
            {"id": "cl_p1_4", "text": "Publish interactive report & document business takeaways", "completed": False}
        ]
    },
    {
        "id": "proj_da_2",
        "category": "Data Analytics",
        "name": "Customer Transaction SQL & ERD Architecture",
        "description": "Normalized multi-table retail transactional database schema (3NF) with optimized indexing and complex business query performance.",
        "status": "Completed",
        "tools": ["PostgreSQL", "ERD Design", "SQL"],
        "githubUrl": "https://github.com/example/customer-transaction-erd",
        "dashboardUrl": "",
        "notebookUrl": "",
        "datasetUrl": "https://github.com/example/retail-sql-seed",
        "reportUrl": "https://example.com/erd-documentation.pdf",
        "notes": "Designed tables for customers, orders, order_items, products, and payments. Solved recursive referral query.",
        "checklist": [
            {"id": "cl_p2_1", "text": "Create conceptual and physical ER diagram", "completed": True},
            {"id": "cl_p2_2", "text": "Implement DDL with foreign keys, constraints & indexes", "completed": True},
            {"id": "cl_p2_3", "text": "Write 20 complex business analytics queries with CTEs & Window functions", "completed": True},
            {"id": "cl_p2_4", "text": "Analyze query performance with EXPLAIN ANALYZE", "completed": True}
        ]
    },
    {
        "id": "proj_da_3",
        "category": "Data Analytics",
        "name": "Cartly E-Commerce Python EDA",
        "description": "In-depth exploratory analysis on e-commerce transaction logs to identify seasonal sales trends, customer churn triggers, and product affinity.",
        "status": "Completed",
        "tools": ["Python", "Pandas", "Seaborn", "Jupyter"],
        "githubUrl": "https://github.com/example/cartly-ecommerce-eda",
        "dashboardUrl": "",
        "notebookUrl": "https://github.com/example/cartly-ecommerce-eda/blob/main/EDA.ipynb",
        "datasetUrl": "https://www.kaggle.com/datasets/example/cartly-ecommerce",
        "reportUrl": "",
        "notes": "Uncovered that 68% of repeat purchases happen within 14 days of the initial order.",
        "checklist": [
            {"id": "cl_p3_1", "text": "Ingest and inspect 1.2M e-commerce event rows", "completed": True},
            {"id": "cl_p3_2", "text": "Handle missing user location data and fix price outliers", "completed": True},
            {"id": "cl_p3_3", "text": "Calculate customer lifetime value and average order value (AOV)", "completed": True},
            {"id": "cl_p3_4", "text": "Create Seaborn visualizations and executive insight deck", "completed": True}
        ]
    },
    {
        "id": "proj_da_4",
        "category": "Data Analytics",
        "name": "99Acres Real Estate Price Intelligence",
        "description": "Interactive Excel pricing and valuation intelligence model using advanced XLOOKUP, dynamic array formulas, and slicer-driven pivot dashboards.",
        "status": "In Progress",
        "tools": ["Excel", "Power Query", "Data Modeling"],
        "githubUrl": "",
        "dashboardUrl": "",
        "notebookUrl": "",
        "datasetUrl": "https://www.kaggle.com/datasets/example/99acres-property-data",
        "reportUrl": "",
        "notes": "Modeled price per square foot trends across tier-1 and tier-2 metro areas.",
        "checklist": [
            {"id": "cl_p4_1", "text": "Extract and clean multi-city listing data with Power Query", "completed": True},
            {"id": "cl_p4_2", "text": "Build dynamic valuation model with nested IFS and XLOOKUP", "completed": True},
            {"id": "cl_p4_3", "text": "Create KPI summary dashboard with custom property type slicers", "completed": False},
            {"id": "cl_p4_4", "text": "Finalize documentation and summary sheet", "completed": False}
        ]
    },
    {
        "id": "proj_da_5",
        "category": "Data Analytics",
        "name": "Meta Ads Marketing ROI & Funnel Dashboard",
        "description": "Multi-channel advertising performance tracking, calculating ROAS, CAC, CTR, and conversion drop-offs across ad creatives.",
        "status": "Not Started",
        "tools": ["Power BI", "DAX", "SQL"],
        "githubUrl": "",
        "dashboardUrl": "",
        "notebookUrl": "",
        "datasetUrl": "",
        "reportUrl": "",
        "notes": "Tracking return on ad spend (ROAS) and cost per acquisition (CPA).",
        "checklist": [
            {"id": "cl_p5_1", "text": "Consolidate campaign and adset level metrics", "completed": False},
            {"id": "cl_p5_2", "text": "Implement DAX measures for blended CAC and ROAS", "completed": False},
            {"id": "cl_p5_3", "text": "Design funnel conversion waterfall in Power BI", "completed": False}
        ]
    },
    {
        "id": "proj_da_6",
        "category": "Data Analytics",
        "name": "HR Workforce Attrition & Diversity Dashboard",
        "description": "People analytics dashboard evaluating attrition drivers, salary equity, department tenure, and promotion velocity.",
        "status": "Completed",
        "tools": ["Power BI", "DAX", "Excel"],
        "githubUrl": "https://github.com/example/hr-workforce-analytics",
        "dashboardUrl": "https://app.powerbi.com/view?r=example-hr",
        "notebookUrl": "",
        "datasetUrl": "https://www.kaggle.com/datasets/example/ibm-hr-analytics",
        "reportUrl": "",
        "notes": "Identified overtime and years under current manager as top factors for employee turnover.",
        "checklist": [
            {"id": "cl_p6_1", "text": "Clean HR census data and standardize compensation bands", "completed": True},
            {"id": "cl_p6_2", "text": "Calculate attrition rate DAX measures with time intelligence", "completed": True},
            {"id": "cl_p6_3", "text": "Design interactive Power BI dashboard with department drilldown", "completed": True}
        ]
    },
    {
        "id": "proj_da_7",
        "category": "Data Analytics",
        "name": "Shopkart Retail Sales & Cohort Intelligence",
        "description": "Full-scale retail analytics platform analyzing customer cohorts, repurchase latency, and seasonal revenue variations using SQL and BI.",
        "status": "In Progress",
        "tools": ["SQL", "Power BI", "Python"],
        "githubUrl": "https://github.com/example/shopkart-retail-cohorts",
        "dashboardUrl": "",
        "notebookUrl": "https://github.com/example/shopkart-retail-cohorts/blob/main/cohorts.ipynb",
        "datasetUrl": "https://www.kaggle.com/datasets/example/retail-shopkart",
        "reportUrl": "",
        "notes": "Building cohort retention heatmap in Python and embedding it in Power BI report.",
        "checklist": [
            {"id": "cl_p7_1", "text": "Develop SQL monthly customer acquisition cohort queries", "completed": True},
            {"id": "cl_p7_2", "text": "Calculate repeat purchase rate and order latency", "completed": True},
            {"id": "cl_p7_3", "text": "Build cohort retention matrix in Python", "completed": False},
            {"id": "cl_p7_4", "text": "Create interactive sales drilldown dashboard in Power BI", "completed": False}
        ]
    },
    {
        "id": "proj_ds_1",
        "category": "Data Science",
        "name": "Customer Churn Prediction (Flagship ML Project)",
        "description": "End-to-end Machine Learning classification predicting subscription churn with XGBoost, SMOTE balancing, SHAP feature explainability, and actionable business ROI strategy.",
        "status": "In Progress",
        "tools": ["Python", "Scikit-Learn", "XGBoost", "SHAP", "Streamlit"],
        "githubUrl": "https://github.com/example/telecom-churn-prediction-ml",
        "dashboardUrl": "https://share.streamlit.io/example/telecom-churn-app",
        "notebookUrl": "https://github.com/example/telecom-churn-prediction-ml/blob/main/churn_model.ipynb",
        "datasetUrl": "https://www.kaggle.com/datasets/blastchar/telco-customer-churn",
        "reportUrl": "https://example.com/churn-recommendation-report.pdf",
        "notes": "Best model achieved 0.85 ROC-AUC using XGBoost with hyperparameter tuning. Top churn drivers: Month-to-month contracts and fiber optic tenure.",
        "checklist": [
            {"id": "cl_ds1_1", "text": "Problem Definition & Business Objective Formulation", "completed": True},
            {"id": "cl_ds1_2", "text": "Dataset Acquisition & Schema Validation (7,043 customer rows)", "completed": True},
            {"id": "cl_ds1_3", "text": "Data Cleaning & TotalCharges Type Coercion / Imputation", "completed": True},
            {"id": "cl_ds1_4", "text": "Comprehensive Exploratory Data Analysis & Bivariate Churn Splits", "completed": True},
            {"id": "cl_ds1_5", "text": "Feature Engineering: One-Hot Encoding, Tenure Buckets & Scaling", "completed": True},
            {"id": "cl_ds1_6", "text": "Baseline Model Implementation (Logistic Regression benchmark)", "completed": True},
            {"id": "cl_ds1_7", "text": "Model Training & Comparison: Random Forest vs XGBoost vs LightGBM", "completed": False},
            {"id": "cl_ds1_8", "text": "Class Imbalance Treatment with SMOTE and class_weight adjustments", "completed": False},
            {"id": "cl_ds1_9", "text": "Hyperparameter Tuning with Stratified 5-Fold RandomizedSearchCV", "completed": False},
            {"id": "cl_ds1_10", "text": "Model Evaluation: Confusion Matrix, ROC-AUC, Recall & Cost Matrix", "completed": False},
            {"id": "cl_ds1_11", "text": "Model Interpretation using SHAP Summary and Force Plots", "completed": False},
            {"id": "cl_ds1_12", "text": "Formulate Actionable Retention Recommendations for Leadership", "completed": False},
            {"id": "cl_ds1_13", "text": "Build Interactive Streamlit Web App for Real-Time Churn Scoring", "completed": False},
            {"id": "cl_ds1_14", "text": "Finalize GitHub Repository README & Executive Presentation Slides", "completed": False}
        ]
    },
    {
        "id": "proj_ds_2",
        "category": "Data Science",
        "name": "Retail Sales Forecasting Model",
        "description": "Time-series forecasting model estimating store-level weekly demand, accounting for promotional holidays and seasonal patterns.",
        "status": "Not Started",
        "tools": ["Python", "Prophet", "Statsmodels", "Pandas"],
        "githubUrl": "",
        "dashboardUrl": "",
        "notebookUrl": "",
        "datasetUrl": "https://www.kaggle.com/c/walmart-recruiting-store-sales-forecasting",
        "reportUrl": "",
        "notes": "Testing ARIMA vs Prophet vs XGBoost with lag features.",
        "checklist": [
            {"id": "cl_ds2_1", "text": "Formulate time series problem & clean calendar data", "completed": False},
            {"id": "cl_ds2_2", "text": "Create lag features, rolling means & holiday indicators", "completed": False},
            {"id": "cl_ds2_3", "text": "Train Prophet and gradient boosting models", "completed": False},
            {"id": "cl_ds2_4", "text": "Evaluate forecast accuracy with WMAE and RMSE", "completed": False}
        ]
    },
    {
        "id": "proj_ds_3",
        "category": "Data Science",
        "name": "Customer Segmentation & Persona Clustering",
        "description": "Unsupervised machine learning engine identifying high-value behavioral buyer segments using RFM features, PCA, and K-Means clustering.",
        "status": "Not Started",
        "tools": ["Python", "Scikit-Learn", "Seaborn", "PCA"],
        "githubUrl": "",
        "dashboardUrl": "",
        "notebookUrl": "",
        "datasetUrl": "https://archive.ics.uci.edu/ml/datasets/online+retail",
        "reportUrl": "",
        "notes": "Derives distinct marketing personas: Champions, At-Risk, Hibernating, High Potential.",
        "checklist": [
            {"id": "cl_ds3_1", "text": "Extract RFM (Recency, Frequency, Monetary) metrics per customer", "completed": False},
            {"id": "cl_ds3_2", "text": "Scale features and perform PCA dimensionality reduction", "completed": False},
            {"id": "cl_ds3_3", "text": "Determine optimal K using Elbow Curve and Silhouette Analysis", "completed": False},
            {"id": "cl_ds3_4", "text": "Profile clusters and deliver persona marketing strategies", "completed": False}
        ]
    }
]

# Exams
exams = [
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
]

# Revisions Queue
revisions = [
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

# Settings
settings = {
    "targetDate": "2027-01-01",
    "targetTitle": "1 January 2027 Career Preparation Target",
    "phase1Title": "Phase 1: Foundation & Mastery",
    "phase1Dates": "Sep – Dec 2026",
    "phase2Title": "Phase 2: Assessments & DS Applications",
    "phase2Dates": "Jan – Mar 2027",
    "phase3Title": "Phase 3: Internships & Career Growth",
    "phase3Dates": "Apr 2027 Onwards",
    "theme": "dark",
    "dailyGoalTasks": 3,
    "dailyGoalHours": 2.5,
    "weeklyGoalTasks": 15,
    "weeklyGoalHours": 12,
    "includeProjectsInOverallProgress": True,
    "revisionIntervals": [1, 3, 7, 14, 30],
    "streakCount": 5,
    "streakPaused": False,
    "lastActiveDate": "2026-09-20",
    "todayTaskIds": ["t_sql_4", "t_sql_7", "t_ex_4", "t_pya_5"]
}

# Gamification
gamification = {
    "xp": 950,
    "level": 3,
    "productivityScore": 82,
    "badges": [
        {"id": "b_first_step", "name": "First Step", "desc": "Completed your first career preparation task", "icon": "footprints", "unlocked": True, "unlockedAt": "2026-09-15"},
        {"id": "b_sql_starter", "name": "Query Initiator", "desc": "Mastered foundational SQL queries & aggregations", "icon": "database", "unlocked": True, "unlockedAt": "2026-09-17"},
        {"id": "b_consistency_5", "name": "5-Day Momentum", "desc": "Maintained an active learning streak for 5 days", "icon": "flame", "unlocked": True, "unlockedAt": "2026-09-20"},
        {"id": "b_project_builder", "name": "Project Builder", "desc": "Completed tasks in your portfolio projects", "icon": "folder-git-2", "unlocked": True, "unlockedAt": "2026-09-18"},
        {"id": "b_revision_habit", "name": "Retention Master", "desc": "Scheduled and reviewed spaced repetition items", "icon": "repeat", "unlocked": False},
        {"id": "b_dsa_foundation", "name": "Algorithm Apprentice", "desc": "Completed 10 DSA questions and algorithmic patterns", "icon": "code-2", "unlocked": False},
        {"id": "b_ml_practitioner", "name": "ML Practitioner", "desc": "Trained and evaluated core Machine Learning models", "icon": "brain-circuit", "unlocked": False},
        {"id": "b_exam_ready", "name": "Assessment Ready", "desc": "Cleared foundational Aptitude, Logic & CS subjects", "icon": "award", "unlocked": False}
    ],
    "history": [
        {"date": "2026-09-15", "tasksCompleted": 2, "hoursLogged": 2.0, "xpEarned": 100},
        {"date": "2026-09-16", "tasksCompleted": 4, "hoursLogged": 3.0, "xpEarned": 220},
        {"date": "2026-09-17", "tasksCompleted": 5, "hoursLogged": 3.5, "xpEarned": 270},
        {"date": "2026-09-18", "tasksCompleted": 6, "hoursLogged": 4.0, "xpEarned": 310},
        {"date": "2026-09-19", "tasksCompleted": 5, "hoursLogged": 3.5, "xpEarned": 260},
        {"date": "2026-09-20", "tasksCompleted": 1, "hoursLogged": 1.5, "xpEarned": 70}
    ]
}

default_state = {
    "version": "1.0.0",
    "settings": settings,
    "gamification": gamification,
    "tracks": tracks,
    "projects": projects,
    "exams": exams,
    "revisions": revisions
}

js_content = "/* Central Seed / Default State for Career Preparation Web Application */\n"
js_content += "window.INITIAL_APP_DATA = " + json.dumps(default_state, indent=2) + ";\n"

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

total_tasks = sum(len(sub["tasks"]) for trk in tracks for s in trk["subjects"] for top in s["topics"] for sub in top["subtopics"])
print(f"data.js successfully written! Tracks: {len(tracks)}, Total Tasks: {total_tasks}, Projects: {len(projects)}, Exams: {len(exams)}")
