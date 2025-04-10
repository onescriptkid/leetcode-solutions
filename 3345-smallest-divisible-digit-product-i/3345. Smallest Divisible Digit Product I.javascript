/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
  // 5 2
  //  
  let i = n
  while (true) {
    let digitprod = getDigitProduct(i)
    // console.log(digitprod)
    if (digitprod % t === 0) {
      return i
    }
    i++
    // if(i === 100) return i
  }

  function getDigitProduct(num) {
    let prod = 1 

    while(num > 0) {
      let digit = num % 10
      prod = prod * digit
      num = Math.floor(num / 10)
    }
    return prod
  }
};