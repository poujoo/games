DROP TABLE IF EXISTS scores;
DROP TABLE IF EXISTS games;



CREATE TABLE games (
  game_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  picture VARCHAR(100),
  description VARCHAR(300),
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE scores (
  user_id VARCHAR(100) PRIMARY KEY,
  game_id SERIAL,
  score SERIAL,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT fk_games
      FOREIGN KEY(game_id) 
        REFERENCES games(game_id)
);

INSERT INTO games(name,picture,description,created_at)VALUES ('Fast Squares','squares.png','How fast can you count. Let''s check it out!',CLOCK_TIMESTAMP());
INSERT INTO scores (user_id,game_id,score,created_at)VALUES('user_2hVo6z2HsN04bRGO6hzWnnpmqkR', 1, 0, CLOCK_TIMESTAMP());