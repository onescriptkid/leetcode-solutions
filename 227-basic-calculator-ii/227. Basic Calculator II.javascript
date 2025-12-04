/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let postfix = []
  let ops = []
  let numbers = new Set('0123456789')
  let precedence = {'+':1, '-':1, '*': 2, '/':2} 

  for(let i = 0; i < s.length; i++) {

    if(numbers.has(s[i])) {
      let numstr = ''
      while(numbers.has(s[i])) {
        numstr+=s[i]
        i++
      }
      i--
      let num = Number(numstr)
      postfix.push(num)
    } else if(s[i] in precedence) {
      // handle unary

      while(ops.length > 0 && precedence[ops.at(-1)] >= precedence[s[i]]) {
        postfix.push(ops.pop())
      }
      ops.push(s[i])
    } else if(s[i] === '(') {
      ops.push(s[i])
    } else if(s[i] === ')') {
      while(ops.at(-1) !== '(') {
        postfix.push(ops.pop())
      }
      ops.pop()
    }
    // handle ()
  }
  while(ops.length > 0) {
    postfix.push(ops.pop())
  }
  // console.log(postfix)

  let stack = []
  for(let i = 0; i < postfix.length; i++) {

    let val = postfix[i]
    if(val in precedence) {
      let n1 = stack.pop()
      let n0 = stack.pop()
      let n2 = 0
      if(val === '+') n2 = n0 + n1
      if(val === '-') n2 = n0 - n1
      if(val === '/') n2 = Math.trunc(n0 / n1)
      if(val === '*') n2 = n0 * n1
      stack.push(n2)
    } else {
      stack.push(val)
    }
  }
  return stack[0]

};