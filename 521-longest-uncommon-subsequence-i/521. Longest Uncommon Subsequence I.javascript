/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if(a.length !== b.length) {
    if(a.length > b.length) {
      return a.length
    } else {
      return b.length
    }
  }
  if(a ===b) return -1
  if(a !== b) {
    return a.length
  }   
};