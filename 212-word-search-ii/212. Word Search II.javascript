/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
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

  let root = new TrieNode()
  for(let word of words) {
    root.insert(word)
  }

  let rows = board.length
  let cols = board[0].length
  let out = []
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      bt(r,c,'', root)
    }
  }

  function bt(r,c,str,curr) {
    if(r < 0 || r >= rows || c < 0 || c >= cols) return
    if(board[r][c] === '#') return
    let char = board[r][c]

    let next = curr.children[char]
    let nextstr = str + char
    if(next === undefined) return

    if(next.end === true) {
      out.push(nextstr)
      next.end = false
    }

    board[r][c] = '#'
    bt(r,c+1,nextstr, next)
    bt(r,c-1,nextstr, next)
    bt(r+1,c,nextstr, next)
    bt(r-1,c,nextstr, next)
    board[r][c] = char
  }
  return out
};