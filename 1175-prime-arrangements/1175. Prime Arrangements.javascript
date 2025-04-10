/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  // 1 2 5 4 3 
  // 1 2 3 4 3 
  //   p p   p  
  // 1                 1
  // 1 2               2
  
  // 1 2 3             6  
  // 1 3 2
  // 2 1 3
  // 2 3 1
  // 3 2 1
  // 3 1 2

  // 1 2 3 4
  let primes = 0
  let notprimes = 0
  let totalprimes = 1
  let totalnotprimes = 1
  let total = 1
  for (let i = 1; i <= n; i++) {
    let prime = isPrime(i)
    if(prime) {
      primes = primes + 1
      // totalprimes = (totalprimes * primes) % (10 ** 9 + 7)
      total = (total * primes) % (10 ** 9 + 7)
    } else {
      notprimes = notprimes + 1
      total = (total * notprimes) % (10 ** 9 + 7)
      // totalnotprimes = (totalnotprimes * notprimes) % (10 ** 9 + 7)
    }
  }
  // console.log('primes',primes, 'nonprimes', notprimes, 'tp', totalprimes, 'tnp', totalnotprimes, 'total', total)

  function isPrime(num) {
    if(num === 1) return false
    for(let i = 2; i <= Math.floor(num**0.5); i++) {
      if(num % i === 0) return false
    }
    return true
  }
  return total
};