/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {

  let r = arr.length / 20

  let s = r
  let l = r

  arr.sort((a, b) => {
    if(a > b) {
      return 1
    } else {
      return -1
    }
  })

  arr = arr.slice(0 + r, arr.length - r)
  let sum = 0
  arr.forEach(v => sum+=v)
  let mean = sum / arr.length
  // console.log(arr, mean)
  return mean
};
