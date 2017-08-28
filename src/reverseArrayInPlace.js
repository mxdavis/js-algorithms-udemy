function reverseArrayInPlace(arr){
  for (let i = 0; i<arr.length/2; i++) {
    var firstVar = arr[i]
    var location = arr.length - 1 - i
    arr[i] = arr[location]
    arr[location] = firstVar
  }
  return arr
}

reverseArrayInPlace([1, 2, 3, 4])
