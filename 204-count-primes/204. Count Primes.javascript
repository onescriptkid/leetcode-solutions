/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  // let numbers = new Array(n).fill(0).map((v, k) => k + 1)
  let primes = new Uint8Array(n) //new Array(n).fill(true)
  if(primes[0] !== undefined) {
    primes[0] = true // 1
  }
  if(primes[1] !== undefined) {
    primes[1] = false // 2
  }
  if(primes[primes.length - 1] !== undefined) {
    primes[primes.length - 1] = true
  }
   

  // [f, t, f, f, f, f, f, f]
  // [1, 2, 3, 4, 5, 6, 7, 8]

  for(let i = 1; i <= Math.floor(primes.length ** 0.5); i++) {
    // j = 5, i = 1 (2), 6 < 
    let num = i + 1
    let j = 2;
    while( ((j * num) - 1) < primes.length) {
      primes[(j * num) - 1] = true
      j++
    }
  }

  let count = 0;
  for(let i = 0; i < primes.length; i++) {
    if(primes[i] === 0) {
      count++
    }
  }

  // console.log(numbers)
  // console.log(primes)
  // console.log(count)
  return count


  // let count = 0
  // function isPrime(num) {
  //   if(num === 0) return false
  //   if(num === 1) return false
  //   if(num === 2) return true

  //   for(let j = 2; j <= Math.floor(num / 2); j++) {
  //     if(num % j === 0) {
  //       return false
  //       break;
  //     }
  //   }
  //   return true
  // }

  // // 10
  // // 2 3 5 7 
  // // Any integers
  // for(let i = 2; i < n; i++) {
  //   // if(isPrime(i)) {
  //   //   count++
  //   // }
  //   let isPrime = true
  //   for(let j = 2; j <= Math.floor(i /2); j++) {
  //     if(i % j === 0) {
  //       isPrime = false
  //       break;
  //     }
  //   }
  //   if(isPrime) {
  //     count++
  //   }
    
  // }
  // return count;
    
};