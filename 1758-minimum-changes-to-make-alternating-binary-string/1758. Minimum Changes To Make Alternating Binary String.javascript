/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
  // 01011010

  // 0000 1010
  // 0101 1010
  let out = 0

  let first = "0"
  let firstops = 0
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c !== first) {
      firstops++
    }
    if(first === '0') {
      first = '1'
    } else {
      first = '0'
    }
  }

  let second = "1"
  let secondops = 0
  for(let i =0; i < s.length; i++) {
    let c = s[i]
    if(c !== second) {
      secondops++
    }
    if(second === '0') {
      second = '1'
    } else {
      second = '0'
    }
  }
  return firstops < secondops ? firstops : secondops
};