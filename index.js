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
            choices: ["MIT License", "GNU v3.0 License", "Communities License", "N/A"]        
        },
        {
            type: "input",
            name: "features",
            message: "What are some of your projects features?"
        },
    ])
    .then((response) => {
       const readMeString = `
                 #${response.title}
                ## Description
                ${response.motivation}
                ${response.why}
                ${response.problem}
                ${response.learn}
                ${response.project}


                ## Usage
                ${response.usage}

                ## Credits
                ${response.colab}

                ## License
                ${response.license}

                ## Features
                ${response.features}


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