/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  let max = ""
  for(let i = 0; i < s.length; i++) {

    let opt1 = expand(i, i)
    if(opt1.length > max.length) {
      max = opt1
    }

    let opt2 = expand(i, i+1)
    if(opt2.length > max.length) {
      max = opt2
    }
  }

  function expand(l, r) {
    if(s[l] !== s[r]) return ''

    let bl = l
    let br = r
    while(s[l] === s[r] && l >= 0 && r < s.length) {
      bl = l
      br = r
      l--
      r++
    }

    return s.substring(bl, br+1)
  }
  return max
};