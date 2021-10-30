// make functions that will run sql querries (still write out code)
const inquirer = require("inquirer")
const conn = require ("./connection")

class DB {
    constructor (conn) {
        this.connection = conn
    }

// write out functions-one for each interaction with data base

// find all, create all, update .....

    findAllEmp() {
        return this.connection.promise().query(
            'SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, " ", manager.lastName) AS manager FROM employee LEFT JOIN role on employee.roleId = role.id LEFT JOIN department on role.departmentId = department.id LEFT JOIN employee manager on manager.id = employee.managerId;'
        )
    }

    createEmp(data) {
        const role-id
        return this.connection.promise(first, last, role, boss).query(
            "INSERT INTO employee (firstName, lastName, roleId, managerId) VALUES (?, ?, ?, ?)", first, last, role, boss
        )
    }

    updateEmp() {
        return this.connection.promise().query(
            'SELECT '
        )
    }

    createDep(dept) {
        return this.connection.promise().query(
            "INSERT INTO department (name) VALUES (?)", dept
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