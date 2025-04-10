/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
  let out = ''
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    let code = c.charCodeAt(0)
    if (code > 64 && code < 91) {
      let to26 = code - 64
      let newcode = 96 + to26
      let newc = String.fromCharCode(newcode)
      // console.log(c, code, newc, newcode, to26)
      out+=newc
    } else {
      out+=c
    }
    console.log(out)


  }
  return out
  //  return s.toLowerCase() 
};