const getImmutableObject = require('./0-fromjs');
const { Map } = require('immutable');

const testObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(testObject));

