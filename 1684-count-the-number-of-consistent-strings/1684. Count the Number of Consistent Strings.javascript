/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let set = new Set(allowed.split(''))

  let count = 0
  for (let word of words) {
    let consistent = true  
    for(let i = 0; i < word.length; i++) {
      let c = word[i]
      if(!set.has(c)) {
        consistent = false
        break;
      }
    }
    if(consistent) {
      count++
    }
  }
  return count
};