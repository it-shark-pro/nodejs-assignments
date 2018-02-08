const assert = require('assert');
const tasks = require('../task/01-first-tasks');
it.optional = require('../extensions/it-optional');

describe('01-first-tests', () => {
  it('concatenateStrings should return concatenation of two strings', () => {
    assert.equal(tasks.concatenateStrings('a', 'b'), 'ab');
  });
  it.optional('testingPassFunction should ignore a test', () => {
    assert.equal(tasks.testingPassFunction(), 'test');
  });
});
