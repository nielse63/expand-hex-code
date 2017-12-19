
module.exports.isString = function isString(object) {
  return typeof object === 'string';
};

module.exports.isHexCode = function isHexCode(string = '') {
  const hex = `#${String(string).replace(/#/g, '')}`;
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
};
