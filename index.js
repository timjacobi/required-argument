const isString = require('is-string');
const parseFunction = require('parse-function');

function required(){
	const funcName = required.caller.name ? `"${required.caller.name}"` : "<anonymous function>";

	throw new Error(`Missing argument in function ${funcName}`);
}

module.exports = required;
