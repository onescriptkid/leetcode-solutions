/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // flower
  // flow
  // flight
  // i

  let shortest
  for(let i = 0; i < strs.length; i++) {
    let str = strs[i]
    if(shortest === undefined) {
      shortest = str
    } else if(str.length < shortest.length) {
      shortest = str
    }
  }

  let max = ""
  for(let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i]
    // console.log(strs[0][i])
    let sameLetter = true
    for(let str of strs) {
      if(str[i] !== letter) {
        sameLetter = false
        return max || ""
        break;
      }
    }
    if(sameLetter) {
      max+=letter
    }
  }
  return max || ""
};