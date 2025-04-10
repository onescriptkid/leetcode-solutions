/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase()   
  let alphanumeric = new Set('abcdefghijklmnopqrstuvwxyz0123456789')
  let fmt = ""
  for(let i = 0; i < str.length; i++) {
    let c = str[i]
    if(alphanumeric.has(c)) fmt+=c
  }

  for(let i = 0; i < fmt.length; i++) {
    let left = fmt[i]
    let right = fmt[fmt.length - 1 - i]
    if(left !== right) {
      return false
    }
  }
  return true
};