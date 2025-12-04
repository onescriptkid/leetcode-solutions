/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  let freq = {}
  let r = 0
  let l = 0
  let max = 0

  while(r < s.length) {
    let cr = s[r]
    r++

    freq[cr] = (freq[cr] || 0) + 1

    while(l < r && freq[cr] > 1) {
      let cl = s[l]
      l++
      freq[cl]--
    }

    let len = r - l
    max = Math.max(max, len)
  }
  return max
};