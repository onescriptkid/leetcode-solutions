/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let count = 3
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(num % 2 === 1) {
      count--
    } else {
      count = 3
    }
    if(count === 0) {
      return true
    }
  }
  return false
};