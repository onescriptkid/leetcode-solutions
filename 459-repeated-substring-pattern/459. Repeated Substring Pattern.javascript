/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {

  // abab
  // abababab
  //  bababa

  let double = s + s
  let chopends = double.slice(1, double.length-1)

  return chopends.includes(s)
};