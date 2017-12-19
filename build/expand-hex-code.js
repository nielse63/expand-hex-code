(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
exports.isHexCode = isHexCode;
exports.default = expandHexCode;
function isString(object) {
  return typeof object === 'string';
}

function isHexCode() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var hex = '#' + String(string).replace(/#/g, '');
  return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex)
  );
}

function expandHexCode() {
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
}

})));
