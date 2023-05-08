BEGIN;

DROP TABLE IF EXISTS answers CASCADE;


CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  animal_number VARCHAR(500),
  diagnosis VARCHAR(500),
  had_op VARCHAR(500),
  op VARCHAR(500),
  days_ago VARCHAR(500),
  is_well VARCHAR(500),
  has_pain VARCHAR(500),
  nausea VARCHAR(500),
  had_meds VARCHAR(500),
  meds VARCHAR(500),
  other VARCHAR(500),
  ear_form VARCHAR(500),
  nose_form VARCHAR(500),
  image1 VARCHAR(500),
  image2 VARCHAR(500),
  image3 VARCHAR(500),
  pain1 VARCHAR(500),
  pain2 VARCHAR(500),
  pain3 VARCHAR(500),
  pain4 VARCHAR(50),
  pain5 VARCHAR(50),
  pain6 VARCHAR(50),
  score VARCHAR(50),
  position VARCHAR(500),
  sex VARCHAR(50),
  date VARCHAR(500),
  type VARCHAR(500),
  type_dog VARCHAR(500),
  name VARCHAR(500)





);







 COMMIT;
