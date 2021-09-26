const inquirer = require("inquirer");
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");

inquirer
    .prompt([
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
            name: "GitHub",
            message: "What is your GitHub Username?"
        },
        {
            type: "input",
            name: "email",
            message: "If you have any questions please email me at:"
        },
    ])
    .then((response) => {
       const readMeString = `
                 #<${response.title}>
                ## Description
                
                ${response.motivation}
                ${response.why}
                ${response.problem}
                ${response.learn}
                ${response.project}

                ## Table of Contents
                Description
                Installation
                Usage
                License
                Contibuting
                Tests
                Questions

                ## Usage
                ${response.usage}

                ## Credits
                ${response.colab}

                ## License
                ${response.license}

                ## Questions
                ${response.GitHub}
                ${response.email}


       `;
       fs.writeFile("README.md", readMeString, (err)=> {
           if (!err) {
               console.log("Sucess!")
           }
       }
       
       );
   });


//README Questions:
// What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?
//Provide instructions and examples for use.
//What licenses does your project have.
//List your collaborators, if any, with links to their GitHub profiles.