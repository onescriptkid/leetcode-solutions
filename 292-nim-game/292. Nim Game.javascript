/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 1 win true
  // 2 true
  // 3 true
  // 4 false
  // 5 true
  // 6 true
  // 7 true
  // 8 false   

  return  n % 4 !== 0
};