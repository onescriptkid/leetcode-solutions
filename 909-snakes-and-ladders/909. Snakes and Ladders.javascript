/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  // - - - - - -  0 left   
  // - - - - - -  1 right   
  // - - - - - -  2 left   
  // - - - - - -  3 right   
  // - - - - - -  4 left   
  // - - - - - -  5 right   

  // 1 => 5,0
  // 6 => 5,5
  // 7 => 4,5
  // 36=> 0,0
  let n = board.length 
  function numTorc(num) {
    let or = Math.floor((num-1) / n)
    let r = n-1-or

    let dir = (n-1-r) % 2 === 0 ? 'right' : 'left'
    let c = (num-1) % n
    if(dir === 'left') {
      c = n-1-c
    }
    return [r,c]
  }

  let visited = new Set([1])
  let queue = [[1,0]]

  while(queue.length > 0) {
    let [u, steps] = queue.shift()

    for(let i = 1; i <= 6; i++) {
      let next = u + i
      if(next > n * n) continue

      let [r,c] = numTorc(next)
      if(board[r][c] !== -1) {
        next = board[r][c]
      }
      if(next === n*n) return steps + 1
      if(visited.has(next)) continue
      visited.add(next)
      queue.push([next, steps+1])
    }
  }
  return -1
};