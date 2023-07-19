CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone_number VARCHAR(255),
  job_title VARCHAR(255),
  department VARCHAR(255),
  salary DECIMAL(10,2),
  hire_date DATE,
  termination_date DATE
);
