/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following documentation before implementing tasks:                        *
 * https://nodejs.org/api/fs.html                                                           *
 * https://nodejs.org/api/stream.html                                                       *
 *                                                                                          *
 * Import module 'fs'.
 ****************************************************************************************** */

/**
 * Reads file by given path synchronously and returns file data.
 *
 * @param {String} path
 * @return {String}
 *
 * @example
 *   'filder/file.txt' => 'File content'
 */
function readFileSync(path) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Reads file by given path Asynchronously and returns promise with file data.
 *
 * @param {String} path
 * @return {Promise}
 *
 * @example
 *   'filder/file.txt' => Promise.resolve('File content')
 */
function readFileAsync(path, callback) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Writes given data in file by given path synchronously.
 *
 * @param {String} path
 * @return {undefined}
 *
 * @example
 *   'filder/file.txt', 'File content' => undefined
 *
 *   file by path 'filder/file.ext' with string 'File content' exists
 */
function writeFileSync(path, data) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Writes given data in file by given path Asynchronously.
 *
 * @param {String} path
 * @return {Promise}
 *
 * @example
 *   'filder/file.txt', 'File content' => Promise
 *
 *   file by path 'filder/file.ext' with string 'File content' exists
 */
function writeFileAsync(path, data, callback) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Reads file by given path in stream and returns this stream with file data.
 *
 * @param {String} path
 * @return {ReadStream}
 *
 * @example
 *   'filder/file.txt' => <ReadStream> with 'File content'
 */
function readFileInStream(path) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Writes given data in file by given path in a stream.
 *
 * @param {String} path
 * @return {WriteStream}
 *
 * @example
 *   'filder/file.txt', 'File content' => <WriteStream> with 'File content'
 */
function writeFileInStream(path, data) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Reads file by given path, replaces all spaces with '_' and wtites changed file by new path.
 * Use Transform stream and pipe method for transform file data:
 * https://nodejs.org/api/stream.html#stream_implementing_a_transform_stream
 * https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
 *
 * @param {String} path
 * @return {WriteStream}
 *
 * @example
 *   'filder/file.txt', 'filder/new-file.txt' => <WriteStream> with 'This_is_file_content'
 */
function transformFile(sourcePath, destinationPath) {
  /* implement your code here */
  throw new Error('Not implemented');
}

module.exports = {
  readFileSync,
  readFileAsync,
  writeFileSync,
  writeFileAsync,
  readFileInStream,
  writeFileInStream,
  transformFile
};
