// @flow

module.exports.isString = function isString(object: any): boolean {
  return typeof object === 'string';
};

module.exports.isHexCode = function isHexCode(string: string = ''): boolean {
  const hex = `#${String(string).replace(/#/g, '')}`;
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
};
