/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

  let set = new Set()
  for (let i = 0; i < words.length; i++) {
    let word1 = words[i]

    for(let j = 0; j < words.length; j++) {
      if(i === j) continue
      let word2 = words[j]

      if(word2.length >= word1.length) continue
      if(word1.indexOf(word2) !== -1 ) {
        set.add(word2)
      }

    }
  } 
  return [...set]
};