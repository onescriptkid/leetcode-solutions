/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  
  let set = new Set()
  let max
  for(let c of s) {

    set.add(c)
    // e E
    let upper = c.toUpperCase()
    let lower = c.toLowerCase()
    if(set.has(upper) && set.has(lower)) {
      if(max === undefined) {
        max = upper
      } else if(upper > max) {
        max = upper
      }
    }


  }
  if(max === undefined) return ""
  return max
};