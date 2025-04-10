/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  let out = 0
  // for(let i = 1; i < n; i++) {

    for(let a = 1; a <= n; a++) {
      for(let b = 1; b <= n; b++) {
        // 1 1
        // c = Math.sqrt(a ** 2 + b ** 2)
        let c = Math.sqrt(a **2 + b**2)
        if(c === Math.floor(c)  && c <= n) {
          // console.log(a,b, c)
          out++
        }
      }
    }
  // }   
  return out
};