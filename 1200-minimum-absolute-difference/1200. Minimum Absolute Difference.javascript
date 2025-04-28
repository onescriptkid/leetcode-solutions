/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {

  let out = []

  arr.sort((a,b) => a > b ? 1 : -1)

  let min
  for(let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i]
    let next = arr[i+1]

    let diff = next - curr
    if(min === undefined) {
      min = diff
      out.push([curr,next])
    } else if(diff <min) {
      min = diff
      out = [[curr, next]]
    } else if(diff === min) {
      out.push([curr, next])
    }
  }

  return out
};