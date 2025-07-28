/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {

  // L  W     20
  // 5  4
  // 10 2
  // 20 1
  for(let w = Math.floor(area ** 0.5); w >= 0; w--) {
    let l = area / w
    if(l % 1 === 0) {
      return [l, w]
    }
  }
  return [-1,-1]


};