# expand-hex-code

[![Build Status](https://travis-ci.org/nielse63/expand-hex-code.svg?branch=master)](https://travis-ci.org/nielse63/expand-hex-code)
[![Coverage Status](https://coveralls.io/repos/github/nielse63/expand-hex-code/badge.svg?branch=master)](https://coveralls.io/github/nielse63/expand-hex-code?branch=master)
[![devDependencies Status](https://david-dm.org/nielse63/expand-hex-code/dev-status.svg)](https://david-dm.org/nielse63/expand-hex-code?type=dev)
[![Code Climate](https://codeclimate.com/github/nielse63/expand-hex-code/badges/gpa.svg)](https://codeclimate.com/github/nielse63/expand-hex-code)
[![NPM version](https://badge.fury.io/js/expand-hex-code.svg)](http://badge.fury.io/js/expand-hex-code)
[![npm](https://img.shields.io/npm/dt/expand-hex-code.svg?style=flat-square)](https://www.npmjs.com/package/expand-hex-code)

Expand hex codes from three to six digits

## Installation

### With `npm`

```sh
npm install expand-hex-code
```

### With `yarn`

```sh
yarn add expand-hex-code
```

## Usage

### In a node project

Import the script to your project

```js
import expandHexCode from "expand-hex-code";
// or
const expandHexCode = require("expand-hex-code");
```

And execute the script:

```js
const hexCode = expandHexCode("#000"); // #000000
const hexCode = expandHexCode("#cb0"); // #ccbb00
const hexCode = expandHexCode("#ffffff"); // #ffffff
```

## Contributing

Fork the repo and clone locally, then run:

```sh
yarn install
```

This will install the `devDependencies` packages and build the `dist` folder.

Once you've made your desired changes, make sure to write any new tests for
your feature and run the tests:

```sh
yarn test
```

If all tests pass, [create a pull request](https://github.com/nielse63/expand-hex-code/pulls).
