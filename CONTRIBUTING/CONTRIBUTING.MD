# Contributing to the Body Measurements Module

Thank you for your interest in contributing to the Body Measurements Module! This guide will help you get started with the development process and provide information about our coding standards and practices.
To read about the module, please see the [README.md](../README.md).

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dependencies](#dependencies)
3. [Project Structure](#project-structure)
4. [Project Class Diagram](#project-class-diagram)
5. [Development Workflow](#development-workflow)
6. [Coding Standards](#coding-standards)
7. [Testing](#testing)
8. [Documentation](#documentation)
9. [Continuous Integration](#continuous-integration)
10. [Using the Issue Board](#using-the-issue-board)
11. [Submitting Changes](#submitting-changes)
12. [Code Review Process](#code-review-process)
13. [Npm](#npm)

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```
   git clone https://github.com/MarkerAnn/health-calculator
   cd health-calculator
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```

## Dependencies

This project relies on several development dependencies to ensure code quality, testing, and proper TypeScript support. Here's a list of our main devDependencies:

- **TypeScript**: `typescript@^5.1.6` - Superset of JavaScript that adds static types.
- **Jest**: `jest@^29.7.0` - Testing framework.
- **ts-jest**: `ts-jest@^29.2.5` - TypeScript preprocessor for Jest.
- **@types/jest**: `@types/jest@^29.5.13` - TypeScript definitions for Jest.
- **ESLint**: `eslint@^9.11.1` - Linting utility for JavaScript and TypeScript.
- **@typescript-eslint/eslint-plugin**: `@typescript-eslint/eslint-plugin@^8.7.0` - ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: `@typescript-eslint/parser@^8.7.0` - Allows ESLint to parse TypeScript.
- **Prettier**: `prettier@^3.3.3` - Code formatter.
- **eslint-config-prettier**: `eslint-config-prettier@^9.1.0` - Turns off ESLint rules that might conflict with Prettier.
- **eslint-plugin-prettier**: `eslint-plugin-prettier@^5.2.1` - Runs Prettier as an ESLint rule.
- **jest-html-reporter**: `jest-html-reporter@^3.10.2` - Generates HTML test reports for Jest.
- **Babel**: Used for ES module support in the test environment.
  - **@babel/core**: @babel/core@^7.25.2 - Babel core.
  - **@babel/preset-env**: @babel/preset-env@^7.25.4 - Allows Babel to transpile modern JavaScript to older versions.
  - **babel-jest**: babel-jest@^29.7.0 - Jest transformer for Babel.

If you need to add a new dependency, please discuss it in an issue first.

## Project Structure

The project is structured as follows:

```
health-calculator/
├── src/
│   ├── calculators/
│   ├── factories/
│   ├── interfaces/
│   ├── models/
│   └── utils/
├── tests/
├── dist/
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── jest.config.mjs
└── .babelrc

```

- `src/`: Contains the source code
  - `calculators/`: Individual calculation classes (BMI, BMR, etc.)
  - `factories/`: Factory classes for creating calculator instances
  - `interfaces/`: TypeScript interfaces
  - `models/`: Data models (e.g., User)
  - `utils/`: Utility functions and helpers
- `tests/`: Contains test files
- `dist/`: Contains compiled JavaScript files (generated on build)

## Project Class diagram

![Class diagram of the project](./Screenshot%202024-10-01%20at%2010.51.54.png)

## Development Workflow

1. Make your changes in the appropriate files within the `src/` directory.
2. Write or update tests in the `tests/` directory.
3. Run the test suite to ensure your changes don't break existing functionality:
   ```
   npm test
   ```
4. Build the project to check for compilation errors:
   ```
   npm run build
   ```
5. Lint your code:
   ```
   npm run lint
   ```
6. Fix any linting errors:
   ```
   npm run lint:fix
   ```

## Coding Standards

We follow the TypeScript coding guidelines and use ESLint with Prettier for code formatting. Please ensure your code adheres to these standards:

- Use meaningful variable and function names.
- Write explanatory comments for complex logic.
- Follow the single responsibility principle for functions and classes.
- Use TypeScript's type system effectively.
- Avoid any-type assertions unless absolutely necessary.

## Testing

We use Jest for unit testing. Please follow these guidelines for testing:

- Write tests for all new functionality.
- Update existing tests when modifying functionality.
- Aim for high test coverage, especially for critical calculations.
- Use descriptive test names that explain the expected behavior.

To run tests:

```
npm test
```

To run tests with coverage:

```
npm run test:coverage
```

This will generate a coverage report in both text format and an HTML format. The HTML report is located at `coverage/lcov-report/index.html` and can be opened in a web browser.

**How to open the report**: Navigate to the `coverage/lcov-report/` folder in your local project directory and open `index.html` in any web browser.

**What the report contains**: The HTML report provides a detailed view of code coverage, showing which files and lines are covered by tests and which are not. This helps identify areas of the codebase that need more test coverage.

**Note**: The coverage report is generated locally each time you run the coverage command, and it is not included in the repository. Be sure to check the HTML report after running tests to evaluate test coverage.

## Documentation

Update the main [README.md](../README.md) file if you're adding new features or changing existing functionality.
Document all public methods and interfaces with JSDoc comments.
Keep inline comments concise and relevant.

**‼️ Do NOT modify the** [TESTREPORT.md](../TESTREPORT.md) **file. This file is automatically generated by our CI/CD process.**

## Continuous Integration and Test Reporting

We use GitHub Actions for continuous integration. The CI workflow is defined in .github/workflows/ci.yml. This workflow runs automatically on every push to the main branch and for all pull requests. It performs the following checks:

- Lints the code with ESLint
- Checks code formatting with Prettier
- Builds the project
- Runs all tests
- Generates a test report

### Automated Test Reporting

Our CI/CD process automatically generates a test report after running the test suite. This report is saved as [TESTREPORT.md](https://github.com/MarkerAnn/health-calculator/blob/main/TESTREPORT.md) in the repository root.
Important: Do NOT manually edit or commit changes to [TESTREPORT.md](https://github.com/MarkerAnn/health-calculator/blob/main/TESTREPORT.md). This file is automatically generated and any manual changes will be overwritten by the CI/CD process. Modifying this file can lead to inaccurate test reporting.
The [TESTREPORT.md](https://github.com/MarkerAnn/health-calculator/blob/main/TESTREPORT.md) includes:

- Test environment details (Node.js version, Jest version, etc.)
- Test summary (number of suites and tests run)
- Detailed results for each test suite
- Pass/fail status for individual tests

You can view the latest test report by checking the TESTREPORT.md file in the main branch of the repository.
Before submitting a pull request, make sure your changes pass all CI checks locally. You can run the following command to perform all checks (except generating the test report):

```
npm run precommit
```

If the CI checks fail on your pull request, please fix the issues and update your branch

## Using the Issue Board

We encourage all contributors to make use of our GitHub Issue Board. It's a great place to:

- Report bugs you've found
- Suggest new features or improvements
- Discuss potential changes before starting work on them
- Track the progress of ongoing work

Before starting work on a new feature or significant change, please check the Issue Board to see if it's already being discussed or worked on. If not, feel free to create a new issue to start the conversation.

To access the Issue Board:

1. Go to the project's GitHub page
2. Click on the "Issues" tab
3. Browse existing issues or create a new one
   Or you can follow this [link](https://github.com/MarkerAnn/health-calculator/issues)

When creating a new issue:

- Use a clear and descriptive title
- Provide as much relevant information as possible in the description
- Add appropriate labels (e.g., "bug", "enhancement", "help wanted")

We value your input and contributions, so don't hesitate to use the Issue Board to get involved in the project's development!

## Submitting Changes

1. **Ensure all CI checks pass locally.**
2. **Commit your changes:**

```
git commit -m "Add your descriptive commit message"
```

3. **If you have forked the project**, add the original repository as an upstream remote (if you haven't already):

```
git remote add upstream https://github.com/MarkerAnn/health-calculator.git
```

4. **Before pushing, always pull the latest changes from the original repository:**

```
git pull upstream main
```

This ensures that you have the most up-to-date version of files like TESTREPORT.md that might have been updated by other contributors.

5. **Push to your fork:**

```
git push origin feature/your-feature-name
```

6. **If you’ve already pushed without pulling, immediately run**:

```
git pull upstream main
```

This will sync the latest `TESTREPORT.md` and other changes from GitHub to avoid conflicts.

7. **Add yourself as a contributor in `package.json` if applicable:**

- Open `package.json` and add your information under the `contributors` field. If it doesn't exist, you can add it like this:
  ```json
  "contributors": [
    {
      "name": "Your Name",
      "email": "your.email@example.com",
      "url": "https://yourwebsite.com"
    }
  ]
  ```

8. **Submit a pull request through the GitHub website.**

## Code Review Process

1. We will review your pull request.
2. We may suggest changes or improvements.
3. Make any requested changes and push them to your branch.
4. Once approved, we will merge your pull request.

## Npm

**HealthCalculator on Npm**: [Published here](https://www.npmjs.com/package/body-measurements)
**Publishing**: Only authorized maintainers have permission to publish new versions of the module on npm. If you believe your changes are ready for a new release, mention it in your pull request, and one of the maintainers will handle the publishing process.

---

Thank you for contributing to the Body Measurements Module! Your efforts help improve the project for everyone.
