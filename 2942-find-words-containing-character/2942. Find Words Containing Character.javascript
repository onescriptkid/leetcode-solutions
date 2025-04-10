/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
  let out = []
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let set = new Set(word)
    if(set.has(x)) {
      out.push(i)
    }
  }
  return out
};