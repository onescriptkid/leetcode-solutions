/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {

  let set = new Set(allowed)
  let count = 0
  for(let word of words) {

    let consistent = true
    for(let c of word) {
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