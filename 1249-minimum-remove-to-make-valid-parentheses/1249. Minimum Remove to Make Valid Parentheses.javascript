/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    // a)bbba -> just remove )

    // a(c)bb) -> remove last )
    
    // ((b(a) -> remove the first ((
    
    // 012345
    // (a)b(( -> remove the last ((
    
    // [((]
    // [01]
    let stack = []
    let str = ""
    for(let i = 0; i < s.length; i++) {
      let c = s[i]
      // console.log('c', c, 'str', str, 'stack', stack)

      if(c === '(') {
        stack.push(str.length)
        str+=c
      } else if(c === ')') {
        if(stack.length !== 0) {
          stack.pop()
          str+=c
        }
      } else {
        str+=c
      }
    }

    // 0123456   
    // ((b(a)
    // ((b(a)
    // [01]
    let j = 0
    let out = ""
    // console.log('str', str)
    for(let i = 0; i < str.length; i++) {
      let c = str[i]
      let index = stack[j]

      if(j < stack.length && index === i) {
        //
        j++
      }else {
        out+=str[i]
      }
    }
    // console.log('str', str, 'out', out)
    return out

};