/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {

  let set = new Set()

  // for(let i = 1; i < a)
  let i = 1
  let count= 0
  while(i <= a && i <= b) {
    if(a % i === 0 && b % i === 0) {
      count++
    }
    i++
  }
  return count
};