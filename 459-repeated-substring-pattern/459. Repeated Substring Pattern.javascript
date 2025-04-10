/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

  // abab
  // abababab

  // abaaba
  // baab
  // 

  let str = s + s
  str = str.slice(1, str.length-1)


  if(str.includes(s)) {
    return true
  }
  return false

};