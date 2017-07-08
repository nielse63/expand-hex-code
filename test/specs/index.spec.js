
import expandHexCode, { isString, isHexCode } from '../../';

const strings = ['string', ''];
const objects = [false, 10, {}, [], function fn() {}];

export default function IndexSpec() {
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
      while (i < 10) {
        let hex = Math.floor(Math.random() * 16777215).toString(16);
        if (i % 2 === 0) {
          hex = `#${hex}`;
        }
        if (hex.length > 5) {
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

  describe('#expandHexCode', () => {
    const hexCodes = [
      {
        long: '#333333',
        short: '#333',
      }, {
        long: '#ffffff',
        short: '#fff',
      }, {
        long: '#ccbb00',
        short: '#cb0',
      },
    ];

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
}
