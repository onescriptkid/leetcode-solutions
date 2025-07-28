/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

  let out = []
  let arr = []

  function dfs(i) {
    if(i === s.length) {
      out.push([...arr])
      return
    }

    for(let j = i; j < s.length; j++) {
      let str = s.slice(i, j+1)
      if(isPalindrome(str)) {
        arr.push(str)
        dfs(j+1)
        arr.pop()
      }
    }
  }
  dfs(0)
  return out
  function isPalindrome(str) {
    let l = 0
    let r = str.length - 1
    while(l < r) {
      if(str[l] !== str[r]) return false
      l++
      r--
    }
    return true
  }

};