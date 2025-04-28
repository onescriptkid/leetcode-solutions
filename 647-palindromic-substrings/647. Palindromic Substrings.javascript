/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  function expand(l, r) {
    let count = 0
    while(s[l] === s[r] && l >= 0 && r < s.length) {
      count++
      l--
      r++
    }
    return count
  }
  let sum = 0
  for(let i = 0; i < s.length; i++) {
    let opt1 = expand(i, i)
    let opt2 = expand(i, i+1)
    // console.log('i', i, 'opt1', opt1, 'opt2', opt2, 'sum', sum)

    sum+=opt1 + opt2
  } 
  return sum
};