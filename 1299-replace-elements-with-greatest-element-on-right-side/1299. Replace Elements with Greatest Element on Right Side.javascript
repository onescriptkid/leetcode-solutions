/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

  // 17  18  5  4  6  1
  // 18  18  6  6  6  1
  let max = undefined;
  let rtol = new Array(arr.length)
  for(let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i]
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
    rtol[i] = max
  }

  let out = []
  // console.log(rtol)
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let maxright = rtol[i+1] || -1
    out.push(maxright)
  }
  // console.log(out)
  return out
};