/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {

  // Get letter counts licencsePlate
  let letters = new Set('abcdefghijklmnopqrstuvwxyz')
  let nums = new Set('0123456789')
  let min = undefined
  let lpcounts = {}
  let lp = licensePlate.toLowerCase()
  for(let i = 0; i < lp.length; i++) {
    let c = lp[i]
    if (letters.has(c)) {
      if (lpcounts[c] === undefined) {
        lpcounts[c] = 1
      } else {
        lpcounts[c]++
      }
    }
  }
  // Get letter counts of words
  for(let word of words) {

    let wcounts = {}
    for(let i = 0; i < word.length;i++) {
      let c = word[i]
      if(wcounts[c] === undefined) {
        wcounts[c] = 1
      } else {
        wcounts[c]++
      }
    }

    let chars = Object.keys(lpcounts)
    let isCompleting = true
    // console.log(word, wcounts, lpcounts)
    for(let char of chars) {
      let count = lpcounts[char]
      if(wcounts[char] === undefined) {
        isCompleting = false
      } else if(lpcounts[char] > wcounts[char]) {
        isCompleting = false
      }
    }    
    if(isCompleting) {
      if(min === undefined) {
        min = word
      } else if(word.length < min.length) {
        min = word
      }
    }
  }
  return min

  // Get shortest valid
};