/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // console.log('x', x, 'n', n)
  if(n === 0) {
    return 1
  }
  if(n === 1) {
    return x
  }
  let neg = false
  if(n < 0) {
    neg = true
    n = -n
  }


  let ans
  let next = Math.floor(n / 2)
  if(n % 2 === 0) {
    ans = myPow(x*x, next)
  } else {
    ans = x * myPow(x*x, next)
  }
  // console.log('  x', x, 'n', n, 'ans', ans)





  if(neg) {
    return 1 /ans
  }
  return ans

  // 2**10 => 2*2*2*2*2*2*2*2*2*2
  // 2**5 * 2 **5 => 
  // 2**10 => 2*2*2*2*2*2*2*2*2*2

};