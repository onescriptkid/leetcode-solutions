/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max  
  for(let i = 0; i < s.length; i++) {
    let opt1 = expand(i, i)
    if(max === undefined || opt1.length > max.length) {
      max = opt1
    }

    let opt2 = expand(i, i+1)
    if(max === undefined || opt2.length > max.length) {
      max = opt2
    }
  }

  return max

  function expand(l, r) {
    if(s[l] !== s[r]) return ''

    let bl = l
    let br = r

    while(l >= 0 && r < s.length && s[l] === s[r]) {
      bl = l
      br = r
      l--
      r++
    }
    return s.slice(bl, br+1)
  }
};