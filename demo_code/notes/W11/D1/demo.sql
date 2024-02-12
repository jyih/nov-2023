DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS instructors;


CREATE TABLE people (
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

CREATE TABLE instructors (
    first_name VARCHAR(30) UNIQUE,
    last_name VARCHAR(30)
)
