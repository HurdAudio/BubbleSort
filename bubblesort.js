'use strict';

function bubbleSort (arr) {
  var done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < (arr.length-1); i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        done = false;
      }
    }
  }
  return (arr);
}

var testArray1 = [11, 17, 3, 19, 67, 2, 5];
var testArray2 = [88, 87, 86, 85, 84, 83, 82, 4];

console.log(bubbleSort(testArray1));
console.log(bubbleSort(testArray2));
