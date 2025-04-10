/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {

  let out = []

  for(let num of nums) {

    let digits = getDigits(num)
    for(let digit of digits) {
      out.push(digit)
    }
  }

  function getDigits(n) {
    if(n === 0) return [0]

    let arr = []
    while(n > 0) {
      let digit = n % 10
      arr.unshift(digit)
      n = Math.floor(n / 10)
    }
    return arr
  }
  return out
};