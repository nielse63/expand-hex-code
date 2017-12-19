
const { isString, isHexCode } = require('./utils');

module.exports = function expandHexCode(string = '') {
  if (!isString(string)) {
    throw new TypeError('Input is not a string');
  }
  const hex = `#${string.replace(/#/g, '')}`;
  if (!isHexCode(hex)) {
    throw new TypeError('Invalid hex code provided');
  }
  const noHash = hex.replace(/#/, '');
  if (noHash.length > 3) {
    return `#${noHash}`;
  }
  return `#${noHash[0]}${noHash[0]}${noHash[1]}${noHash[1]}${noHash[2]}${noHash[2]}`.toLowerCase();
};
