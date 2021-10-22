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
    INDEX depInd (departmentId),
    CONSTRAINT fkDept FOREIGN KEY (departmentId) REFERENCES department(id)
)

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    roleId INT NOT NULL,
    managerId INT,
    INDEX rolInd (roleId),
    CONSTRAINT fkRole FOREIGN KEY (roleId) REFERENCES role(id)
    INDEX manInd (managerId),
    CONSTRAINT fkRole FOREIGN KEY (managerId) REFERENCES employee(id)
)