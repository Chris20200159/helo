CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  first_name TEXT,
  last_name TEXT, 
  email VARCHAR(200),
  password VARCHAR(250)
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY, 
  body TEXT,
  img TEXT,
  user_id INT REFERENCES users(user_id)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY, 
  body TEXT,
  user_id INT REFERENCES users(user_id),
  post_id INT REFERENCES posts(post_id)
);
-- ALTER TABLE users
-- ALTER COLUMN password VARCHAR(20) TYPE TEXT;
-- 
-- INSERT INTO users(first_name, last_name, email, password)
-- VALUES
-- ('Jane', 'Russell', 'MinnesotaBlue@gmail.com', 'Hughes3'),
-- ('Bob', 'Hope', 'Nose4vaudeville@gmail.com', 'UKborn01');

-- SELECT * FROM users;