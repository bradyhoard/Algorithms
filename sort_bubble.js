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
  var flag = false;
  while (!flag) {
    for (var i = 0; i < returnArr.length; i++) {
      if (returnArr[i] > returnArr[i + 1]) {
        var temp = returnArr[i];
        returnArr[i] = returnArr[i + 1];
        returnArr[i + 1] = temp;
        flag = true;
      }
    }
    if (flag) {
      flag = false;
    } else {
      return returnArr;
    }
  }
}

/*generic template 

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

  return returnArr;
}

*/
