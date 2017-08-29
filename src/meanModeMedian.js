function median(array){
  array = array.sort((a,b) => {a -b})
  if (array.length % 2 === 0){
    var median1 = array[(Math.floor(array.length/2))]
    var median 2 = array[(Math.floor(array.length/2))+1]
    var median = (median1 + median2)/2
    return median
  }
  else {
    return array[Math.floor(array.length/2)]
  }
}

function mean(array){
  var mean = 0
  array.forEach(i=> mean += i)
  mean = mean/array.length
  return mean
}

function mode(array){
  var count = {}
  array.forEach(i => {
    var key = array[i-1].toString()
    if (count[key] > 0){
      count[key] ++}
    else count[key] = 1
  })
  var arrayOfMost = Object.keys(count).reduce(function(previous, key) {
      if (count[key] > previous[1]){
        return [key, count[key]]
      } else return previous
  }, ["0", 0]);
  return parseInt(arrayOfMost[0])
}

median([2, 1, 2, 3, 4])

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

function getMean(array) {
  var sum = 0;

  array.forEach(num => {
    sum += num;
  });

  var mean = sum / array.length;
  return mean;
}

function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

meanMedianMode([9,10,23,10,23,9]);
