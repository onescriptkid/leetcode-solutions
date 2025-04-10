/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

  // (()())(())
  //  ()()  ()
  // [((]
  // 121210

  let count = 0
  let stack = []
  let out = ""
  // console.log(s)
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    // console.log(c, stack, out)
    if(c === '(' && stack.length > 0) {
      out+=c
    } else if(c === ")" && stack.length > 1) {
      out+=c
    }
    if(c === '(') {
      stack.push('(')
    } else {
      stack.pop()
    }
  }
  return out 
};