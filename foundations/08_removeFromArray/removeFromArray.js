const removeFromArray = function (arr, ...theArgs) {
  let filteredArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (theArgs.includes(arr[i])) {
      continue;
    } else filteredArr.push(arr[i]);
  }

  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
