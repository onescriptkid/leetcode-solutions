/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {

  let alpha = new Set('abcdefghijklmnopqrstuvwxyz')

  let vals = []
  for(let str of strs) {

    let allnums = true
    for(let i = 0; i < str.length; i++) {
      let c = str[i]
      if(alpha.has(c)) {
        allnums = false
        break;
      }
    }
    let val
    if(allnums) {
      val = Number(str)
    } else {
      val = str.length
    }

    vals.push(val)
  }

  return Math.max(...vals)
};