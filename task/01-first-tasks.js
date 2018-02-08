function concatenateStrings(value1, value2) {
    return value1 + value2
}

function testingPassFunction(value1, value2) {
    throw new Error('Not implemented');
}

module.exports = {
    concatenateStrings: concatenateStrings,
    testingPassFunction: testingPassFunction,
}