/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let l = 0
  let r = 0
  let max = 0
  for(let c of s) {
    if(c === '(') {
      l++
    } else {
      r++
    }
    if(l === r) {
      max = Math.max(max, 2*l)
    } else if(r > l) {
      l = r = 0
    }
  }  

  l=r=0
  for(let i = s.length - 1; i>= 0; i--) {
    let c = s[i]
    if(c === '(') {
      l++
    } else {
      r++
    }

    if(l === r) {
      max = Math.max(2*l, max)
    } else if(l > r) {
      l = r = 0
    }
  }

  return max
};