// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Appache") {
    return
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # <${response.title}>
  ## Description
  ${response.description}
  
  ## Table of Contents
  - [Description](#usage)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## License
  ${response.license}
  
  ## Contributing
  ${response.colab}
  
  
  ## Tests
  ${response.tests}
  
  ## Questions
  ${response.GitHub}
  ${response.email}

`;
}

module.exports = generateMarkdown;
