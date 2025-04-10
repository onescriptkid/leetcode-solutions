/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {

  // 5     2
  // 2 2 1
  // 1 2 2
  // 2 1 2

  // 3     3
  // 0 0 3
  let count = 0
  for(let i = 0; i <= n; i++) {
    for(let j = 0; j <= n; j++) {
      // for(let k = 0; k <=n; k++) {
        // console.log(i, j,k)
        let k = n - j - i
        if(i <= limit && j <= limit && k <= limit && k >= 0) {
          let sum = i + j + k
          if(sum === n) {
            // console.log(i, j, k)
            count++
          }
        }
      // }
    }
  }
  return count
};