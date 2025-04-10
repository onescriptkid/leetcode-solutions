/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

  let l = 1
  let r = n

  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    let mid = guess(m)
    if(mid === 0) {
      return m
    }
    if(mid === -1) {
      r = m - 1
    }
    if(mid === 1) {
      l = m + 1
    }
  }

};