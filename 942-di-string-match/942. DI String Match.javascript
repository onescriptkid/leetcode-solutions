/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {

  let out = []
  let l = 0
  let r = s.length
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(c ==="I") {
      out.push(l)
      l++
    } else {
      out.push(r)
      r--
    }
  }
  out.push(l)
  return out
  // r = 3
  // r = 1
  // l = 1

  // 
};