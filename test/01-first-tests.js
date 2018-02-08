var assert = require('assert');
var tasks = require('../task/01-first-tasks');
it.optional = require('../extensions/it-optional');

describe('01-first-tests', function() {
    it('concatenateStrings should return concatenation of two strings', function() {
      assert.equal(tasks.concatenateStrings('a', 'b'), 'ab');
    });
    it.optional('testingPassFunction should ignore a test', function() {
        assert.equal(tasks.testingPassFunction(), 'ab');
      });
});