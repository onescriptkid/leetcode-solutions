/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {

  let i = 0
  let digits = new Set('0123456789')

  let arr = []
  while(i < s.length) {
    let c = s[i]
    if(!digits.has(c)) {
      arr.push(c)
    } else {
      arr.pop()
    }
    i++
  }
  return arr.join('')
};