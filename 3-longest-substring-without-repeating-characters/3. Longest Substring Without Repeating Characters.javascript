/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let hash = {}
  // abcabcbb
  //    i

  let l = 0
  let r = 0
  let max
  while(r < s.length) {
    let cr = s[r]
    hash[cr] = (hash[cr] || 0) + 1
    r++

    while(l < r && hash[cr] > 1) {
      let cl = s[l]
      l++
      hash[cl]--
    }

    let len = r - l
    if(max === undefined) {
      max =  len
    } else if(len > max) {
      max = len
    }
  }
  return max || 0

};