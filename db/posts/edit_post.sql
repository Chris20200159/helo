UPDATE posts
SET
body = ${body},
img = ${img}
WHERE post_id = ${post_id};

SELECT * FROM posts
ORDER BY post_id;
