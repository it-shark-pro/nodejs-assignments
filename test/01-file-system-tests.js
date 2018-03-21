const fs = require('fs');
const stream = require('stream');
const tasks = require('../task/01-file-system');

describe('FS-MODULE ::', () => {
  describe('READ FILE:', () => {
    const readFilePath = `${__dirname}/read-test-file.txt`;
    const readFileContent = 'my test file data that I will read';

    beforeEach(() => {
      fs.writeFileSync(readFilePath, readFileContent);
    });

    afterEach(() => {
      fs.unlinkSync(readFilePath);
    });

    after(() => {
      if (fs.existsSync(readFilePath)) fs.unlinkSync(readFilePath);
    });

    describe('readFileSync', () => {
      itSync('should return string', () => {
        assert.isString(tasks.readFileSync(readFilePath), 'returned data is not a string');
      });

      itSync('should return file data', () => {
        assert.equal(tasks.readFileSync(readFilePath), readFileContent);
      });
    });

    describe('readFileAsync', () => {
      itAsync('should pass to callback string', (done) => {
        tasks.readFileAsync(readFilePath, (err, data) => {
          if (err) done(err);

          assert.isString(data, 'file data is not a string');
          done();
        });
      });

      itAsync('should pass to callback file data', (done) => {
        tasks.readFileAsync(readFilePath, (err, data) => {
          if (err) done(err);

          assert.equal(data, readFileContent);
          done();
        });
      });
    });
  });

  describe('WRITE FILE:', () => {
    const writeFilePath = `${__dirname}/write-test-file.txt`;
    const writeFileContent = 'I will write this string into file';

    afterEach(() => {
      fs.unlinkSync(writeFilePath);
    });

    describe('writeFileSync', () => {
      itSync('should return undefined', () => {
        assert.isUndefined(tasks.writeFileSync(writeFilePath, writeFileContent));
      });

      itSync('should write file by the given path', () => {
        tasks.writeFileSync(writeFilePath, writeFileContent);

        assert(fs.existsSync(writeFilePath), 'file was not written by the given path');
      });

      itSync('should write the given data in the file', () => {
        tasks.writeFileSync(writeFilePath, writeFileContent);

        assert.equal(fs.readFileSync(writeFilePath), writeFileContent);
      });
    });

    describe('writeFileAsync', () => {
      itAsync('should write file by the given path', (done) => {
        tasks.writeFileAsync(writeFilePath, writeFileContent, (err) => {
          if (err) done(err);

          assert(fs.existsSync(writeFilePath), 'file was not written by the given path');
          done();
        });
      });

      itAsync('should write the given data in the file', (done) => {
        tasks.writeFileAsync(writeFilePath, writeFileContent, (err) => {
          if (err) done(err);

          assert.equal(fs.readFileSync(writeFilePath), writeFileContent);
          done();
        });
      });
    });
  });

  describe('STREAMS:', () => {
    const streamFilePath = `${__dirname}/stream-test-file.txt`;
    const newStreamFilePath = `${__dirname}/new-stream-test-file.txt`;
    const streamData = 'This is test file for tasks on streams';

    describe('readFileInStream', () => {
      beforeEach(() => {
        fs.writeFileSync(streamFilePath, streamData);
      });

      afterEach(() => {
        fs.unlinkSync(streamFilePath);
      });

      after(() => {
        if (fs.existsSync(streamFilePath)) fs.unlinkSync(streamFilePath);
      });

      itSync('should return readable steram', () => {
        assert.instanceOf(tasks.readFileInStream(streamFilePath), stream.Readable);
      });

      itAsync('should return the given file data in the stream', (done) => {
        let fileData = '';

        tasks.readFileInStream(streamFilePath)
          .on('data', (data) => {
            fileData += data;
          })
          .on('end', () => {
            assert.equal(fileData, streamData);
            done();
          });
      });
    });

    describe('writeFileInStream', () => {
      itSync('should return writable steram', () => {
        assert.instanceOf(tasks.writeFileInStream(streamFilePath, streamData), stream.Writable);
      });

      itAsync('should write file by the given path', (done) => {
        tasks.writeFileInStream(streamFilePath, streamData)
          .on('finish', () => {
            assert(fs.existsSync(streamFilePath), 'file was not written by the given path');
            done();
          });
      });

      itAsync('should write the given data in the file', (done) => {
        tasks.writeFileInStream(streamFilePath, streamData)
          .on('finish', () => {
            assert.equal(fs.readFileSync(streamFilePath), streamData);
            done();
          });
      });
    });

    describe('transformFile', () => {
      beforeEach(() => {
        fs.writeFileSync(streamFilePath, streamData);
      });

      afterEach(() => {
        fs.unlinkSync(streamFilePath);
        fs.unlinkSync(newStreamFilePath);
      });

      after(() => {
        if (fs.existsSync(streamFilePath)) fs.unlinkSync(streamFilePath);
      });

      itSync('should return writable steram', () => {
        assert.instanceOf(tasks.transformFile(streamFilePath, newStreamFilePath), stream.Writable);
      });

      itAsync('should change file data', (done) => {
        tasks.transformFile(streamFilePath, newStreamFilePath)
          .on('finish', () => {
            assert.equal(fs.readFileSync(newStreamFilePath), 'This_is_test_file_for_tasks_on_streams');
            done();
          });
      });
    });
  });
});
