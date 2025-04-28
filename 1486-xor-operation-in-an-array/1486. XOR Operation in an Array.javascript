/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  // 0 1 2 3 4 5     start= 0
  // 0 2 4 6 8 10

  let xor = 0
  for(let i = 0; i < n; i++) {
    let val = start + 2 * i
    xor = xor^val
  }
  return xor

};