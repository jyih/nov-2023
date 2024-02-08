-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
-- Your code here 
SELECT first_name, type
FROM musicians
JOIN musician_instruments
ON (musicians.id = musician_instruments.musician_id)
JOIN instruments
ON (instruments.id = musician_instruments.instrument_id);