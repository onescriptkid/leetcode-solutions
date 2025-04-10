/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function(n) {

  // for(let i = 1; i <= n; i++) {

  // }
  // 5 4
  // 5 % 4 => 1
  // 5 % 2 => 1
  // 3 % 2
  if(n === 1) return 1
  return n - 1
};