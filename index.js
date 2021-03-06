// have all inquer prompts, run prompts answer to question is what they want--call that function
// import inq and const table logo and all dependancies
// look at console.table docs figure what code makes tables (console log those) 
// end with prompts for next step (any more, yes or no)
// seed my data base -- look at activity and sql docs on how to seed tables  

const db = require('./db')
const inquirer = require('inquirer');
const { createEmp } = require('./db');
const { eventNames } = require('./db/connection');

// add prompts
function startPrompt() {
    inquirer.promise([
        {
            type: "list",
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
    ]).then(function (val) {
        switch (val.choice) {
            case "Add Department?":
                inquirer
                    .prompt([

                        {
                            type: "input",
                            name: "title",
                            message: "What is the name of your department?",
                        },

                    ]).then(ans => {
                        db.createDep(ans.title);
                    })
                break;

            case "Add Role?":
                    const depts = db.connection.query(
                        'SELECT * FROM department'
                        // should look like [{id: 1, name:'Accounting'},  {}, {}]
                        // inquirer wants [{name: Accounting, value: 1}]
                    )
                    const options = depts.map(dep => {
                        return {
                            name: dep.name,
                            value: dep.id
                        }
                    })
                inquirer
                    .prompt([

                        {
                            type: "input",
                            name: "title",
                            message: "What is your job title-ID?"
                        },
                        
                        {
                            type: "input",
                            name: "salary",
                            message: "What is your salary within your role of that department?",
                        },

                        {
                            type: "list",
                            name: "department",
                            message: "Select the department you're in?",
                            choices: options
                        },

                    ]).then (ans => {
                        db.createRol(ans)
                    })
                    break;

            case "Add Employee?":
                inquirer
                    .prompt([

                        {
                            type: "input",
                            name: "first",
                            message: "What is your first name?",
                        },

                        {
                            type: "input",
                            name: "last",
                            message: "What is your last name?",
                        },
                        // select choices, will be a list of role names
                        {
                            type: "input",
                            name: "role",
                            message: "What is your Role in your job?",
                        },
                        //choices will be a list of employee names
                        {
                            type: "input",
                            name: "manager",
                            message: "What is the name of the manager of your department?",
                        },

                    ]).then(ans => {
                        db.createEmp(ans)
                    })
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
                db.findAllEmp();
                break;
        }
    })
}

// View All Prompts

// Next Step Prompts

startPrompt()