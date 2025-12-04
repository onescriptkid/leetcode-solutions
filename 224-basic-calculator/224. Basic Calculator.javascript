/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let ops = []
  let precedence = {'+':1, '-':1, '/': 2, '*': 2} 
  let postfix = []
  let prev;
  let numbers = new Set('0123456789')
  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(numbers.has(s[i])) {
      // Handle multidigit number
      let numstr = ''
      while(numbers.has(s[i])) {
        numstr+=s[i]
        i++
      }
      i--

      // Always push number onto postfix arr
      let num = Number(numstr)
      postfix.push(num) 
      prev = 'num'
    } else if(s[i] in precedence) {

      // Handle unary by simply pushing a 0
      if(c === '-' && (prev=== undefined || prev === '(' || prev === 'op') ) {
        postfix.push(0)
      }

      // Handle precedence.
      // While the previous operator has higher precedence, put that on the postfix arr
      while (ops.length > 0 && precedence[ops.at(-1)] >= precedence[s[i]]) {
        postfix.push(ops.pop())
      }
      ops.push(s[i])

      prev='op'
    } else if(s[i] === '(') {
      // Just push ( onto operator stack
      ops.push(s[i])
      prev='('
    } else if(s[i] === ')') {
      // Pop all ops off stack onto postfix until (
      while(ops.at(-1) !== '(') {
        postfix.push(ops.pop())
      }
      ops.pop()
      prev=')'
    }
  }
  while(ops.length > 0) postfix.push(ops.pop())

  // Convert postfix 3+2*2 => [3,2,3,*,+] to answer
  let stack = []
  for(let i = 0; i < postfix.length; i++) {
    let c = postfix[i]
    if(c in precedence) {
      let num1 = stack.pop()
      let num0 = stack.pop()

      let num2 = 0
      if(c ==='+') num2 = num0 + num1
      if(c ==='-') num2 = num0 - num1
      if(c ==='/') num2 = Math.trunc(num0 / num1)
      if(c ==='*') num2 = num0 * num1
      
      stack.push(num2)
    } else {
      stack.push(Number(c))
    }
  }

  return stack[0]


};