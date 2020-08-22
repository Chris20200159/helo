DELETE FROM comments
WHERE user_id = $1 AND post_id = $2;