/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {

  arr.sort((a,b) => a > b ? 1 : -1)   

  // 1 3 6 10 15
  let out = []
  let min
  for(let i = 1; i < arr.length; i++) {
    let num = arr[i]
    let prev = arr[i-1]
    if(min === undefined) {
      min = Math.abs(num - prev)
      out.push([prev, num])
    } else if(Math.abs(num - prev) < min) {
      min = Math.abs(num - prev)
      out = []
      out.push([prev, num])
    } else if(Math.abs(num - prev) === min) {
      out.push([prev, num])
    }
  }
  return out
};