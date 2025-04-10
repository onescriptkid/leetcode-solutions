/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

  let h = 0
  for(let i = 0; i < 32; i++) {
    let xb = (x >>i) & 1
    let yb = (y >>i) & 1

    if(xb !== yb) {
      h++
    }
  }
  return h

};