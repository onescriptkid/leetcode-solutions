/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  
  let freq= {}
  for(let num of arr) {
    freq[num] = (freq[num] || 0) + 1
  }

  let set = new Set()
  for(let key of Object.keys(freq)) {
    let count = freq[key]
    if(set.has(count)) {
      return false
    }
    set.add(count)
  }
  return true
};