/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let postfix = []   
  let ops = []
  let precedence = {'+':0, '-':0, '/':1, '*': 1}
  let numbers = new Set('0123456789')

  for(let i = 0; i < s.length; i++) {
    
    if(numbers.has(s[i])) {
      let numstr = ''
      while(numbers.has(s[i])) {
        numstr+=s[i]
        i++
      }
      i--
      postfix.push(Number(numstr))
    } else if(s[i] in precedence) {
      while(ops.length > 0 && precedence[ops.at(-1)] >= precedence[s[i]]) {
        postfix.push(ops.pop())
      }
      ops.push(s[i])
    }
  }

  while(ops.length > 0) {
    postfix.push(ops.pop())
  }
  console.log(postfix)
  let stack = []
  for(let val of postfix) {
    if(val in precedence) {
      let n1 = stack.pop()
      let n0 = stack.pop()
      let num = 0
      if(val === '+') num = n0 + n1
      if(val === '-') num = n0 - n1
      if(val === '/') num = Math.trunc(n0 / n1)
      if(val === '*') num = n0 * n1
      stack.push(num)
    } else{
      stack.push(val)
    }
  }
  // console.log(stack)
  return stack[0]
};