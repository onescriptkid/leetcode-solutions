/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {

  // 10 -> 2 5
  // 8 -> 1 2 4
  // 
  let sum = 1
  for (let i = 2; i <= Math.floor(num ** 0.5); i++) {
    if(num % i === 0) {
      sum+=i  
      sum+=(num / i)
    }
  }
  if(sum === 1) return false
  return sum=== num
};