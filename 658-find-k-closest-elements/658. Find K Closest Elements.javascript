/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let l = 0
  let r = arr.length - 1

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = arr[m]
    if(mid < x) {
      l = m + 1
    } else {
      r = m - 1
    }
  }   

  let li = l
  let ri = l - 1

  while(ri+1-li < k) {
    if(arr[ri+1] === undefined) {
      li--
    } else if(arr[li-1] === undefined) {
      ri++
    } else if(Math.abs(arr[li-1] -x) <= Math.abs(arr[ri+1] -x)) {
      li--
    } else {
      ri++  
    }
  }

  return arr.slice(li, ri+1)
};