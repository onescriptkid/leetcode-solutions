/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {

  let out = 0
  for(let r = 0; r < mat.length; r++) {
    for(let c = 0; c < mat[r].length; c++) {
      let val = mat[r][c]
      if(val === 1) {
        let special = true
        for(let i = 0; i < mat.length; i++) {
          if(r !== i && mat[i][c] === 1) {
            special = false
            break;
          }
        }
        for(let j = 0; j < mat[r].length; j++) {
          if(c !== j && mat[r][j] ===1) {
            special = false
            break
          }
        }
        if(special)out++
      }
    }
  }   
  return out
};

// mn * (m + n)