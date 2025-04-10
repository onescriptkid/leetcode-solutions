/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  
  let stack = []
  for(let c of s) {
    let top = stack[stack.length - 1]
    // console.log('c', c, 'top', top, 'stack', stack) 
    // while(stack.length > 0) {
    //   console.log('-', 'stack', stack)
    //   let top = stack[stack.length - 1]
    //   if(c === top) {
    //     stack.pop()
    //   } else {
    //     break;
    //   }
    // }
    if(top === c) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join('')

};