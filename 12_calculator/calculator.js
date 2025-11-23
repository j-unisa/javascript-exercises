const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const sum = (arr) => arr.reduce((total, current) => total + current, 0);

const multiply = (arr) => arr.reduce((total, current) => total * current, 1);

const power = (base, exponent) => base ** exponent;

const factorial = function(x) {
	let total = 1;
  for (let i = x; i > 0; i--)
  {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
