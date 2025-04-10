/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

  let visited = []
  for(let i = 0; i < image.length; i++) {
    let row = []
    for(let j = 0; j < image[i].length; j++) {
      row.push(0)
    }
    visited.push(row)
  }

  let start = image[sr][sc]
  function dfs(r, c) {
    
    image[r][c] = color
    visited[r][c] = 1

    let up = image[r-1] && image[r-1][c]
    if(up !== undefined && up === start && visited[r-1][c] !== 1) {
      dfs(r-1,c)
    }

    let down = image[r+1] && image[r+1][c] 
    if(down !== undefined && down === start && visited[r+1][c] !== 1) {
      dfs(r+1,c)
    }

    let left = image[r][c-1]
    if(left !== undefined && left === start && visited[r][c-1] !== 1) {
      dfs(r, c-1)
    }
    
    let right = image[r][c+1]
    if(right !== undefined && right === start && visited[r][c+1] !== 1) {
      dfs(r, c+1)
    }
  }
  dfs(sr, sc)
  return image
};