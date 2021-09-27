// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is the project title?',
    //     validate: input => {
    //         if (input) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    // },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "table",
        message: "What was your motivation?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe what your project does."
    },
    {
        type: "input",
        name: "installation ",
        message: "Provide instructions and examples for use."
    },
    {
        type: "input",
        name: "colab",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license does your project have?",
        choices: ["APM", "AUR license", "Bower", "Cocoapods", "Conda - License", "CPAN", "CRAN/METACRAN", "Crates.io", "Crates"]        
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "email",
        message: "If you have any questions please email me at:"
    },
]

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then(function (input) {
        writeToFile("README.md", generateMarkdown())
    });
}
// Function call to initialize app
init();
