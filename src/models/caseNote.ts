case_note_id	INT	PRIMARY KEY, AUTO_INCREMENT	Unique identifier for each case note entry.
child_id	INT	NOT NULL, FOREIGN KEY references Children(child_id)	The ID of the child this case note is for.
user_id	INT	NOT NULL, FOREIGN KEY references Users(user_id)	The ID of the therapist, caregiver, or user who created this note. (Note: We'll need a Users table soon if you don't have one).
note_datetime	DATETIME	NOT NULL	The exact date and time when the session or observation occurred. This is crucial for chronological tracking.
session_type	VARCHAR(100)	NOT NULL	The type of session or interaction (e.g., 'ABA Therapy', 'Speech Therapy', 'Occupational Therapy', 'Parent Training', 'Observation', 'Meeting', 'Assessment').
duration_minutes	INT	NULLABLE	The duration of the session in minutes. Useful for tracking service hours.
location	VARCHAR(255)	NULLABLE	Where the session took place (e.g., 'Home', 'Clinic', 'School', 'Community Outing').
objective_summary	TEXT	NULLABLE	A summary of the objectives addressed or the general focus of the session.
narrative_notes	TEXT	NOT NULL	The primary detailed, free-form text notes for the session. This is where you would record qualitative observations, interactions, context, and descriptions of events that occurred. This should be comprehensive.
progress_summary	TEXT	NULLABLE	A summary of the child's progress during the session related to their goals or observed behaviors.
next_steps	TEXT	NULLABLE	Any follow-up actions, homework for the child/parent, or plans for the next session.
parent_present	BOOLEAN	DEFAULT FALSE	Flag to indicate if a parent/guardian was present during the session.
created_at	DATETIME	NOT NULL, DEFAULT CURRENT_TIMESTAMP	Timestamp when this case note record was created in the system.
updated_at	DATETIME	NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP	Timestamp when this case note record was last updated.