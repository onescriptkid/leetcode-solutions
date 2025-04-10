/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

  // let total = 0
  let set = new Set(candyType)
  // for(let ct of candyType) {
  //   total+=ct
  // }
  
  // 12
  let doctor = candyType.length / 2

  return Math.min(doctor, set.size)

};