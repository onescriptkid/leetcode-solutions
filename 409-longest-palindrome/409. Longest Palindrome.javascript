/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // Count all the evens
  // Count all the odds as (odd-1)
  
  // aaa bbb cc dddd

  let freq = {}
  for(let c of s) {
    freq[c] = (freq[c] || 0) + 1
  }

  let oddmax
  let sum = 0
  for(let c in freq) {
    if(freq[c] % 2 === 1) {
      oddmax = Math.max(oddmax, freq[c])
      sum+=freq[c]-1
    } else {
      sum+=freq[c]
    }

  }

  if(oddmax !== undefined) sum+=1

  return sum

  // count the longest odd
};