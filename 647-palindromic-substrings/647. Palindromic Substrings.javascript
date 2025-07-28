/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0
  for(let i = 0; i < s.length; i++) {
    let opt1 = expand(i, i)
    let opt2 = expand(i, i+1)
    // console.log('i', i, 'opt1', opt1, 'opt2', opt2)
    res+=opt1+opt2
  }
  return res

  function expand(l, r) {
    if(s[l] !== s[r]) return 0

    let count = 0
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
    return count
  }

};