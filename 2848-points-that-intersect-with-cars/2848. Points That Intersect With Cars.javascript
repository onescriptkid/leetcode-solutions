/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {

  // 0 1 2 3 4 5 6 7 8
  //       x x x x -
  //   x x x x x -
  //         x x x x -
  let line = new Array(101).fill(0)
  for(let [s,e] of nums) {
    line[s]++
    line[e+1]--
  }

  let count = 0
  let total = 0
  for(let i = 0; i < line.length; i++) {
    count+=line[i]
    if(count > 0) {
      total++
    }
  }
  return total

};