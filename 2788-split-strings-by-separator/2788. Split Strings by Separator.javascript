/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {

  let out = []

  for(let word of words) {
    // console.log('word', word, out)
    let str = ""
    for(let c of word) {
      if(c === separator) {
        if(str.length > 0) {
          out.push(str)
          str=""
        }
      } else {
        str+=c
      }
    }
    if(str.length > 0) {
      out.push(str)
    }

  }
  return out
};