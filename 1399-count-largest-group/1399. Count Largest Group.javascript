/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let hash = {} 

  function getSum(n) {
    let tmp = n
    let sum = 0
    while(tmp > 0) {
      let digit = tmp % 10
      sum+=digit
      tmp = Math.floor(tmp / 10)
    }
    return sum
  }

  let max = undefined
  for(let i = 1; i <= n; i++) {
    let sum = getSum(i)
    hash[sum] = (hash[sum] || 0) + 1
    if(max === undefined) {
      max = hash[sum]
    } else if(hash[sum] > max) {
      max = hash[sum]
    }
  }
  // console.log('hash', hash, 'max', max)

  // {1:2, 2:2}
  let out = 0
  for(let key of Object.keys(hash)) {
    let count = hash[key]
    if(count === max) {
      out++
    }
  }
  return out
};