// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            choices: ["Appache", "Boost Software License 1.0", "BSD", "Eclipse Public License 1.0","No license"]        
        },
        {
            type: "input",
            name: "test",
            message: "What are some tests and their results of your project?"
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
// TODO: Create a function to write README file
// .then((data) => {
//     const markDownContent = generateMarkdown(data);

//     fs.writeFile("README.html", markDownContent, (err) =>
//     err ? console.log(err) : console.log("Sucess!")
//     );
// });

// TODO: Create a function to initialize app
.then((data) => {
    const readMeContent = generateMarkdown(data);

    fs.writeFile("README.md", readMeContent, (err)=> {
        if (!err) {
            console.log("Sucess!")
        }
    }
        
    );
});  

// Function call to initialize app
// init();
