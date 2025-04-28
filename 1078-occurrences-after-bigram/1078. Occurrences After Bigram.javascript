/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {

  let words = text.split(' ')

  let prev0
  let prev1

  let out = []
  for(let word of words) {
    if(first === prev0 && second === prev1) {
      out.push(word)
    }
    prev0 = prev1
    prev1 = word
  }   

  return out
};