/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

  let hash = {}
  for (let c of s) {
    hash[c] = (hash[c] || 0) + 1
  } 

  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(hash[c] === 1) {
      return i
    }
  }
  return -1
};