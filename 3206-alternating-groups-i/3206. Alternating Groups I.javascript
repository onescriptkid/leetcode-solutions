/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {

  let total = 0
  for(let i = 0; i < colors.length; i++) {
    let p = colors[i-1]
    if(p === undefined) {
      p = colors[colors.length - 1]
    }
    let c = colors[i]
    let n = colors[i+1]
    if(n === undefined) {
      n = colors[0]
    }
    if(c !== n && c !== p) {
      total++
    }
  }   
  return total
};