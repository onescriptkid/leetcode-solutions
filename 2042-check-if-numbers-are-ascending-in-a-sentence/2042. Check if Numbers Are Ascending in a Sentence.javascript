/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  let words = s.split(' ')
  let prev
  for(let word of words) {
    let num = Number(word)
    if(!Number.isNaN(num)) {
      if(prev !== undefined) {
        if(num <= prev) return false
      }
      prev = num
    }
  }
  return true
};