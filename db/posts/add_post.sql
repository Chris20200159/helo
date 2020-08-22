INSERT INTO posts
(body, img)
VALUES
($1, $2);

SELECT * FROM posts
ORDER BY post_id;