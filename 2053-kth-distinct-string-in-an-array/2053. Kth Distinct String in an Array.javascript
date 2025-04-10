/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  let freq = {}
  for(let str of arr) {
    freq[str] = (freq[str] || 0) + 1
  }

  let i = 0
  for(let str of arr) {
    if(freq[str] === 1) {
      i++
      if(i === k) {
        return str
      }
    }
  }
  return ""
};