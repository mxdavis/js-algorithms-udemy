function numArray(array, totalNum){
  var copyArray = array.slice(0)
  var pairsOfTotal = []
  array.forEach(num => {
    if (copyArray.indexOf(totalNum - num) !== -1) {
      copyArray.splice(copyArray.indexOf(totalNum - num), 1)
      copyArray.splice(copyArray.indexOf(num), 1)
      pairsOfTotal.push([num, totalNum - num])
    } else if (!copyArray.includes(num)){
    } else if (array.includes(totalNum - num) && copyArray.indexOf(totalNum - num) === -1){
      copyArray.splice(copyArray.indexOf(num), 1)
      pairsOfTotal.push([num, totalNum - num])
    } else if (copyArray.indexOf(totalNum - num) === -1) {
      console.log("hit not equal")
      copyArray.splice(copyArray.indexOf(num), 1)
    }
  })
  return pairsOfTotal
}

numArray([1, 6, 4, 5, 3, 3], 7)

function numArray2(array, totalNum){
  let sums = []
  array.forEach((number) => {
    for (let i = array.indexOf(number) + 1; i < array.length; i++) {
      if (number + array[i] === totalNum) sums.push([array[i],number])
    }
  })
  return sums
}
numArray2([1, 6, 4, 5, 3, 3], 7)

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);
