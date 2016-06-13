# required-argument [![Build Status](https://travis-ci.org/timjacobi/required-argument.svg?branch=master)](https://travis-ci.org/timjacobi/required-argument)
Pass this function as a default argument to throw an error when the argument is `undefined`

## Example

```JavaScript
const required = require('required-argument');

function myFunc(a = required()){
  // do stuff
}

myFunc(); // Error: Missing argument in function "myfunc"
```

## Future
I'm experimenting with parsing the code to let you know which argument is missing but it's still not perfect yet. If you have any ideas on how to implement that or any other things you'd like to add please open an issue or PR.

## Credits
Inspired by [Six nifty ES6 tricks](http://www.2ality.com/2016/05/six-nifty-es6-tricks.html) by [@rauschma](https://github.com/rauschma)
