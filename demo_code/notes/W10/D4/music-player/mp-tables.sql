PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS playlist_tracks;
DROP TABLE IF EXISTS playlists;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS artists;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    genre VARCHAR(50) NOT NULL
);

CREATE TABLE albums (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_id INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    release_date DATE DEFAULT CURRENT_DATE
    -- todo: set foreign key constraints
);

CREATE TABLE tracks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    album_id INTEGER,
    name VARCHAR(50) NOT NULL,
    duration TIMESTAMP DEFAULT CURRENT_TIME,
    url_path VARCHAR(255) NOT NULL
    -- todo: set foreign key constraints
);

CREATE TABLE playlists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name VARCHAR(30) NOT NULL
    -- todo: set foreign key constraints
);

-- todo: make a many-to-many table for playlist_tracks

