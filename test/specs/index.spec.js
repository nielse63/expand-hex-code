
const expandHexCode = require('../../');
const { objects, hexCodes } = require('../shared');

describe('#expandHexCode', () => {
  describe('sanity', () => {
    it('should be a function', () => {
      expect(expandHexCode).to.be.a.function;
    });
  });

  describe('happy path', () => {
    hexCodes.forEach((hex) => {
      it('should expand hex code (3 to 6 characters)', () => {
        expect(
          expandHexCode(hex.short),
        ).to.equal(hex.long);
      });
    });
  });

  describe('sad path', () => {
    hexCodes.forEach((hex) => {
      it('should return 6 character hex codes', () => {
        expect(
          expandHexCode(hex.long.replace(/#/, '')),
        ).to.equal(hex.long);
      });
    });
  });

  describe('bad path', () => {
    objects.forEach((object) => {
      it('should throw error for non-strings', () => {
        expect(
          expandHexCode.bind(null, object),
        ).to.throw('Input is not a string');
      });
    });

    ['3333', '3', '33', '33333'].forEach((string) => {
      it('should throw error for non hex-codes', () => {
        expect(
          expandHexCode.bind(null, string),
        ).to.throw('Invalid hex code provided');
      });
    });

    it('should throw for no parameter', () => {
      expect(
        expandHexCode.bind(null),
      ).to.throw('Invalid hex code provided');
    });
  });
});
