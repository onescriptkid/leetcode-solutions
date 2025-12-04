/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {

  // 0  2  1 -6  6 -7  9  1  2  0  1
  // 0  2  3 -3  3 -4  5  6  8  8  9
  //        |              |
  
  // 0  2  3 -3  3 -4  5  6  8  8  9

  let total = 0
  for(let num of arr) {
    total+=num
  }

  let each = total / 3
  let count = 0
  let currsum = 0
  // console.log('each', each)
  for(let num of arr) {
    // console.log('num', num, 'currsum', currsum, 'each', each, 'count', count)
    currsum+=num
    if(currsum === each) {
      count++
      currsum = 0
    }
  }

  return count >= 3


};