/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {

  let left = k

  // Pick ones
  left = left - numOnes
  if(left <= 0) {
    return k
  }

  // Pick zeroes
  left = left - numZeros
  if(left <= 0) {
    return numOnes
  }

  // Pick ones
  // 7 3,2,2
  return numOnes - left 


};