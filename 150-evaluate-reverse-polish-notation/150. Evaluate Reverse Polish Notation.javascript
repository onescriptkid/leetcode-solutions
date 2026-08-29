/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
     let stack = []  

  for(let token of tokens) {
    // console.log('token', token, 'stack', stack)
    let val = Number(token)
    if(!Number.isNaN(val)) {
      stack.push(val)
      continue
    }
    let n1 = stack.pop()
    let n2 = stack.pop()
    let num = 0
    if(token === '-') num = (n2-n1)
    if(token === '+') num = (n1+n2)
    if(token === '*') num = (n1*n2)
    if(token === '/') { 
      num = (n2/n1)
      if(num > 0) {
        num = Math.floor(num)
      } else {
        num = Math.ceil(num)
      }
    }
    stack.push(num)
  }
  return stack[0] 
};