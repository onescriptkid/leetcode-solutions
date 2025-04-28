/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let lower = new Set('abcdefghijklmnopqrstuvwxyz')
  let upper = new Set('abcdefghijklmnopqrstuvwxyz'.toUpperCase())

  let allCapitals = true
  let allLower = true
  for(let c of word) {
    if(lower.has(c)) {
      allCapitals = false
    }

    if(upper.has(c)) {
      allLower = false
    }
  }

  let first = upper.has(word[0])
  for(let i = 1; i < word.length; i++) {
    let c = word[i]
    if(upper.has(c)) {
      first = false
    }
  }

  return allCapitals || allLower || first

};