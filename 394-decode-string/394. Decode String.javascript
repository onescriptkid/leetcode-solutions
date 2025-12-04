/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

  let stack = []
  let numbers = new Set('0123456789')   
  for(let i = 0; i < s.length; i++) {

    if(numbers.has(s[i])) {
      let numstr = ''
      while(numbers.has(s[i])) {
        numstr+=s[i]
        i++
      }
      i--
      let num = Number(numstr)
      stack.push(num)
    } else if(s[i] === ']') {
      let str = ''
      while(stack.at(-1) !== '[') {
        str = stack.pop() + str
      }
      stack.pop() 
      let num = stack.pop()
      let repeat = str.repeat(num)
      stack.push(repeat)
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
};