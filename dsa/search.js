// find biggest number in array(normal sorted array) using binary search

function binarySearch(array, num) {
  let left = 0;
  let right = array.length - 1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === num) {
      return mid;
    }
    if (num > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));

// normal search

// function findBiggestElement(array) {
//   let left = 0;
//   let right = array.length - 1;
//   let num = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > num) {
//       num = array[index];
//     }
//   }
//   return num;
// }

// console.log(findBiggestElement([1, 4, 2, 7, 8, 9]));

function findBiggestNumberInNestedArray(arr) {
  let biggest = -Infinity;

  for (const element of arr) {
    const value = Array.isArray(element)
      ? findBiggestNumberInNestedArray(element)
      : element;

    biggest = Math.max(biggest, value);
  }

  return biggest;
}

console.log(findBiggestNumberInNestedArray([1, [5, 10], [3, [20, 7]]]));
// 20

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

const arr = [1, 2, 4, 4, 4, 6, 8]; //7
