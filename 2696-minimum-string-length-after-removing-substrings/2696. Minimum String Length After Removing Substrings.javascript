/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {


  let out = s
  let i = 0
  // XCABDY
  //   i
  // XCDY
  //   i

  // CABD
  //  i
  // CD

  // AAAB

  while(i < out.length) {
    let sub = out.substring(i, i+2)
    // console.log(out, i)
    if(sub === "AB" || sub === "CD") {
      out = out.substring(0, i) + out.substring(i+2)
      i--
    } else {
      i++
    }
  }
  return out.length
};