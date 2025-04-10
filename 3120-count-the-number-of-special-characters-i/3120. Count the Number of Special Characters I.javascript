/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
  let uniqword = [...new Set(word)]

  let wordset = new Set(word)
  let res = new Set()

  for(let i = 0; i < uniqword.length; i++) {
    let c = uniqword[i]
    
    let isLower = c.toLowerCase() === c
    let isUpper = c.toUpperCase() === c

    if(isLower) {
      if(wordset.has(c.toUpperCase())) {
        res.add(c.toLowerCase())
      }
    } else {
      if(wordset.has(c.toLowerCase())) {
        res.add(c.toLowerCase())
      }
    }
  }
  // console.log(res)
  return res.size
};