/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0
  for(let i = 0; i < s.length; i++) {
    let opt0 = expand(i, i)
    let opt1 = expand(i, i+1)

    count+=opt0 + opt1
  }   

  return count

  function expand(l, r) {
    let count = 0
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
    return count
  }
};