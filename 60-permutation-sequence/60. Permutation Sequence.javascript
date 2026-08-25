/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let memo = new Array(n+1).fill(undefined)   

  function fac(i) {
    if(i === 0 || i === 1) return 1
    if(memo[i] !== undefined) return memo[i]

    return memo[i] = i *fac(i-1)
  }

  let digits = new Array(n).fill(0).map((v,k) => k+1)
  let out = ''
  for(let i = n; i >= 1; i--) {
    let idx = Math.ceil(k / fac(i-1))
    let digit = digits[idx-1]

    out+=digit

    digits.splice(idx-1, 1)

    k-=(idx-1) * fac(i-1)
  }
  return out
};