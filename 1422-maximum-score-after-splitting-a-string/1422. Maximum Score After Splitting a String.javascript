/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  // 012345
  // 011101
  // 011122
  // 443210 
  let zeroes = 0
  let left = []
  for (let i = 0; i < s.length-1; i++) {
    let c = s[i]
    if(c === "0") {
      zeroes++
    }
    left.push(zeroes)
  }

  let ones = 0
  let right = []
  for(let i = s.length-1; i >= 1; i--) {
    let c = s[i]
    if(c === "1") {
      ones++
    }
    right.unshift(ones)
  }

  let max
  for(let i = 0; i < left.length; i++) {
    let score = left[i] + right[i]
    if(max === undefined) {
      max = score
    } else if(score > max) {
      max = score
    }
  }
  return max
};