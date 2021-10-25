// have all inquer prompts, run prompts answer to question is what they want--call that function
// import inq and const table logo and all dependancies
// look at console.table docs figure what code makes tables (console log those) 
// end with prompts for next step (any more, yes or no)
// seed my data base -- look at activity and sql docs on how to seed tables  

const db = require('./db')
const inquirer = require('inquirer');

// Add Prompts
// Department
inquirer
    .prompt([

        {
            type: "input",
            name: "title",
            message: "What is the name of your department?",
        },

    ])

// Role
inquirer
    .prompt([

        {
            type: "input",
            name: "title",
            message: "What is your job title?",
        },

        {
            type: "input",
            name: "amount",
            message: "What is your salary within your role of that department?",
        },

        {
            type: "input",
            name: "department",
            message: "What is the name of the department you're in?",
        },

    ])

// Employee
inquirer
    .prompt([

        {
            type: "input",
            name: "title",
            message: "What is your first name?",
        },

        {
            type: "input",
            name: "title",
            message: "What is your last name?",
        },

        {
            type: "input",
            name: "title",
            message: "What is your Role in your job?",
        },

        {
            type: "input",
            name: "department",
            message: "What is the name of the manager of your department?",
        },

    ])

// Update Prompts 





// View All Prompts





// Next Step Prompts