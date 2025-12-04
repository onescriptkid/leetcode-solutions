/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  s = s.toLowerCase()

  let count = 0
  let p = undefined
  for(let c of s) {
    if(p !== undefined && c !== p) {
      count++
    }
    p = c
  }
  return count
};