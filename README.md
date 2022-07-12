## Simple Date Validator Library

[![Build](https://github.com/arshadkazmi42/simpledatevalidator/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/simpledatevalidator/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/simpledatevalidator.svg)](https://www.npmjs.com/package/simpledatevalidator)
[![NPM Downloads](https://img.shields.io/npm/dt/simpledatevalidator.svg)](https://www.npmjs.com/package/simpledatevalidator)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/simpledatevalidator.svg)](https://github.com/arshadkazmi42/simpledatevalidator)
[![LICENSE](https://img.shields.io/npm/l/simpledatevalidator.svg)](https://github.com/arshadkazmi42/simpledatevalidator/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/simpledatevalidator.svg)](https://github.com/arshadkazmi42/simpledatevalidator/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/simpledatevalidator.svg)](https://github.com/arshadkazmi42/simpledatevalidator/commits/master)

## How to install?
[![NPM](https://nodei.co/npm/simpledatevalidator.png)](https://www.npmjs.com/package/simpledatevalidator/)

## How to use?
Pass date and date format to `isValidDate` function.
Function will validate and return true or false.

```javascript
// Create Instance of the DateValidator
const DateValidator = require('simpledatevalidator');

// This will return True
DateValidator.isValidDate("2017-09-27","YYYY-MM-DD");

// This will return False
DateValidator.isValidDate("27-09-27","YYYY-MM-DD");
```

## Contributing Guidelines

Read the contributing guidelines [here](https://github.com/arshadkazmi42/simpledatevalidator/blob/master/CONTRIBUTING.md)

