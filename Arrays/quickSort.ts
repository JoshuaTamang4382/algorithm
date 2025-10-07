// swap function
function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// partition function
function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

// QuickSort function
function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Driver Code
const arr: number[] = [10, 7, 8, 9, 1, 5];
const n: number = arr.length;

quickSort(arr, 0, n - 1);

console.log('Sorted array:');
console.log(arr.join(' '));
