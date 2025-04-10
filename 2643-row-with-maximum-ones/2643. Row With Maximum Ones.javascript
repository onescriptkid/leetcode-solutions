/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {

   let pos
   let max

  for (let i = 0; i < mat.length; i++) {
    let count = 0
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++
      }
    }
    if(max === undefined) {
      max = count
      pos = i
    } else if(count > max) {
      max = count
      pos = i
    }
  } 
  return [pos, max]
};