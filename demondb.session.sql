CREATE TABLE demons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  placement INT NOT NULL,
  difficulty TEXT,
  attempts INT,
  enjoyment INT,
  notes TEXT,
  date_completed DATE
);