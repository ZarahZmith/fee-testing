# Front End Testing

This repo is a practice area for testing front end JavaScript code.

Created by: Sarah Graves Smith
GitHub URL: https://github.com/ZarahZmith/fee-testing

Process:
Ran npm init in node
Ran npm install --save-dev mocha karma chai karma-mocha karma-chai karma-chrome-launcher in node
Established calc.conf.js file
Altered scripts object in package.json to contain "test": "karma start calc.conf.js" to allow tests to be run in node using "npm test"
Tried to run a simple test to ensure test file was working properly. Required adding "Return total;" at the end of the sum function in the calc.js file and creating a test in calc.spec.js.
