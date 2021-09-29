// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Appache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if(license === "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if(license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if(license === "Eclipse Public License 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Appache") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if(license === "Boost Software License 1.0") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if(license === "BSD") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if(license === "Eclipse Public License 1.0") {
    return `(https://opensource.org/licenses/EPL-1.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# <${data.title}>
  ${renderLicenseBadge (data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#usage)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseLink (data.license)}
  

  
  ## Contributing
  ${data.colab}
  
  
  ## Tests
  ${data.tests}
  
  ## Questions
  ${data.GitHub}
  ${data.email}

`;
}

module.exports = generateMarkdown;
