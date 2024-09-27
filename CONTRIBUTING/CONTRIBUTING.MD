# Contributing to the Body Measurements Module

Thank you for your interest in contributing to the Body Measurements Module! This guide will help you get started with the development process and provide information about our coding standards and practices.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Testing](#testing)
6. [Documentation](#documentation)
7. [Continuous Integration](#continuous-integration)
8. [Using the Issue Board](#using-the-issue-board)
9. [Submitting Changes](#submitting-changes)
10. [Code Review Process](#code-review-process)

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
└── jest.config.js
```

- `src/`: Contains the source code
  - `calculators/`: Individual calculation classes (BMI, BMR, etc.)
  - `factories/`: Factory classes for creating calculator instances
  - `interfaces/`: TypeScript interfaces
  - `models/`: Data models (e.g., User)
  - `utils/`: Utility functions and helpers
- `tests/`: Contains test files
- `dist/`: Contains compiled JavaScript files (generated on build)

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

## Documentation

- Update the main README.md file if you're adding new features or changing existing functionality.
- Document all public methods and interfaces with JSDoc comments.
- Keep inline comments concise and relevant.

## Continuous Integration

We use GitHub Actions for continuous integration. The CI workflow is defined in `.github/workflows/ci.yml`. This workflow runs automatically on every push to the main branch and for all pull requests. It performs the following checks:

1. Lints the code with ESLint
2. Checks code formatting with Prettier
3. Builds the project
4. Runs all tests

Before submitting a pull request, make sure your changes pass all these checks locally. You can run the following command to perform all checks:

```
npm run precommit
```

If the CI checks fail on your pull request, please fix the issues and update your branch.

## Using the Issue Board

I encourage all contributors to make use of our GitHub Issue Board. It's a great place to:

- Report bugs you've found
- Suggest new features or improvements
- Discuss potential changes before starting work on them
- Track the progress of ongoing work

Before starting work on a new feature or significant change, please check the Issue Board to see if it's already being discussed or worked on. If not, feel free to create a new issue to start the conversation.

To access the Issue Board:

1. Go to the project's GitHub page
2. Click on the "Issues" tab
3. Browse existing issues or create a new one
   Or you can just follow this [link](https://github.com/MarkerAnn/health-calculator/issues)

When creating a new issue:

- Use a clear and descriptive title
- Provide as much relevant information as possible in the description
- Add appropriate labels (e.g., "bug", "enhancement", "help wanted")

I value your input and contributions, so don't hesitate to use the Issue Board to get involved in the project's development!

## Submitting Changes

1. Ensure all CI checks pass locally.
2. Commit your changes:
   ```
   git commit -am "Add your descriptive commit message"
   ```
3. Push to your fork:
   ```
   git push origin feature/your-feature-name
   ```
4. Submit a pull request through the GitHub website.

## Code Review Process

1. I will review your pull request.
2. I may suggest changes or improvements.
3. Make any requested changes and push them to your branch.
4. Once approved, I will merge your pull request.

Thank you for contributing to the Body Measurements Module! Your efforts help improve the project for everyone.
