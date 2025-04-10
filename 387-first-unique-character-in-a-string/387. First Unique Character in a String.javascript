/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  let uniq = {}

  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(uniq[c] === undefined) {
      uniq[c] = i
    } else {
      uniq[c] = false
    }
  }  
  
  let uniqkeys = Object.keys(uniq)
  let min = undefined
  for(let key of uniqkeys) {
    let index = uniq[key]

    if(index !== false) {
      if(min === undefined) {
        min = index
      } else if(index < min) {
        min = index
      }
    }
  }
  if(min === undefined) return -1
  return min
};