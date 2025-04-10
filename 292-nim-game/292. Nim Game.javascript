/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // i go first
  // 1 win
  // 2 win
  // 3 win
  // 4 lose
  // 5 win
  // 6 win
  // 7 win
  // 8 lose

  return n % 4 !== 0
};