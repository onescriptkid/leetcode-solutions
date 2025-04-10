/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  let count = 0

  for(let i = 0; i < s.length - 1; i++) {
    let c = s[i]
    let n = s[i+1]
    let upper = c.toUpperCase()
    let lower = c.toLowerCase()

    if(c !== n && c.toUpperCase() !== n.toUpperCase()) {
      count++
    }
  }
  return count
};