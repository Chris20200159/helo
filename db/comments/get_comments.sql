SELECT c.comment_id, c.user_id, c.post_id, p.body, p.img FROM comments c
JOIN posts p
ON c.post_id = p.post_id
WHERE c.user_id = $1;