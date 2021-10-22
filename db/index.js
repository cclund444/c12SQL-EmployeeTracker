// make functions that will run sql querries (still write out code)
const conn = require ("./connection")
class DB {
    constructor (conn) {
        this.connection = conn
    }
// write out functions-one for each interaction with data base
// find all, create all, update .....
// the endgame is to make easier (db.*above directions*)

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

module.exports = new DB(connection)