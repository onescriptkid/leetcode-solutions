/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  // Inplace
  //    0 1 2 3 
  // 0  2
  // 1  3 4
  // 2  6 5 7
  // 3  4 1 8 3     i=3
  for(let i = triangle.length -1; i >= 1; i--) {
    for(let j = 0; j < i;j++) {
      triangle[i-1][j] = triangle[i-1][j] + Math.min(triangle[i][j], triangle[i][j+1])
    }
  }  

  // console.log('triangle', triangle)
  return triangle[0][0]
};