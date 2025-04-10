/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  // 012345
  // xyzzaz
  // i12
  let out = 0
  for(let i = 0; i < s.length - 2; i++) {
    let sub = s.substring(i, i + 3)
    let set = new Set(sub.split(''))
    // console.log(sub)
    if(set.size === 3) {
      out++
    }
  }
  return out
};