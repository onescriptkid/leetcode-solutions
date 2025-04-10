/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  // abcdefg 
  // 012345

  // 012345
  // a1c1e1
  // a
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let lton = {}
  let ntol = {}
  for (let i = 0; i < letters.length; i++) {
    ntol[i + 1] = letters[i]
    lton[letters[i]] = i + 1
  }
  function getChar(c, n) {
    let charval = lton[c]
    let nextcharval = charval + n
    let nextchar = ntol[nextcharval]
    return nextchar
  }

  console.log(ntol)
  console.log(lton)
  let out = ""
  for (let i = 0; i < s.length; i++) {
    if(i % 2 === 1) {
      let p = s[i-1]
      let n = Number(s[i])
      let nextchar = getChar(p, n)
      out+=nextchar
    } else {
      out+=s[i]
    }
  }
  return out
};