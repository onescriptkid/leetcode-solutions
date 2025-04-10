/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {

  let m = 0

  while(n > 1) {

    if(n % 2 === 0) {
      n = n / 2
      m+=n
    } else {
      m+=((n - 1) / 2)
      n = (n - 1) / 2 + 1
    }

  } 
  return m
};