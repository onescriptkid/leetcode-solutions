/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let out = []
  let arr = []   

  function bt(i,j) {
    if(i === j && i === n) {
      out.push(arr.join(''))
      return
    }

    if(i < n) {
      arr.push('(')
      bt(i+1,j)
      arr.pop()
    }
    if(j < i) {
      arr.push(')')
      bt(i, j+1)
      arr.pop()
    }
  }
  bt(0,0)
  return out
};