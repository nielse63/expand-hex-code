/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(1),
    isString = _require.isString,
    isHexCode = _require.isHexCode;

module.exports = function expandHexCode() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!isString(string)) {
    throw new TypeError('Input is not a string');
  }
  var hex = '#' + string.replace(/#/g, '');
  if (!isHexCode(hex)) {
    throw new TypeError('Invalid hex code provided');
  }
  var noHash = hex.replace(/#/, '');
  if (noHash.length > 3) {
    return '#' + noHash;
  }
  return ('#' + noHash[0] + noHash[0] + noHash[1] + noHash[1] + noHash[2] + noHash[2]).toLowerCase();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {


module.exports.isString = function isString(object) {
  return typeof object === 'string';
};

module.exports.isHexCode = function isHexCode() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var hex = '#' + String(string).replace(/#/g, '');
  return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)
  );
};

/***/ })
/******/ ]);
//# sourceMappingURL=expand-hex-code.js.map