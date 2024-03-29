DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS artists;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    genre VARCHAR(50)
);

INSERT INTO artists (name, genre)
VALUES ('TOOL', "Progressive"),
       ('Jane''s Addiction', 'Alternative'),
       ('Weird Al Yankovich', 'Parody'),
       ('A Tribe Called Quest', 'Hip-Hop');

SELECT * FROM artists;