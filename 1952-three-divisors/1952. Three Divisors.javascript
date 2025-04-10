/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  let found = false
  for(let i = 2; i <n; i++) {
    if(n / i === Math.floor(n / i)) {
      if(found === false) {
        found = true
      } else {
        return false
      }
    }
  }
  return found
};