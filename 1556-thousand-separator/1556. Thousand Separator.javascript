/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {

  let numstr = ""+n
  // 987 987
  // 1234 1.234
  // 10100100 10,100,100
  //     3210   32103210
  //  3210
  let count = 0
  let out = ""
  for(let i = numstr.length - 1; i >= 0; i--) {
    let c = numstr[i]
    let n = numstr[i-1]
    if(count === 3) {
      out = "." + out
      count = 0
    }
    out = c + out
    count++
  }
  return out
};