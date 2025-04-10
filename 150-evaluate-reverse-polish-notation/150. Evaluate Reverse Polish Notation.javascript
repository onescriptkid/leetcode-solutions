/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []  

  for(let token of tokens) {
    // console.log('token', token, 'stack', stack)
    let num = Number(token)
    if(!Number.isNaN(num)) {
      stack.push(num)
    }
    if(token === '-') {
      let n1 = stack.pop()
      let n2 = stack.pop()
      let out = (n2-n1)
      stack.push(out)
    }
    if(token === '+') {
      let n1 = stack.pop()
      let n2 = stack.pop()
      let out = (n1+n2)
      stack.push(out)
    }
    if(token === '*') {
      let n1 = stack.pop()
      let n2 = stack.pop()
      let out = (n1*n2)
      stack.push(out)
    }
    if(token === '/') {
      let n1 = stack.pop()
      let n2 = stack.pop()
      let out = (n2/n1)
      if(out > 0) {
        out = Math.floor(out)
      } else {
        out = Math.ceil(out)
      }
      stack.push(out)
    }
  }
  return stack[0]

};