/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let memo = {}
  if(word1.length < word2.length) {
    let tmp = word1
    word1 = word2
    word2 = tmp
  }
  // console.log(word1, word2)

  function dfs(i, j) {
    // console.log('ij', i, j, word1.slice(i), word2.slice(j))
    let key = `${i},${j}`
    if(i === word1.length && j === word2.length) {
      return 0
    }
    if(i ===word1.length && j < word2.length) {
      memo[key] = 1 + dfs(i, j+1)
      return memo[key]
    }
    if(i < word1.length && j === word2.length) {
      memo[key] = 1 + dfs(i+1, j)
      return memo[key]
    }

    if(memo[key] !== undefined) {
      return memo[key]
    }

    // letters equal
    if(word1[i] === word2[j]) {
      memo[key] = dfs(i+1, j+1)
      return memo[key]
    }

    // letters 
    if(word1[i] !== word2[j]) {
      let opt1 = 1 + dfs(i+1, j)
      let opt2 = 1 + dfs(i+1, j+1)
      let opt3 = 1 + dfs(i, j+1)
      memo[key] = Math.min(opt1, opt2, opt3)
      return memo[key]
    }

  }
  return dfs(0,0)

  // horse
  // ros
  // i 
  // rorse
  // ros
  // i
  
  // rorse
  // ros
  //  i
  
  // rorse
  // ros
  //   i
  // rorse
  // ros
  //   i
  
  // rose
  // ros
  //   i
};