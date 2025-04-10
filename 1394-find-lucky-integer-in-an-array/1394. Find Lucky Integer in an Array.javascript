/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  let freq = {}
  for(let num of arr) {
    freq[num] = (freq[num] || 0) + 1
  } 

  let max 
  for(let key of Object.keys(freq)) {
    let count = freq[key]
    if(Number(key) === count) {
      if(max === undefined) {
        max = Number(key) 
      } else if (Number(key) > max) {
        max = Number(key)
      }
    }
  }
  if(max === undefined) return -1
  return max

};