var start_array = [
  0, 2, 5, 12, 44, 68, 82, 99, 111, 130, 300, 1010, 3400, 6723,
];

var expected_output = 5;

var inputted_output;

var index;

[inputted_array, index] = sortingArray(start_array, expected_output);
console.log("--------------------------------------------------------");

console.log("Start array:     " + start_array);

console.log("--------------------------------------------------------");

console.log("Expected Output: " + expected_output);

console.log("--------------------------------------------------------");

console.log("Your Output:     " + inputted_array);

console.log("--------------------------------------------------------");

if (expected_output == inputted_array) {
  console.log("Correct" + "| found at index: " + index);
} else {
  console.log("Wrong");
}
console.log("--------------------------------------------------------");

//return type array

function sortingArray(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      returnNum = arr[i];
      return [returnNum, i];
    }
  }

  return 0;
}

/* template 
var start_array = [
  0, 2, 5, 12, 44, 68, 82, 99, 111, 130, 300, 1010, 3400, 6723,
];

var expected_output = 5;

var inputted_output;

var index;

[inputted_array, index] = sortingArray(start_array, expected_output);
console.log("--------------------------------------------------------");

console.log("Start array:     " + start_array);

console.log("--------------------------------------------------------");

console.log("Expected Output: " + expected_output);

console.log("--------------------------------------------------------");

console.log("Your Output:     " + inputted_array);

console.log("--------------------------------------------------------");

if (expected_output == inputted_array) {
  console.log("Correct" + "| found at index: " + index);
} else {
  console.log("Wrong");
}
console.log("--------------------------------------------------------");

//return type array

function sortingArray(arr, target) {
      return [returnNum, i];
    
  
}
*/
