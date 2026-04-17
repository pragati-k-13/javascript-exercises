const removeFromArray = function (arr, ...theArgs) {
  let filteredArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (theArgs.includes(arr[i])) {
      continue;
    } else filteredArr.push(arr[i]);
  }

  return filteredArr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
