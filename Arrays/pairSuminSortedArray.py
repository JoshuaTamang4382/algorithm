from typing import List

def twoSum(arr: List[int], target: int) -> List[int]:
    n = len(arr)
    # finding all possible pairs
    for i in range(n):
        for j in range(i + 1, n):
            sum = arr[i] + arr[j]
            if sum == target:
                return [i + 1, j + 1]
    # no pair sum with given target
    return [-1, -1]

if __name__ == "__main__":
    arr = [2, 7, 11, 15]
    target = 9
    result = twoSum(arr, target)
    for num in result:
        print(num, end=' ')
    print()