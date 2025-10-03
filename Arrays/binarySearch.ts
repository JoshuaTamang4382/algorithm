function binarySearch(arr: number[], x: number): number {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    // if the element is present at the mid
    if (arr[mid] == x) return mid;

    // if the element is greater than the mind
    if (arr[mid] < x) low = mid + 1;
    // if the element is less than the mid
    else high = mid - 1;
  }

  return -1;
}

const arr = [1, 2, 7, 8, 10, 11, 24, 35];
const x = 7;
const result = binarySearch(arr, x);
if (result == -1) console.log('Element is not present in the array');
else console.log('Element is at the index' + result);
