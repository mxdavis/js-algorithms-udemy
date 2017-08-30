function bubbleSort(array){
  for (let i = 1; i < array.length; i++){
    for (let j = 0; j < array.length - i; j++){
      if (array[j] > array[j+1]) {
        const less = array[j+1]
        const great = array[j]
        array[j] = less
        array[j+1] = great
      }
    }
  }
  return array
}

bubbleSort([3, 2, 1, 4, 3, 5, 3, 7, 3, -1])

function bubbleSort2(array) {
  var counter = 0
    for (var i = array.length; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          counter ++
        }
      }
    }

    return array;
}

bubbleSort2([3, 2, 1, 4, 3, 5, 3, 7, 3, -1])
