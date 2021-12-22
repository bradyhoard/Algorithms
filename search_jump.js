var start_array = [
  0, 2, 5, 12, 44, 68, 82, 99, 111, 130, 300, 1010, 3400, 6723,
];

var expected_output = 0;

var inputted_output;

var index;

[inputted_array, index] = sortingArray(
  start_array,
  start_array.length,
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

function sortingArray(arr, len, target) {
  var returnNum;

  var steps = Math.round(Math.sqrt(len));

  var threshold = steps;

  while (steps < len + threshold) {
    if (arr[steps] === target) {
      return [arr[steps], steps];
    } else if (arr[steps] > target || arr[steps] === undefined) {
      for (var i = steps - threshold; i < steps; i++) {
        console.log(arr[i]);
        if (arr[i] === target) {
          return [arr[i], i];
        }
      }
    } else {
      steps = steps + threshold;
    }
  }

  return [-1, "NULL"];
}
