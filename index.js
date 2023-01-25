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
        "Apache_2.0",
        "BSD_2-Clause",
        "BSD_3-Clause",
        "GPL",
        "MIT",
        "Mozilla_Public_License_2.0"],
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
      message: `Please enter your GitHub URL.`,
      name: "github"
    },
    {
      type: "input",
      message: `Please enter your preferred email address for questions.`,
      name: "email"
    },
    {
      type: "input",
      message: `List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.`,
      name: "credits"
    },

  ])
  .then((data) => {
    let finalString = 
    `# ${data.title}\n\n## Badges\n\n![](https://img.shields.io/badge/License-${data.license}-green)\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#Contributing)\n- [Tests](#Tests)\n- [Questions](#Questions)\n- [Credits](#credits)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## License\n\nThis application is covered under the ${data.license} license.\n\n## Contributing\n\n${data.contributing}\n\n## Tests\n\n${data.tests}\n\n## Questions\n\nPlease direct your questions to:\n- ${data.github}\n- ${data.email}\n\n## Credits\n\n${data.credits}`;

    fs.writeFile("README.md", finalString, (err) => {
      if (err){
        console.log(err)
      } else {
        console.log("README successfully written!")
      }
    })
  })