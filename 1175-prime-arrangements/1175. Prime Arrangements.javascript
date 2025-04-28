/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  //  1 2 3 4 5         3,5
  //  1 2 5 4 3         3,5
  //    p p   p         3 nonprimes, 2 primes
  let primes = 0
  let nonprimes = 0
  function isPrime(num) {
    if(num === 1) return false

    for(let i = 2; i <= num**0.5;i++) {
      if(num % i === 0) return false
    }
    return true
  }

  let out = 1
  for(let i = 1; i <= n; i++) {
    let isprime = isPrime(i)
    // console.log('i', i, 'isprime', isprime) 
    if(isprime) {
      primes++
      out = (out * primes) % (10**9 + 7)
    } else {
      nonprimes++
      out = (out * nonprimes) % (10**9 + 7)
    }
  }

  return out
};