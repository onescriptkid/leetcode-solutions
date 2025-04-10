/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  let cat = ""
  for(let word of words) {
    cat+=word
    if(s === cat) {
      return true
    }
  } 

  return false
};