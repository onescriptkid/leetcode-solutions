/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {

  let stack  = []
  let i = 0
  // leEeetcode
  // 0123456789
  // 
  while(i < s.length) {
    let c = s[i]
    // console.log('i', i, 'c', c, 'stack', stack)
    if(stack.length === 0) {
      stack.push(c) 
    } else {
      let top = stack[stack.length - 1]
      // top = 'A', c = 'a'
      if(top !== c && top.toLowerCase() === c.toLowerCase()) {
        if(top === top.toUpperCase() && c === c.toLowerCase()) {
          stack.pop() 
        } else if(top === top.toLowerCase() && c === c.toUpperCase()) {
          stack.pop()
        } else {
          stack.push(c)
        }
      } else {
        stack.push(c)
      }
    }
    i++
  }
  return stack.join('')
};