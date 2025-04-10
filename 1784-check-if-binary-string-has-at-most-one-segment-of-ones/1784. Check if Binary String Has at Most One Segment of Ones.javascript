/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {

  let hasSegment = false;
  let prev
  // 10010
  //     i
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(prev === '0' && c === '1' && hasSegment) {
      return false
    }
    if(c === '1') {
      hasSegment = true
    }

    prev = c
  } 
  return true
};