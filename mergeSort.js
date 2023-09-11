function mergeSort(array) {
    // Base case: If the array has 0 or 1 elements, it's already sorted.
    if (array.length <= 1) {
      return array;
    }
  
    // Split the array into two halves.
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
  
    // Recursively sort each half.
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);
  
    // Merge the sorted halves back together.
    return merge(leftSorted, rightSorted);
  }
  
  // Merge two sorted arrays into a single sorted array.
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from both arrays and merge them in sorted order.
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays.
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // Example usage:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Outputs: [11, 12, 22, 25, 34, 64, 90]
  