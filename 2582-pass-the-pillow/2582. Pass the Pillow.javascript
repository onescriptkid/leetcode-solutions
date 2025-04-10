/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  // 012 345 678 9
  // 123 432 123 432 123 432
  //         ^
  // 0   1   2   3   4
  let chunk = Math.floor(time / (n - 1) )

  if(chunk % 2 === 0) {
    return (time % (n-1)) + 1
  } else {
    return n - (time % (n-1))
  }
};