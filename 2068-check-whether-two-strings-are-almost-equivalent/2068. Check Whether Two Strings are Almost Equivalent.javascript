/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {

  let w1counts = {}
  let w2counts = {}
  for(let i = 0; i < word1.length; i++) {
    let c = word1[i]
    let c2 = word2[i]
    if(w1counts[c] === undefined) {
      w1counts[c] = 1
    } else {
      w1counts[c]++
    }
    if(w2counts[c2] === undefined) {
      w2counts[c2] = 1
    } else {
      w2counts[c2]++
    }
  } 


  // {a: 4}, {b:2, c:2}

  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let diff = 0
  for(let i = 0; i < letters.length; i++) {
    let c = letters[i]

    if(w2counts[c] === undefined && w1counts[c] === undefined) continue

    if(w2counts[c] === undefined && w1counts[c] !== undefined) {
      if(w1counts[c] >3) return false
      // diff+=w1counts[c]
    }
    if(w2counts[c] !== undefined && w1counts[c] === undefined) {
      if(w2counts[c] > 3) return false
      // diff+=w2counts[c]
    }
    if(w2counts[c] !== undefined && w1counts[c] !== undefined) {
      let nextdiff = Math.abs(w2counts[c] - w1counts[c])
      if(nextdiff > 3) return false
      // diff+=nextdiff
    }
  }
  // console.log(w1counts)
  // console.log(w2counts)
  // console.log(diff)
  return true
  // return diff <=3

};