/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let memo = new Array(word1.length + 1).fill(undefined).map(v => new Array(word2.length+1).fill(undefined))   

  // rhorse
  //  i
  // ros
  //  j
  
  // rhorse
  // i
  // ros
  //  j


  function dfs(i, j) {
    if(i === word1.length && j === word2.length) {
      return 0
    }
    if(memo[i][j] !== undefined) return memo[i][j]
    
    if(i < word1.length && j === word2.length) {
      return 1+dfs(i+1, j)
    }
    if(i === word1.length && j < word2.length) {
      return 1 + dfs(i, j+1)
    }

    if(word1[i] === word2[j]) {
      return dfs(i+1, j+1)
    }

    // letters?
    let min = 0
    if(word1[i] !== word2[j]) {
      let opt1 = 1 + dfs(i, j+1)
      let opt2 = 1+ dfs(i+1, j+1)
      let opt3 = 1+ dfs(i+1, j)
      min = Math.min(opt1, opt2, opt3)
      return memo[i][j] = min
    }
  }
  return dfs(0, 0)
};