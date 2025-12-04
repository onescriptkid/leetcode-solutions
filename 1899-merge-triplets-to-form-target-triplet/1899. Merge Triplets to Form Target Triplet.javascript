/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {

  let mx, my, mz

  for(let [x,y,z] of triplets) {
    if(x === target[0] && y <= target[1] && z <= target[2]) {
      mx = x
    }
    if(y === target[1] && x <= target[0] && z <= target[2]) {
      my = y
    }
    if(z === target[2] && x <= target[0] && y <= target[1]) {
      mz = z
    }
    if(mx === target[0] && my === target[1] && mz === target[2]) {
      return true
    }
  }   
  return false
};