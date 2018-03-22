function testOptional(fn, callback) {
  try {
    fn.call(this, callback);
  } catch (err) {
    if (err.message === 'Not implemented') {
      this.test.skip();
    } else {
      throw err;
    }
  }
}

function itSync(title, fn) {
  it(title, function () {
    testOptional.call(this, fn);
  });
}

function itAsync(title, fn) {
  it(title, function (done) {
    testOptional.call(this, fn, done);
  });
}

module.exports = {
  itSync,
  itAsync
};
