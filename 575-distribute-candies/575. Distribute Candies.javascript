/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

  // 1 1 2 2 3 3    
  let set = new Set()
  for(let ct of candyType) {
    set.add(ct)
  }

  let doctor = candyType.length / 2

  return Math.min(doctor, set.size)


};