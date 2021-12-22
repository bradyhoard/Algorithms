var start_array = [0, 12, 44, 6, 8, 13, 3];

var expected_array = [0, 3, 6, 8, 12, 13, 44];

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

  for (var i = 0; i < returnArr.length; i++) {
    for (var j = i + 1; j < returnArr.length; j++) {
      if (returnArr[i] > returnArr[j]) {
        var temp = returnArr[i];
        returnArr[i] = returnArr[j];
        returnArr[j] = temp;
      }
    }
  }

  return returnArr;
}
