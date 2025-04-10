/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  s = s.toLowerCase()
  let m = s.length >> 1
  let left = s.substring(0, m)
  let right = s.substring(m, s.length)

  let vowels = new Set('aeiou')
  let lc = 0
  let rc = 0
  for(let c of left) {
    if(vowels.has(c))lc++
  }
  for(let c of right) {
    if(vowels.has(c))rc++
  }
  return lc === rc
    
};