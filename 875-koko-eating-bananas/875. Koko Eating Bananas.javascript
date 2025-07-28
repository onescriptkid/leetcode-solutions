/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let max = Math.max(...piles)
  let l = 1
  let r = max
  let min = max

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let hours = 0
    for(let pile of piles) {
      hours+=Math.ceil(pile / m)
    }

    if(hours <= h) {
      min = Math.min(min, m)
      r = m - 1
    }
    if(hours > h) {
      l = m + 1
    }
  }
  return min
};