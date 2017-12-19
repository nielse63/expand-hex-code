
const { isString, isHexCode } = require('../../src/utils');
const { objects } = require('../shared');

const strings = ['string', ''];

describe('#isString', () => {
  describe('sanity', () => {
    it('should be a function', () => {
      expect(isString).to.be.a.function;
    });
  });

  describe('happy path', () => {
    strings.forEach((string) => {
      it('should be true', () => {
        expect(
          isString(string),
        ).to.be.true;
      });
    });
  });

  describe('sad path', () => {
    objects.forEach((object) => {
      it('should be false', () => {
        expect(
          isString(object),
        ).to.be.false;
      });
    });
  });
});

describe('#isHexCode', () => {
  before(() => {
  });

  describe('sanity', () => {
    it('should be a function', () => {
      expect(isHexCode).to.be.a.function;
    });
  });

  describe('happy path', () => {
    let i = 0;
    while (i < 14) {
      let hex = Math.floor(Math.random() * 16777215).toString(16);
      if (i % 2 === 0) {
        hex = `#${hex}`;
      }
      if (hex.replace(/#/, '').length > 5) {
        it(`should be true (${hex})`, () => {
          expect(
            isHexCode(hex),
          ).to.be.true;
        });
      }
      i += 1;
    }
  });

  describe('sad path', () => {
    objects.forEach((object) => {
      it('should be false', () => {
        expect(
          isHexCode(object),
        ).to.be.false;
      });
    });

    it('should be false for no parameter', () => {
      expect(
        isHexCode(),
      ).to.be.false;
    });
  });
});
