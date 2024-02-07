CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

INSERT INTO friends (first_name, last_name)
VALUES ('Amy', 'Pond');

INSERT INTO friends (first_name, last_name)
VALUES ('Rose', 'Tyler'),
       ('Martha', 'Jones'),
       ('Donna', 'Noble'),
       ('River', 'Song');

INSERT INTO friends (first_name, last_name)
VALUES ('Franco', 'Portin');