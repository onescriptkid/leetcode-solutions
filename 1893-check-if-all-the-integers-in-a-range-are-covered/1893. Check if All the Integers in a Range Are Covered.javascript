/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
  // 1 2 3 4 5 6 7 8 9 10
  //   x x x x
  // y y
  //     y y
  //         y y
  // 1   -
  //     1   -
  //         1   -

  let line = new Array(51).fill(0)
  for(let [s,e] of ranges) {
    line[s]+=1
    line[e+1]--
  } 

  let count = 0
  for(let i = 1; i < line.length; i++) {
    count+=line[i]
    if(i >= left && i <= right) {
      if(count <= 0) return false
    }
  }
  return true
};