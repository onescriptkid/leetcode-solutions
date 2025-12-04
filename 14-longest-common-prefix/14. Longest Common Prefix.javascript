/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  // flower
  // flow
  // flight
  // 
  let i = 0
  let minlength = Infinity
  for(let str of strs) {
    if(str.length < minlength) minlength = str.length
  }

  let out = ''
  while(i < minlength) {

    let c
    let common = true

    for(let str of strs) {
      if(c === undefined) {
        c = str[i]
        continue
      }
      if(c !== str[i]) {
        common = false
        break;
      }
    }
    if(!common) break;
    if(common) out+=c
    i++

  }

  return out

};