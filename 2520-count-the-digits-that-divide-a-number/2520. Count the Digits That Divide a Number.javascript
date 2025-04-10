/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let n = num
  let count = 0
  while(n !== 0) {
    let digit = n % 10
    if(num % digit === 0) count++

    n = Math.floor(n / 10)
  }
  return count
};