/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0
  for(let i = 0; i < s.length; i++) {
    let opt1 = expand(i, i)
    let opt2 = expand(i, i+1)

    count+=opt1+opt2
  }

  return count

  function expand(l, r) {
    let count = 0
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
      count++
    }
    return count
  }
};