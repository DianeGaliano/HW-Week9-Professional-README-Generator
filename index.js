// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project."
    },
    {
        type: "input",
        name: "insallation",
        message: "What are the steps required to install your project?"
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
        type: "checkbox",
        name: "license",
        message: "What license does your project have?",
        choices: ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "AUR license", "Bower", "Cocoapods", "Conda - License", "CPAN", "CRAN/METACRAN", "Crates.io", "Crates"]        
    },
    {
        type: "input",
        name: "test",
        message: "Write tests for your application. Then provide examples on how to run them here"
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
];

// TODO: Create a function to write README file
function writeToFile(filename, response) {
    fs.writeFile(filename, questions, (err)=> {
        if (!err) {
            console.log("Sucess!")
        }
    }
    
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        writeToFile("README.md", generateMarkdown())
    });
}

// Function call to initialize app
init();
