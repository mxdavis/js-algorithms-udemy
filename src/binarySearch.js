function binarySearch(numArray, key){
  if (numArray.length === 1) {
    return numArray[0]
  } else {
    const left = numArray.splice(0, Math.floor(numArray.length/2))
    const right= numArray
    if (left.includes(key)) return binarySearch(left, key)
    else return binarySearch(right, key)
  }
}

binarySearch([1, 2, 3, 4], 4)

function binarySearch2(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];

    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}

binarySearch2([5, 7, 12, 16, 36, 39, 42, 56, 71], 56);
