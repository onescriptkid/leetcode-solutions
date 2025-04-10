/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {

  arr = arr.sort((a,b) => a > b ? 1 : -1) 

  let diff
  for(let i =1 ; i < arr.length; i++) {
    let val = arr[i]
    let prev = arr[i-1]
    if(diff === undefined) {
      diff = val - prev
    } else {
      if((val - prev) !== diff) {
        return false
      }
    }
  } 
  return true
};