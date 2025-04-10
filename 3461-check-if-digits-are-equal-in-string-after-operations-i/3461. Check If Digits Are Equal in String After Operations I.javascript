/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  // 3902
  // (3 + 9) % 10 = 2   
  // (9 + 0) % 10 = 9   
  // (0 + 2) % 10 = 2

  while(s.length > 2) {
    
    let i = 0
    let str = ""
    while(i < s.length-1) {
      let c = Number(s[i]) 
      let n = Number(s[i+1])
      let sum = c + n
      let next = sum % 10
      str+=next
      i++
    }
    s = str
  }

  return s[0] === s[1]
};