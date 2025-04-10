/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {

  //             0 1 2 3 4 5
  // 2 3 4 7 11    1 5 6 8 9 10 
  //             j

  let set = new Set(arr)
  let j = 0
  let i = 1
  while(true) {
    // console.log('i', i, 'j', j)
    if(!set.has(i)) {
      j++
    }
    if(j === k) {
      return i
    }

    i++
  } 
};