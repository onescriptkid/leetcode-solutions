/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {

  let patterns = {}
  for (let i = 0; i < arr.length - m + 1; i++) {
    let val = arr[i]
    let sub = arr.slice(i, i+ m)
    let pat = sub.join(',')

    if(patterns[pat] === undefined) {
      patterns[pat] = 1
    } else {
      patterns[pat]++
    }
    if(patterns[pat] >= k) {
      console.log(patterns)
      return true
    }
  }
  console.log(patterns)
  return false
};