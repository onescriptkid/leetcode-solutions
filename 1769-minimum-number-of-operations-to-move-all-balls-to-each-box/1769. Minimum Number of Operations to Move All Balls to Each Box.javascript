/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  // 110   1 1 3

  // 110   1 1 3
  // i
  let out = []
  for(let i = 0; i < boxes.length; i++) {
    let moves = 0 
    for(let j = 0; j < boxes.length; j++) {
      if(boxes[j] === '1') {
        let diff = Math.abs(i-j)
        // console.log('ij', i, j, 'boxes[j', boxes[j], 'diff', diff)
        moves+=diff
      }
    }
    out.push(moves) 
  }
  return out

    
};