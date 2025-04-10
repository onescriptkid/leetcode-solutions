/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
  let largecolor = red > blue ? 'red' : 'blue'
  let large = red > blue ? red : blue
  let small = red > blue ? blue : red

  // start with blue
  let r = red
  let b = blue
  let i = 0
  while(true) {
    let ballsRequired = i + 1
    if(i % 2 === 0) {
      b = b - ballsRequired 
      if(b < 0) {
        break;
      }
    } else {
      r = r - ballsRequired
      if(r < 0) {
        break;
      }
    }
    i++
  }
  r = red
  b = blue
  let j = 0
  while(true) {
    let ballsRequired = j + 1
    if(j % 2 === 1) {
      b = b - ballsRequired 
      if(b < 0) {
        break;
      }
    } else {
      r = r - ballsRequired
      if(r < 0) {
        break;
      }
    }
    j++
  }

  return Math.max(i, j)
};