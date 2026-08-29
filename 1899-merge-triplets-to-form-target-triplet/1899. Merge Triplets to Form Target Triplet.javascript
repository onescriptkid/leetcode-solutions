/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  let [tx, ty, tz] = target
  let cx, cy, cz = 0   

  for(let [x,y,z] of triplets) {
    if(x === tx && y <= ty && z <= tz) {
      cx = tx
    }
    if(y === ty && x <= tx && z <= tz) {
      cy = ty
    }
    if(z === tz && x <= tx && y <= ty) {
      cz = tz
    }
  }
  return cx === tx && cy === ty && cz === tz
};