## Simple Date Validator Library

[![Build](https://github.com/arshadkazmi42/simple-date-validator/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/simple-date-validator/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/simple-date-validator.svg)](https://www.npmjs.com/package/simple-date-validator)
[![NPM Downloads](https://img.shields.io/npm/dt/simple-date-validator.svg)](https://www.npmjs.com/package/simple-date-validator)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/simple-date-validator.svg)](https://github.com/arshadkazmi42/simple-date-validator)
[![LICENSE](https://img.shields.io/npm/l/simple-date-validator.svg)](https://github.com/arshadkazmi42/simple-date-validator/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/simple-date-validator.svg)](https://github.com/arshadkazmi42/simple-date-validator/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/simple-date-validator.svg)](https://github.com/arshadkazmi42/simple-date-validator/commits/master)

## How to install?
[![NPM](https://nodei.co/npm/simpledatevalidator.png)](https://www.npmjs.com/package/simpledatevalidator/)

## How to use?
Pass date and date format to `isValidDate` function.
Function will validate and return true or false.

```javascript
// Create Instance of the DateValidator
const DateValidator = require('simple-date-validator');

// This will return True
DateValidator.isValidDate("2017-09-27","YYYY-MM-DD");

// This will return False
DateValidator.isValidDate("27-09-27","YYYY-MM-DD");
```

## Contributing Guidelines

Read the contributing guidelines [here](https://github.com/arshadkazmi42/simple-date-validator/blob/master/CONTRIBUTING.md)

