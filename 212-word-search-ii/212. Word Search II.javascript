class TrieNode {
  constructor() {
    this.children = {}
    this.end = false
  }
  insert(word) {
    let curr = this
    for(let c of word) {
      if(curr.children[c] === undefined) {
        curr.children[c] = new TrieNode()
      }
      curr = curr.children[c]
    }
    curr.end = true
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let root = new TrieNode()
  for(let word of words) {
    root.insert(word)
  }

  let rows = board.length
  let cols = board[0].length

  let out = []

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      dfs(r,c, root, '')
    }
  }

  return out

  function dfs(r,c, curr, str) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    let char = board[r][c]
    // console.log(r,c, curr, str)

    if(curr.children[char] === undefined) return

    let next = curr.children[char]
    let nextstr = str+=char

    if(next.end === true) {
      out.push(nextstr)
      next.end = false
    }

    board[r][c] = '#'
    dfs(r,c-1, next, nextstr)
    dfs(r,c+1, next, nextstr)
    dfs(r+1,c, next, nextstr)
    dfs(r-1,c, next, nextstr)
    board[r][c] = char
  }
   
};