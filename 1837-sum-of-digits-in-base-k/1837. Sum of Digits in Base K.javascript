/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {

  // convert
  let out = ""
  let num = n
  while(num > 0) {
    let digit = num % k
    out = digit + out 
    num = Math.floor(num / k)
  }
  console.log(out)

  // sum digits
  let sum = 0 
  for(let i = 0; i < out.length; i++) {
    let digit = Number(out[i])
    sum+=digit
  }
  return sum
};