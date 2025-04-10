/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {


  // 010001111   
  //     3   i
  let longest = 0
  let zeros = 0
  let ones = 0
  let p
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c === '0') {
      zeros++
      ones = 0

      // 010
      //   i
      if(p === '1') {
        zeros = 1
      }

    } else {
      ones++
      // 000111
      //      i
      if(ones <= zeros) {
        let len = 2 * ones
        if(len > longest) {
          longest = len
        }
      }
    }

    p = c
  }
  return longest
};