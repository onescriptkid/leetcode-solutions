/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {


  let digitsums = []
  for(let num of nums) {
    digitsums.push(getDigitSum(num))
  }

  function getDigitSum(num) {
    let sum = 0

    let tmp = num
    while(tmp > 0) {
      let digit = tmp % 10
      sum+=digit
      tmp = Math.floor(tmp / 10)
    }
    return sum
  }
  let min
  for(let num of digitsums) {
    if(min === undefined) {
      min = num
    } else if(num < min) {
      min = num
    }
  }
  return min

};