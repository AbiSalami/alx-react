// Importing Immutable.js from the 'immutable' package
const { fromJS } = require('immutable');

/**
 * Converts a JavaScript object to an Immutable Map.
 * @param {Object} obj - The object to be converted.
 * @return {Map} - The Immutable Map representation of the object.
 */
function getImmutableObject(obj) {
    return fromJS(obj);
}

// Export the function for use in other modules or files
module.exports = getImmutableObject;

