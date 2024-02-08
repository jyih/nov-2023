-- SELECT * FROM users
-- WHERE id BETWEEN 5 AND 10;

-- SELECT * FROM artists
-- WHERE name IN ('Tool', 'Primus')

-- SELECT * FROM artists
-- WHERE name LIKE '%pri%';

-- SELECT * FROM tracks
-- ORDER BY album_id, name DESC;

-- SELECT DISTINCT album_id FROM tracks;

-- SELECT album_id + 10 FROM tracks;

-- SELECT name AS user_name FROM users;

SELECT artists.name AS artist_name, albums.name AS album_name
FROM artists
JOIN albums
ON artists.id = albums.artist_id;

SELECT playlists.name AS playlist_name, 
       playlist_tracks.playlist_order, 
       tracks.name AS track_name,
       tracks.duration
FROM playlists
JOIN playlist_tracks
ON playlists.id = playlist_tracks.playlist_id
JOIN tracks
ON tracks.id = playlist_tracks.track_id
WHERE playlist_tracks.playlist_order = 1;

