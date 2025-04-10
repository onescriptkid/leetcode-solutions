/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  let i = 0
  let kid = 0
  let dir = 'r'
  while(i < k) {
    if(dir === 'r') {
      if((kid + 1) === n) {
        dir = 'l'
        kid--
      } else {
        kid++
      }
    } else {
      if((kid -1) === -1) {
        dir = 'r'
        kid++
      } else {
        kid--
      }
    }
    i++
  }
  return kid
};