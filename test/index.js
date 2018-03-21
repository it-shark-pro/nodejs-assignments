const { itAsync, itSync } = require('../extensions/it-optional');

global.assert = require('chai').assert;

global.itAsync = itAsync;
global.itSync = itSync;
