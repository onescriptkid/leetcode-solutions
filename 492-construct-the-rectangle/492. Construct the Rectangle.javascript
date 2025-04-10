/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {

  // 10
  // L   W
  // 16  1
  //  8  2
  //  4  4

  //  3  3.3
  //  4  2.5
  //  5  2

  for(let w = Math.floor(area **0.5); w >= 0; w--) {
    let l = area / w
    // console.log('l', l, 'w', w)
    if(l % 1 === 0) {
      return [l, w]
    }
  }
};