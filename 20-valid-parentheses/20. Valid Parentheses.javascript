/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  for(let c of s) {
    if(c === '(' || c === '{' || c === '[') {
      stack.push(c)
    }
    if(c === ')') {
      if(stack.at(-1) !== '(') return false
      stack.pop()
    }
    if(c === '}') {
      if(stack.at(-1) !== '{') return false
      stack.pop()
    }
    if(c === ']') {
      if(stack.at(-1) !== '[') return false
      stack.pop()
    }
  }   
  return stack.length === 0
};