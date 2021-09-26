// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: input => {
            if (input) {
                return true
            } else {
                return false
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        if (!err) {
            console.log(err);
        }
    }) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then(function (input) {
        writeToFile("README.md", generateMarkdown(input))
    })

// Function call to initialize app
init();
