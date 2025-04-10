/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 1 2 3
  // 4 5 6
  // 7 8 9 

  // 1 1 1
  // 1 1 1
  // 1 1 1
  // right, down, left, up
  let visited = []
  for (let i = 0; i < matrix.length; i++) {
    let row = []
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(0)
    }
    visited.push(row)
  }
  // console.log(visited)

  let dir = 'right'
  let triedall = false
  let i = 0
  let j = 0
  let pi = 0
  let pj = 0
  let out = []
  while(triedall === false) {
    triedall = true
    // console.log('out', dir, matrix[i]?.[j], out)
    dir = 'right'
    while(dir === 'right' && matrix[i] !== undefined && matrix[i][j] !== undefined && visited[i][j] !== 1) {
      let val = matrix[i][j]
      out.push(val)
      visited[i][j] = 1
      pj = j
      j++
      triedall = false
    }
    i = pi
    j = pj
    i++


    dir = 'down'
    // console.log('out', dir, matrix[i]?.[j], out)
    while(dir === 'down' && matrix[i] !== undefined && matrix[i][j] !== undefined && visited[i][j] !== 1) {
      let val = matrix[i][j]
      out.push(val)
      visited[i][j] = 1
      pi = i
      i++
      triedall = false
    }
    i = pi
    j = pj
    j--

    dir = 'left'
    // console.log('out', dir, matrix[i]?.[j], out)
    while(dir === 'left' && matrix[i] !== undefined && matrix[i][j] !== undefined && visited[i][j] !== 1) {
      let val = matrix[i][j]
      out.push(val)
      visited[i][j] = 1
      pj = j
      j--
      triedall = false
    }
    i = pi
    j = pj
    i--    

    dir = 'up'
    // console.log('out', dir, matrix[i]?.[j], out)
    while(dir === 'up' && matrix[i] !== undefined && matrix[i][j] !== undefined && visited[i][j] !== 1) {
      let val = matrix[i][j]
      out.push(val)
      visited[i][j] = 1
      pi = i
      i--
      triedall = false
    }
    i = pi
    j= pj
    j++
  }
  return out
};