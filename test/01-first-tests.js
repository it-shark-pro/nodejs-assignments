const assert = require('assert');
const fs = require('fs');
const tasks = require('../task/01-first-tasks');
it.sync = require('../extensions/it-optional').sync;
it.async = require('../extensions/it-optional').async;

const path = './temporary';
const asyncPath = `${path}/async`;
const syncPath = `${path}/sync`;
const testText = 'this is a test text';

describe('01-first-tests', () => {
  it.sync(`createFloderSync should synchronously create a floder ${syncPath}`, () => {
    try {
      fs.mkdirSync(path);
      tasks.createFloderSync(`${syncPath}`);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }
    assert.equal(true, fs.existsSync(`${syncPath}`));
  });

  it.async(`createFloder should create a floder ${asyncPath}`, (done) => {
    tasks.createFloder(`${asyncPath}`, (err) => {
      if (err && err.code !== 'EEXIST') {
        throw err;
      }
      assert.equal(true, fs.existsSync(`${asyncPath}`));
      done();
    });
  });

  it.sync('createNewFileSync should synchronously create a file with name testSync.txt', () => {
    tasks.createNewFileSync(`${syncPath}`);
    assert.equal(true, fs.existsSync(`${syncPath}/testSync.txt`));
  });

  it.async('createNewFile should create file with name test.txt', (done) => {
    const callback = (err) => {
      if (!err) {
        assert.equal(true, fs.existsSync(`${asyncPath}/test.txt`));
        done();
      } else {
        done(new Error(err));
      }
    };
    tasks.createNewFile(`${asyncPath}`, callback);
  });

  it.sync(`writeFileSync should synchronously write text to a ${syncPath}/testSync.txt file`, () => {
    tasks.writeFileSync(`${syncPath}`, testText);
    assert.equal(fs.readFileSync(`${syncPath}/testSync.txt`).toString(), testText);
  });

  it.async(`writeFile should write text to a ${asyncPath}/test.txt file`, (done) => {
    const callback = (err) => {
      if (!err) {
        assert.equal(fs.readFileSync(`${asyncPath}/test.txt`).toString(), testText);
        done();
      } else {
        done(new Error(err));
      }
    };
    tasks.writeFile(`${asyncPath}`, testText, callback);
  });
});
