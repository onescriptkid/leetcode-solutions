/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

  let suffixes = new Array(arr.length).fill(-1)
  let max = -1
  for(let i = arr.length - 1; i >= 0; i--) {
    suffixes[i] = max
    max = Math.max(max, arr[i])
  }

  // 17 18 5 4 6  1
  // 18  6 6 6 1 -1
  
  return suffixes


};