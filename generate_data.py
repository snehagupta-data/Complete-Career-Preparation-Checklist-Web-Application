import json

# Script to build data.js with all required preloaded tracks, subjects, topics, subtopics, tasks, projects, exams.

def make_task(t_id, name, desc="", status="Not Started", planned_date="", est_hours=2, actual_hours=0, notes="", resources=None, questions="", revision_date=""):
    return {
        "id": t_id,
        "name": name,
        "description": desc or f"Master concepts, implementation, and interview applications of {name}.",
        "status": status,
        "plannedDate": planned_date,
        "deadline": "",
        "estimatedHours": est_hours,
        "actualHours": actual_hours,
        "notes": notes,
        "resources": resources or [{"title": "Official / Recommended Guide", "url": "https://developer.mozilla.org" if "Web" in name else "https://www.geeksforgeeks.org"}],
        "interviewQuestions": questions,
        "revisionDate": revision_date,
        "completionDate": "2026-09-18" if status == "Completed" else "",
        "createdAt": "2026-09-15"
    }

print("Python generator ready")
