const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation?"
        },
        {
            type: "input",
            name: "why",
            message: "Why did you build this project?"
        },
        {
            type: "input",
            name: "problem",
            message: "What problem does it solve?"
        },
        {
            type: "input",
            name: "learn",
            message: "What did you learn?"
        },
        {
            type: "input",
            name: "project",
            message: "What makes your project stand out?"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "colab",
            message: "List your collaborators, if any, with links to their GitHub profiles."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "usage",
            message: "What license does your project have?"
        
        },
    ])
    .then((response) => {
       const readMeString = `` 
    }

//README Questions:
// What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?
//Provide instructions and examples for use.
//List your collaborators, if any, with links to their GitHub profiles.