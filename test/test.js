const assert = require('assert');
const validator = require('../controllers/validator');

describe('validator', function() {
  it('should return true for valid card numbers', function() {
      assert.ok(validator(testNumbersTrue[0]));
      assert.ok(validator(testNumbersTrue[1]));
      assert.ok(validator(testNumbersTrue[2]));
      assert.ok(validator(testNumbersTrue[3]));
      assert.ok(validator(testNumbersTrue[4]));
      assert.ok(validator(testNumbersTrue[5]));
      assert.ok(validator(testNumbersTrue[6]));
      assert.ok(validator(testNumbersTrue[7]));
      assert.ok(validator(testNumbersTrue[8]));
      assert.ok(validator(testNumbersTrue[9]));
      assert.ok(validator(testNumbersTrue[10]));
  })

  it('should return false for invalid card numbers', function() {
      assert.ok(!validator(testNumbersFalse[0]));
      assert.ok(!validator(testNumbersFalse[1]));
      assert.ok(!validator(testNumbersFalse[2]));
      assert.ok(!validator(testNumbersFalse[3]));
      assert.ok(!validator(testNumbersFalse[4]));
      assert.ok(!validator(testNumbersFalse[5]));
      assert.ok(!validator(testNumbersFalse[6]));
      assert.ok(!validator(testNumbersFalse[7]));
      assert.ok(!validator(testNumbersFalse[8]));
      assert.ok(!validator(testNumbersFalse[9]));
      assert.ok(!validator(testNumbersFalse[10]));
  })
});

// fake credit card numbers for testing from freeformatter.com
const testNumbersTrue = [
// VISA:
'4716836821877960',
// MasterCard:
'2221003346919023',
// American Express (AMEX):
'374856518864361',
// Discover:
'6011470981698573',
// JCB:
'3543049996586159327',
// Diners Club - North America:
'5487871917053089',
// Diners Club - Carte Blanche:
'30593638481075',
// Diners Club - International:
'36289675638255',
// Maestro:
'5018345002894549',
// Visa Electron:
'4175009551779160',
// InstaPayment:
'6382713486416954'
]

// The same numbers incremented by 1 to make them inaccurate
const testNumbersFalse = [
// VISA:
'4716836821877961',
// MasterCard:
'2221003346919024',
// American Express (AMEX):
'374856518864362',
// Discover:
'6011470981698574',
// JCB:
'3543049996586159328',
// Diners Club - North America:
'5487871917053080',
// Diners Club - Carte Blanche:
'30593638481076',
// Diners Club - International:
'36289675638256',
// Maestro:
'5018345002894540',
// Visa Electron:
'4175009551779161',
// InstaPayment:
'6382713486416955'
]
