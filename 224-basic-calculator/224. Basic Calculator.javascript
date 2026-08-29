/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let postfix = []
  let ops = []
  let precedence = {'+':1, '-': 1}   
  let numbers = new Set('0123456789')
  let prev

  for(let i = 0; i < s.length; i++) {

    if(numbers.has(s[i])) {
      let numstr = ''
      while(numbers.has(s[i])) {
        numstr+=s[i]
        i++
      }
      i--
      postfix.push(Number(numstr))
      prev = 'num'
    } else if(s[i] in precedence) {
      if(prev === undefined || prev === 'op' || prev === '(') {
        postfix.push(0)
      }

      while(ops.length > 0 && precedence[ops.at(-1)] >= precedence[s[i]]) {
        postfix.push(ops.pop())
      }
      ops.push(s[i])
      prev = 'op'
    }  else if(s[i] === '(') {
      ops.push(s[i])
      prev = '('
    } else if(s[i] === ')') {
      while(ops.at(-1) !== '(') {
        postfix.push(ops.pop())
      }
      ops.pop()
      prev = ')'
    }
  }

  while(ops.length > 0) {
    postfix.push(ops.pop())
  }

  let stack = []
  for(let val of postfix) {

    if(val in precedence) {
      let n1 = stack.pop()
      let n0 = stack.pop()
      let num = 0
      if(val === '+') num = n0 + n1
      if(val === '-') num = n0 - n1
      stack.push(num)
    } else {
      stack.push(val)
    }
  }
  return stack[0]
};