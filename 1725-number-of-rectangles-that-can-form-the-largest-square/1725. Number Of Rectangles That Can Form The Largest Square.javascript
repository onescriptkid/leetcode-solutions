/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {

  let maxLen;
  
  for(let i = 0; i < rectangles.length; i++) {
    let rect = rectangles[i]
    let [l, w] = rect
    let min = l < w ? l : w
    // console.log(min, maxLen)
    if(maxLen === undefined) {
      maxLen = min
    } else if(min > maxLen) {
      maxLen = min
    }
  }

  let out = 0
  console.log(maxLen)
  for(let i = 0; i < rectangles.length; i++) {
    let rect = rectangles[i]
    let [l, w] = rect
    let min = l < w ? l : w
    if(min  === maxLen) {
      out++
    }
  }
  return out
};