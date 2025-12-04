/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function(n, w, maxWeight) {

  // 0 0   n=2,  w=3
  // 0 0  
  let out = 0
  for (let i = 0; i < n**2; i++) {

    let isover = out+w
    if(isover <= maxWeight) {
      out+=w
    } else {
      return i
    }
  }
  return n**2
};