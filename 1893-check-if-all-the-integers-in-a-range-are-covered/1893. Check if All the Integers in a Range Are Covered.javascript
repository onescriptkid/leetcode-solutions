/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  let set = new Set() 
  for(let i =0; i < ranges.length; i++) {
    let range = ranges[i]
    let [start, end] = range
    console.log(start, end)
    for(let j = start; j <=end; j++) {
      set.add(j)
    }
  }
  console.log(set)
  for(let i = left; i<=right; i++) {
    if(!set.has(i)) {
      return false
    }
  }
  return true
};