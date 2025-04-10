/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

  let counts = {}

  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if(counts[num] === undefined) {
      counts[num] = 1
    } else {
      counts[num]++
    }
  }   

  let keys = Object.keys(counts)
  let set = new Set()

  for(let key of keys) {
    let count = counts[key]

    if(set.has(count)) {
      return false
    } else {
      set.add(count)
    }
  }
  return true
};