/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {

  // abacaba   
  let set = new Set()
  let count = 1
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(set.has(c)) {
      set = new Set()
      count++
    }
    set.add(c)
  }
  return count
};