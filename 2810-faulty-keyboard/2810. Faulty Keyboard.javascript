/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {

  let out = ""

  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(c === "i") {
      out = reverse(out)
    } else {
      out+=c
    }
  }

  function reverse(str) {
    let rev = ""
    for(let i = 0; i < str.length; i++) {
      let c = str[i]
      // "abcd"       a,   b-> a,   c -> ba
      rev = c + rev
    }
    return rev
  }
  return out
};