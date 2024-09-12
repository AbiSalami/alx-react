const getImmutableObject = require('./0-fromjs');
const { Map } = require('immutable');

const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(obj)); // Should output an Immutable Map

