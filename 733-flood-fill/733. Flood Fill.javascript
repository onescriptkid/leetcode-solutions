/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let rows = image.length
  let cols = image[0].length
  let fill = image[sr][sc]
  function dfs(r, c) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(image[r][c] !== fill) return 
    if(image[r][c] === color) return
    image[r][c] = color
    dfs(r+1, c)
    dfs(r-1,c)
    dfs(r, c+1)
    dfs(r, c-1)
  }
  dfs(sr,sc)
  return image
};