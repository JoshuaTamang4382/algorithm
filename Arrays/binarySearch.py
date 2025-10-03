def binarySearch(arr,x):
	low = 0
	high = len(arr) - 1
	while low <= high:

		mid = low + (high - low)//2

		# Check if x is present at the mid
		if x == arr[mid]:
			return arr[mid]
		
		# Check if x is greater, ignore left half
		elif arr[mid] < x:
			low = mid + 1

		# Check if x is smaller, ignore right half
		elif arr[mid] > x:
			high = mid - 1
		
	# if x is not present in the array
	return -1

if __name__ == '__main__':
	arr = [1,2,7,8,10,11,24,35]
	x = 24

	result = binarySearch(arr,x)
	if result!= -1:
		print("Element is present at index", result)
	else:
		print("Element is not present in array")