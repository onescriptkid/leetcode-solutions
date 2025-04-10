/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  let stack = []
  for(let c of s) {
    if(c === '(' || c === '[' || c === '{') {
      stack.push(c)
    }
    if(c === ')') {
      let top = stack.pop()
      if(top !== '(') {
        return false
      }
    }
    if(c === ']') {
      let top = stack.pop()
      if(top !== '[') {
        return false
      }
    }
    if(c === '}') {
      let top = stack.pop()
      if(top !== '{') {
        return false
      }
    }
  }

  return stack.length === 0
};