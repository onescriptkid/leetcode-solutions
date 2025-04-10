/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {


  let out = []

  for (let word of words) {

    let str = ""
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(c === separator) {
        if(str.length > 0) {
          out.push(str)
          str = ""
        }
      } else {
        str+=c
      }
    }
    if(str !== "") {
      out.push(str)
    }
  } 
  return out
};