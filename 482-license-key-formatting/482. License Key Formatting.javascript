/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {

  s = s.toUpperCase()

  // 543Z-2e-9w
  let rmdash = ""
  for(let c of s) {
    if(c !== '-') rmdash+=c
  }

  // yyyy543z2e9w
  //    x
  //    432143210
  let count = 0
  let out = ""
  // console.log('rmdash', rmdash)
  for(let i = rmdash.length - 1; i >= 0; i--) {
    let c = rmdash[i]
    // console.log('c', c, 'out', out)
    if(count !== k) {
      out = c + out
    } else {
      out = c + "-" + out
      count = 0
    }
    count++
  }
  return out
};