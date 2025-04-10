/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {

  let freq = {}
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(freq[c] === undefined) {
      freq[c] = 1
    } else {
      freq[c]++
    }
  }

  for(let i = 0; i < s.length-1; i++) {
    let num = s[i]
    let next = s[i+1]
    if(num !== next) {
      if(freq[num] === Number(num) && freq[next] === Number(next)) {
        return `${num}${next}`
      }
    }
  }
  return ''
  
};