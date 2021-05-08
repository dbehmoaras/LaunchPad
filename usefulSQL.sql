CREATE TABLE users (id BIGSERIAL PRIMARY KEY, username varchar(255) NOT NULL, hash varchar(255) NOT NULL, userdata varcha
 r(255) NOT NULL);

INSERT INTO users_crypt (email, hash, lastname, firstname)
    VALUES ($1, crypt($2 ,gen_salt('bf')), $3, $4);


SELECT email, hash FROM users_crypt WHERE email = $1;

INSERT INTO users (username, hash, metadata) VALUES ($1, crypt($2, gen_salt('bf')), $3)

ALTER TABLE users
 ADD CONSTRAINT username_unique UNIQUE (username);


CREATE TABLE tasks (id BIGSERIAL PRIMARY KEY, item varchar(255) NOT NULL, created_at timestam
 p default CURRENT_TIMESTAMP);

DELETE FROM tasks WHERE id = $1;