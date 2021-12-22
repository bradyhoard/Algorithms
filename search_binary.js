var start_array = [1, 8, 11, 12, 14, 44, 77, 213, 333, 4110, 5000];

var expected_output = 8;

var inputted_output;

var index;

[inputted_array, index] = sortingArray(
  start_array,
  1,
  start_array.length - 1,
  expected_output
);
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

function sortingArray(arr, s, e, target) {
  var middle = 1 + Math.round((e - s) / 2);

  if (arr[middle] === target) {
    return [arr[middle], middle];
  }

  //go to left side

  if (arr[middle] > target) {
    return sortingArray(arr, s, middle - 1, target);
  }

  //go to right side

  if (arr[middle] < target) {
    return sortingArray(arr, s + middle, e, target);
  }

  return -1;
}
