/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  // 2 9 15 50   5 3 7 2
  //             2 2 0 2

  let scores = []

  for (let divisor of divisors) {
    let score = 0
    for(let num of nums) {
      if(num % divisor === 0) {
        score++
      }
    }
    scores.push(score)
  }  
  // console.log(scores)
  let max = undefined
  let maxDivisor = undefined
  for(let i = 0; i < scores.length; i++) {
    let divisor = divisors[i]
    let score = scores[i]
    if(max === undefined) {
      max = score
      maxDivisor = divisor
    } else if(score > max) {
      max = score
      maxDivisor = divisor
    } else if(score === max) {
      if(divisor < maxDivisor) {
        maxDivisor = divisor
      }
    }
  } 
  return maxDivisor
};