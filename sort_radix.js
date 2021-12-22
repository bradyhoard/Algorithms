var start_array = [0, 429, 12, 44, 6, 8, 13, 3, 110];

var expected_array = [0, 3, 6, 8, 12, 13, 44, 110, 429];

var inputted_array = [];

inputted_array = sortingArray(start_array);
console.log("--------------------------------------------------------");

console.log("Start array:     " + start_array);

console.log("--------------------------------------------------------");

console.log("Expected Output: " + expected_array);

console.log("--------------------------------------------------------");

console.log("Your Output:     " + inputted_array);

console.log("--------------------------------------------------------");

if (JSON.stringify(expected_array) == JSON.stringify(inputted_array)) {
  console.log("Correct");
} else {
  console.log("Wrong");
}
console.log("--------------------------------------------------------");

//return type array

function sortingArray(arr) {
  var returnArr = [...arr];

  var largest = Math.max(...returnArr).toString().length;

  for (var i = 0; i < largest; i++) {
    for (var j = 0; j < returnArr.length; j++) {
      for (var k = j + 1; k < returnArr.length; k++) {
        if (
          returnArr[j].toString()[i] !== undefined &&
          returnArr[k].toString()[i] === undefined
        ) {
          var temp = returnArr[j];
          returnArr[j] = returnArr[k];
          returnArr[k] = temp;
        } else if (
          returnArr[j].toString()[i] !== undefined &&
          returnArr[k].toString()[i] !== undefined
        )
          if (returnArr[j].toString()[i] > returnArr[k].toString()[i]) {
            var temp = returnArr[j];
            returnArr[j] = returnArr[k];
            returnArr[k] = temp;
          }
      }
    }
  }

  return returnArr;
}
