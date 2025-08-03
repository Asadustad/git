

const a = 50;
const b = 5;

console.log(`addition: ${a + b}`);

const sub = require('./sub.js');
const multiply = require('./multiply.js');
const divide = require('./divided.js');



console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

