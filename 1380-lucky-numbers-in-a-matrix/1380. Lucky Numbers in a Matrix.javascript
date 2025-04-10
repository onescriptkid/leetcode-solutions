/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {

  let lucky = []
  let mins = []
  for (let i = 0; i < matrix.length; i++) {
    let min;
    for (let j = 0; j < matrix[i].length; j++) {
      let num = matrix[i][j]
      if(min === undefined) {
        min = num
      } else if(num < min) {
        min = num
      }
    }
    mins.push(min)
  }

  let maxes = new Set()
  for(let i = 0; i < matrix[0].length; i++) {
    let max 
    for(let j = 0; j < matrix.length; j++) {
      let num = matrix[j][i]
      if(max === undefined) {
        max = num
      } else if(num > max) {
        max = num
      }
    }
    maxes.add(max)
  }


  for(let min of mins) {
    if(maxes.has(min)) {
      lucky.push(min)
    }
  }
  return lucky
};