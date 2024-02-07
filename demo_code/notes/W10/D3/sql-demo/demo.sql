DROP TABLE IF EXISTS people;

CREATE TABLE people (
    id INTEGER,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);