# DSR-Form

End to end testing framework with Cypress.io

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. 

### Prerequisites

Cypress requires the following dependencies:
- macOS 10.9 and above (64-bit only)
- Or Windows 7 and above
- Node.js (https://nodejs.org/en/) >= v12
- VS Code
- Chrome browser

### Start running tests

To start running locally

#### 1. Clone the repo

```
$ git clone https://github.com/acthilina2020/DSR_Form.git
```

#### 2. Install dependencies

```
$ npm install
```

### 3. Create a cypress.env.json file in the root folder
- Add all neccessary env variables and values below

"CYPRESS_BASE_URL": ""

### Open cypress test runner

- `npx cypress open` in the terminal
- Above command will open the test runner
- On the test runner, select which test to run from each folder
- 'Run all specs' feature is not enabled and should not be used in this repository.


### Documents to read

Cypress installation
`(https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)`

Chai assertions
`(https://docs.cypress.io/guides/references/assertions.html#Chai)`

Cypress best practices
`(https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices)`
