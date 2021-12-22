var start_array = [0, 1, 4, 6, 8, 1, 3, 9, 4, 5];

var expected_array = [0, 1, 1, 3, 4, 4, 5, 6, 8, 9];

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

  var countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var i;

  for (i = 0; i < returnArr.length; i++) {
    countArr[returnArr[i]] += 1;
  }

  console.log(countArr);

  for (i = 0; i < countArr.length - 1; i++) {
    countArr[i + 1] = countArr[i] + countArr[i + 1];
  }

  console.log(countArr);

  var newArry = Array(returnArr.length).fill(0);

  for (i = 0; i < newArry.length; i++) {
    var val = returnArr[i];
    var index = countArr[val] - 1;
    newArry[index] = val;

    countArr[val] = countArr[val] - 1;
  }

  return newArry;
}
