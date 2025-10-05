function selectionSort(arr: number[]): void {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds the minimum element
    let min_idx = i;

    // Iterate through the unsorted portion to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j;
      }
    }

    // Swap the found minimum element with the first element
    const temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
}

function printArray(arr: number[]): void {
  console.log(arr.join(' '));
}

// Driver code
const arr: number[] = [64, 25, 12, 22, 11];

console.log('Original array:');
printArray(arr);

selectionSort(arr);

console.log('Sorted array:');
printArray(arr);
