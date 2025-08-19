
CREATE TABLE assessments (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(500),
  questions JSON,
  submittedBy JSON,
  "userId" INTEGER REFERENCES users(id)
);
