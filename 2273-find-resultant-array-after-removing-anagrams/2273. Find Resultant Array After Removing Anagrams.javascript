/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {

  let anagrams = []

  // walk over words

  // compare against anagrams
  function isAnagram(word, word2) {
    // console.log(word, word2)
    if(word.length !== word2.length) {
      return false
    }
    let count = {}
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(count[c] === undefined) {
        count[c] = 1
      } else {
        count[c]++
      }
    }
    for(let i = 0; i < word2.length; i++) {
      let c= word2[i]
      if(count[c] === undefined) {
        return false
      } else if(count[c] === 0) {
        return false
      }
      count[c]--
    }
    return true
  }

  // if new anagram, add to list of anagrams


  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    if(anagrams.length === 0) {
      anagrams.push(word)
      continue
    }

    let flag = false
    // for (let j = 0; j < anagrams.length; j++) {
      let word2 = anagrams[anagrams.length - 1]
      flag = isAnagram(word, word2)
      if (flag) {
        console.log(word, word2)
        // break;
      }
    // }
    if(flag === false) {
      anagrams.push(word)
    }
  }

  return anagrams
};