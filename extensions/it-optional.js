function sync(title, fn) {
  it(title, function () {
    try {
      fn.call(this);
    } catch (err) {
      if (err.message === 'Not implemented') {
        this.test.skip();
      } else {
        throw err;
      }
    }
  });
}

function async(title, fn) {
  it(title, function (done) {
    try {
      fn.call(this, done);
    } catch (err) {
      if (err.message === 'Not implemented') {
        this.test.skip();
      } else {
        throw err;
      }
    }
  });
}

module.exports = {
  sync,
  async,
};

