/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {

  // bcbbbcba
  // x y
  //   xy
  //    xy
  //     x  y
  // r
  // l
  let l = 0
  let r = 0
  let counts = {}
  let max = 0
  while(r < s.length) {
    let right = s[r]
    r++
    if(counts[right] === undefined) {
      counts[right] = 1
    } else {
      counts[right]++
    }

    // shrink window
    while(counts[right] > 2) {
      let left = s[l]
      counts[left]--
      l++ 
    }

    let len = r - l
    if(len > max) {
      max = len
    }
  }
  return max
};