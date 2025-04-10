/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
   // 1234 1234 

  let count = 0
  for (let i = low; i <= high; i++) {
    // console.log(i, count)
    if (isSymmetric(i)) {
      count++
    }
  }

  function isSymmetric(num) {
    let count = 0
    let digits = []

    while(num > 0) {
      let digit = num % 10
      digits.push(digit)
      num = Math.floor(num / 10)
    }
    if(digits.length % 2 === 1) return false
    // 1 2 3 0
    //     2 
    let sumf = 0
    for(let i = 0; i < digits.length >>1; i++) {
      let digit = digits[i]
      sumf+=digit
    }

    let sums = 0
    for(let i = digits.length >> 1; i < digits.length; i++) {
      let digit = digits[i]
      sums+=digit
    }
    return sumf == sums
  }
  return count
};