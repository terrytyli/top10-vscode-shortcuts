export function quickSort(originalArray) {
  // Clone original array to prevent it from modification.
  const array = [...originalArray]

  // If array has less than or equal to one elements then it is already sorted.
  if (array.length <= 1) {
    return array
  }

  // Init left and right arrays.
  const leftArray = []
  const rightArray = []

  // Take the first element of array as a pivot.
  const pivotElement = array.shift()
  const centerArray = [pivotElement]

  // Split all array elements between left, center and right arrays.
  while (array.length) {
    const currentElement = array.shift()

    // Call visiting callback.
    this.callbacks.visitingCallback(currentElement)

    if (this.comparator.equal(currentElement, pivotElement)) {
      centerArray.push(currentElement)
    } else if (this.comparator.lessThan(currentElement, pivotElement)) {
      leftArray.push(currentElement)
    } else {
      rightArray.push(currentElement)
    }
  }

  // Sort left and right arrays.
  const leftArraySorted = this.sort(leftArray)
  const rightArraySorted = this.sort(rightArray)

  // Let's now join sorted left array with center array and with sorted right array.
  return leftArraySorted.concat(centerArray, rightArraySorted)
}

export function mergeSortedArrays(leftArray, rightArray) {
  let sortedArray = []

  // In case if arrays are not of size 1.
  while (leftArray.length && rightArray.length) {
    let minimumElement = null

    // Find minimum element of two arrays.
    if (this.comparator.lessThanOrEqual(leftArray[0], rightArray[0])) {
      minimumElement = leftArray.shift()
    } else {
      minimumElement = rightArray.shift()
    }

    // Call visiting callback.
    this.callbacks.visitingCallback(minimumElement)

    // Push the minimum element of two arrays to the sorted array.
    sortedArray.push(minimumElement)
    // add something else
  }

  // If one of two array still have elements we need to just concatenate
  // this element to the sorted array since it is already sorted.
  if (leftArray.length) {
    sortedArray = sortedArray.concat(leftArray)
  }

  if (rightArray.length) {
    sortedArray = sortedArray.concat(rightArray)
  }

  return sortedArray
}
