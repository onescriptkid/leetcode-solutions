/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
  // mgntdygtxrvxjnwksqhxuxtrv
  let kv = {}    
  let max = undefined
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(kv[c] !== undefined) {
      let len = i - kv[c] - 1
      if(max === undefined) {
        max = len
      } else if(len > max) {
        max = len
      }
    } else {

      kv[c]  = i
    }
  }
  if(max === undefined) return -1
  return max
};