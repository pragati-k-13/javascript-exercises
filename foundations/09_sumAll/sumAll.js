const sumAll = function (a, b) {
  // get list of numbers from arguments
  let arr = 0;

  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      arr += i;
    }
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      arr += i;
    }
  }

  return arr;

  // arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
