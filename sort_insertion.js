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

  for (var i = 1; i < returnArr.length; i++) {
    if (returnArr[i] < returnArr[i - 1]) {
      var currNum = returnArr[i];
      var j = i;

      for (var j = i; j >= 0; j--) {
        if (returnArr[j - 1] > currNum) {
          returnArr[j] = returnArr[j - 1];
        } else {
          returnArr[j] = currNum;
          break;
        }
      }
    }
  }

  return returnArr;
}
