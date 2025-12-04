/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  // 0 [1, 6 | ladder]
  let rolls = 0
  let rows = board.length
  let cols = board[0].length
  // let queue = [[rows.length - 1,0]]
  let queue = [1]
  //     0  1  2  3  4  5

  // 0  -1 -1 -1 -1 -1 -1
  // 1  -1 -1 -1 -1 -1 -1
  // 2  -1 -1 -1 -1 -1 -1
  // 3  -1 -1 -1 -1 13 -1
  // 4  -1 -1 -1 -1 -1 -1
  // 5  -x 15 -1 -1 -1 -1

  function numtorc(num) {
    let i = Math.floor((num-1) / rows) // 12-1/6 => 11/6 => 1
    let r = rows -1 - i

    let j = 0
    let c = 0
    if(i % 2 === 0) {
      j = (num-1) % cols    // 17 => 
      c = j
    } else {
      j = (num-1) %cols
      c = cols - 1 - j
    }
    return [r,c]
  }

  let visited = new Set([1])

  while(queue.length > 0) {
    let length = queue.length

    for(let i = 0; i < length; i++) {
      let curr = queue.shift()

      let opts = []
      for(let j = 1; j <= 6; j++) {

        let next = curr + j
        if(next > rows*cols) continue;
        let [r,c] = numtorc(next)
        if(board[r][c] !== -1) next = board[r][c]

        if(next === rows*cols) return rolls + 1
        if(visited.has(next)) continue
        visited.add(next)
        queue.push(next)
      }
    }
    rolls++
  }

  return -1
    
};