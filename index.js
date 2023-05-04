// Bubble sort
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

// Quick sort
function quickSort(arr, left = 0, right = arr.length - 1) {
	let index;
	if (arr.length <= 1) return arr;
	else {
		index = partition(arr, left, right);
		if (left < index - 1) {
			quickSort(arr, left, index - 1);
		}
		if (index < right) {
			quickSort(arr, index, right);
		}
	}
	return arr;
}

function partition(arr, left, right) {
	const pivot = arr[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;
	while (i <= j) {
		while (arr[i] < pivot) i += 1;
		while (arr[j] > pivot) j -= 1;
		if (i <= j) {
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i += 1;
			j -= 1;
		}
	}
	return i;
}
