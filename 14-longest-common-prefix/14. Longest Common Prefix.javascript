/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  let longest = strs[0]
  for(let i = 1; i < strs.length; i++) {
    let str = strs[i]
    let min = Math.min(longest.length, str.length)
    // console.log('str', str, 'longest', longest)

    let out = ""
    for(let j = 0; j < min; j++) {

      if(str[j] === longest[j]) {
        out+=str[j]
      } else {
        break;
      }
    }
    longest = out
  }
  return longest

};