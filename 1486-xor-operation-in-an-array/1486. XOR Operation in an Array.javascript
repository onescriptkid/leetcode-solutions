/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let out = []
  let xor = 0
  for(let i = 0; i < n; i++) {
    let num = start + 2 * i
    out.push(num)
    xor=xor ^ num
  }

  return xor
};