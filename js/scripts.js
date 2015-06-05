

// Test
"use strict";

function f(x) {
  var y = arguments[1] === undefined ? 12 : arguments[1];

  return x + y;
}