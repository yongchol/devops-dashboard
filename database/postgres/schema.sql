CREATE TABLE IF NOT EXISTS user
(
  id character varying(128),
  name character varying(128),
  created_date timestamp with time zone DEFAULT now(),
  modified_date timestamp with time zone DEFAULT now()
);

DELETE FROM user;

INSERT INTO user VALUES ('user01','name01');
INSERT INTO user VALUES ('user02','name02');
INSERT INTO user VALUES ('user03','name03');
INSERT INTO user VALUES ('user04','name04');
INSERT INTO user VALUES ('user05','name05');
