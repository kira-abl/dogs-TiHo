BEGIN;

DROP TABLE IF EXISTS answers CASCADE;


CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  animal_number VARCHAR(50),
  diagnosis VARCHAR(50),
  had_op VARCHAR(50),
  op VARCHAR(50),
  days_ago VARCHAR(50),
  is_well VARCHAR(50),
  has_pain VARCHAR(50),
  nausea VARCHAR(50),
  had_meds VARCHAR(50),
  meds VARCHAR(50),
  other VARCHAR(50),
  ear_form VARCHAR(50),
  nose_form VARCHAR(50),
  image1 VARCHAR(500),
  image2 VARCHAR(500),
  image3 VARCHAR(500),
  pain1 VARCHAR(50),
  pain2 VARCHAR(50),
  pain3 VARCHAR(50),
  pain4 VARCHAR(50),
  pain5 VARCHAR(50),
  pain6 VARCHAR(50),
  score VARCHAR(50),
  position VARCHAR(50),
  sex VARCHAR(50),
  date VARCHAR(50),
  type VARCHAR(50),
  type_dog VARCHAR(50),
  name VARCHAR(50)





);







 COMMIT;
