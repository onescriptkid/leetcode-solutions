/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {

  let xz = Math.abs(z - x)
  let yz = Math.abs(z - y)

  if(xz === yz) return 0
  if(xz < yz) return 1
  if(xz > yz) return 2
};