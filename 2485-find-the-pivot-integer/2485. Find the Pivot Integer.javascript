/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {

  let sum = 0

  for(let i = 0; i <= n; i++) {
    sum+=i
  }

  let currsum = 0
  for(let i = 0; i <= n; i++) {
    currsum+=i
    // console.log(i, sum - currsum + i)
    if(currsum === sum - currsum + i) {
      return i
    }
  }
  return -1
    
};