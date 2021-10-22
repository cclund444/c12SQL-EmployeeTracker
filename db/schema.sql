DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentId INT NOT NULL,
    INDEX dep_ind (departmentId)
    
)

CREATE TABLE employee (
    -- id, name, role ID, manager ID
    -- 
)