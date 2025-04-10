/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let j = 0
  let big= []
  let small = []
  for(let i = 1; i <= n**0.5;i++) {
    if(i === (n **0.5)) {
      small.push(i)
    } else if(n % i === 0) {
      small.push(i)
      big.unshift(n / i)
    }
  }

  let both = small.concat(big)
  // console.log(small, big, both)
  if(both[k-1] === undefined) return -1
  return both[k -1] 
};