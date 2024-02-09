-- For readability of output
SELECT '----- Number of cats ------';

SELECT COUNT(8) AS cat_count
FROM cats;

-- For readability of output
SELECT '----- Oldest cat ------';

SELECT MIN(birth_year) , name
FROM cats;

-- For readability of output
SELECT '----- Youngest cat ------';

SELECT MAX(birth_year), name
FROM cats;

-- For readability of output
SELECT '----- Oldest and youngest cats? -----';
-- Question: Can you query for both cats in one simple SELECT?
-- Answer: No, because this query returns just 1 result
SELECT name, MIN(birth_year), MAX(birth_year)
FROM cats;

-- For readability of output
SELECT '----- Number of toys per cat ------';

SELECT cats.name, COUNT(toys.id) AS toy_count
FROM toys
JOIN cats
ON cats.id = toys.cat_id
GROUP BY toys.cat_id;

-- For readability of output
SELECT '----- Cats "spoiled" with two or more toys ------';

SELECT cats.name, COUNT(toys.id) AS toys_count
FROM toys
JOIN cats
ON cats.id = toys.cat_id
GROUP BY cats.name
HAVING toys_count >= 2;