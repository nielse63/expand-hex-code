
export function isString(object) {
  return typeof object === 'string';
}

export function isHexCode(string = '') {
  const hex = `#${String(string).replace(/#/g, '')}`;
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
}

export default function expandHexCode(string = '') {
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
}
