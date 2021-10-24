// make functions that will run sql querries (still write out code)
const inquirer = require("inquirer")
const conn = require ("./connection")
class DB {
    constructor (conn) {
        this.connection = conn
    }

// write out functions-one for each interaction with data base

function startPrompt() {
    inquirer.promise([
        {
            type: "list".
            message: "What would you like to do?",
            name: "choice",
            choices: [
                "Add Department?",
                "Add Role?",
                "Add Employee?",
                "Update Employee?",
                "Update Role?",
                "Update Department?",
                "View All Employees By Department?",
                "View All Employees By Role?",
                "View All Employees?",
            ]
        }
    ]).then(function(val) {
        switch (val.choice) {
            case "Add Department?":
                addDepartment();
            break;

            case "Add Role?":
                addRoles();
            break;

            case "Add Employee?":
                addEmployees();
            break;

            case "Update Department?":
                updateDepartment();
            break;

            case "Update Role?":
                updateRole();
            break;

            case "Update Employee?":
                updatdEmployee();
            break;

            case "View All Employees By Department??":
                viewAllDepartments();
            break;

            case "View All Employees By Role??":
                viewAllRoles();
            break;

            case "View All Employees??":
                viewAllEmployees();
            break;
        }
    })
}

// find all, create all, update .....

    findAllEmp() {
        return this.connection.promise().query(
            'SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, " ", manager.lastName) AS manager FROM employee LEFT JOIN role on employee.roleId = role.id LEFT JOIN department on role.departmentId = department.id LEFT JOIN employee manager on manager.id = employee.managerId;'
        )
    }

    createEmp() {
        return this.connection.promise().query(
            'SELECT '
        )
    }

    updateEmp() {
        return this.connection.promise().query(
            'SELECT '
        )
    }

    createDep() {
        return this.connection.promise().query(
            'SELECT '
        )
    }

    createRol() {
        return this.connection.promise().query(
            'SELECT '
        )
    }
}

// the endgame is to make easier (db.*above directions*)

module.exports = new DB(connection)