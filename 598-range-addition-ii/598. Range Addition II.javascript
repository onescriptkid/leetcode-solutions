/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  let minr = m
  let minc = n
  for(let i = 0; i < ops.length; i++) {
    let [r, c] = ops[i]
    if(r < minr) {
      minr = r
    }
    if(c < minc) {
      minc = c
    }
  }
  return minr * minc
};