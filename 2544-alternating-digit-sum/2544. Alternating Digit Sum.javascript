/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {

  let pos = true
  let arr = []

  let sum = 0
  while(n > 0) {
    let digit = n % 10
    // if(pos === false) {
    //   digit = -digit
    // }
    // sum+=digit

    // pos = !pos
    arr.push(digit)
    n = Math.floor(n / 10)
  } 

  for(let i = arr.length -1; i >= 0; i--) {
    let num = arr[i]
    if(pos === false) {
      num = -num
    }
    sum+=num
    pos = !pos 
  }

  return sum
};