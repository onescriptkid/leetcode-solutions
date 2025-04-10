/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  let i = 0;
  let j = 0;
  let positions = []
  while(i < arr.length) {
    for(let k = 0; k < pieces.length; k++) {
      let piece = pieces[k]
      if(piece[0] === arr[i]) {
        positions.push(piece)
      }
    }
    i++
  }
  let out = []
  for(let i = 0; i < positions.length; i++) {
    let position = positions[i]
    out.push(...position)
  }
  console.log(positions)
  console.log(out)

  for(let i = 0; i < arr.length; i++) {
    let val = arr[i]
    if(val !== out[i]) {
      return false
    }
  }
  return true

};