-- SELECT AVG(id) FROM artists;

-- SELECT COUNT(*) from users;

-- SELECT MIN(id) from users;

-- SELECT MAX(id) from users;

-- SELECT SUM(id) from albums;

-- SELECT TOTAL(id) FROM playlists;

-- SELECT artists.name, COUNT(*) AS album_count
-- FROM artists
-- JOIN albums
-- ON artists.id = albums.artist_id
-- GROUP BY artists.name
-- HAVING album_count > 1
-- ORDER BY album_count DESC;

SELECT tracks.name
FROM tracks
WHERE album_id = (
       SELECT id
       FROM albums
       WHERE albums.id = 15
);

