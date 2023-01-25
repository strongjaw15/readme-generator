const inquirer = require("inquirer");
const fs = require("fs");

inquirer 
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
      - What was your motivation?
      - Why did you build this project?
      - What problem does it solve?
      - What did you learn?
      `,
      name: "description"
    },
    {
      type: "input",
      message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
      name: "installation"
    },
    {
      type: "input",
      message: `Provide instructions and examples for use.`,
      name: "usage"
    },
    {
      type: "list",
      message: `One section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com/.`,
      choices: [
        "Apache 2.0",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "GPL",
        "MIT",
        "Mozilla Public License 2.0"],
      name: "license"
    },
    {
      type: "input",
      message: `Include guidelines for other developers to contribute to your project. The Contributor Covenant at https://www.contributor-covenant.org/ is an industry standard, but you can always write your own if you'd prefer.`,
      name: "contributing"
    },
    {
      type: "input",
      message: `Go the extra mile and write tests for your application. Then provide examples on how to run them here.`,
      name: "tests"
    },
    {
      type: "input",
      message: `List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.`,
      name: "credits"
    },

  ])
  .then((data) => {
    let finalString = 
    `# ${data.title}

    ## Badges
    
    ![](https://img.shields.io/badge/License-${data.license}-green)
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)
    - [Credits](#credits)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
    
    ## License
    
    This application is covered under the ${data.license} license.
    
    ## Contributing
    
    ${data.contributing}
    
    ## Tests
    
    ${data.tests}
    
    ## Questions
    
    Please direct your questions to:
    - ![](${data.github}) 
    - ![](${data.email})
    
    ## Credits
    
    ${data.credits}`;

    fs.writeFile("index.html", finalString, (err) => {
      if (err){
        console.log(err)
      } else {
        console.log("README successfully written!")
      }
    })
  })