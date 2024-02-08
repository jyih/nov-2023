-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Your code here 
SELECT first_name, last_name
FROM musicians
JOIN musician_instruments
ON (musicians.id = musician_instruments.musician_id)
JOIN instruments
ON (instruments.id = musician_instruments.instrument_id)
WHERE instruments.id = 1;