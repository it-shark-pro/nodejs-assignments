const fs = require('fs');

/**
* createFloder should synchronously create a floder
*
* @param {string} path
*/
function createFloderSync(path) {
  fs.mkdirSync(path);
}

/**
* createFloder should create a floder
*
* @param {string} path
* @param {function} callback
*/
function createFloder(path, callback) {
  fs.mkdir(path, callback);
}

/**
* createNewFile should create file with name test.txt
*
* @param {string} path
* @param {function} callback
*/
function createNewFile(path, callback) {
  return fs.writeFile(`${path}/test.txt`, '', callback);
  // throw new Error('Not implemented');
}

/**
* createNewFileSync should synchronously create a file with name testSync.txt
*
* @param {string} path
*/

function createNewFileSync(path) {
  return fs.writeFileSync(`${path}/testSync.txt`);
  // throw new Error('Not implemented');
}

/**
* writeFileSync should synchronously write text to a testSync.txt file
*
* @param {string} path
* @param {string} text
*/
function writeFileSync(path, text) {
  return fs.writeFileSync(`${path}/testSync.txt`, text);
  // throw new Error('Not implemented');
}

/**
* writeFileSync should write text to a test.txt file
*
* @param {string} path
* @param {string} text
* @param {function} callback
*/
function writeFile(path, text, callback) {
  return fs.writeFile(`${path}/test.txt`, text, callback);
  // throw new Error('Not implemented');
}

module.exports = {
  createFloderSync,
  createFloder,
  createNewFile,
  createNewFileSync,
  writeFileSync,
  writeFile,
};
