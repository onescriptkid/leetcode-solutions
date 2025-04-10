/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
  
  let digits = []

  while(num > 0) {
    let digit = num % 10
    digits.push(digit)
    num = Math.floor(num / 10)
  }

  digits.sort((a,b) => {
    if(a > b) {
      return 1
    } else {
      return -1
    }
  })

  let arr1 = []
  let arr2 = []

  for(let i = 0; i < digits.length; i++) {
    if(i % 2 === 0) {
      arr1.push(digits[i])
    } else {
      arr2.push(digits[i])
    }
  }

  let num1 = 0;
  for(let i = 0; i < arr1.length; i++) {
    let n = arr1[arr1.length - 1 -i]
    num1+= n * (10 ** i)
  }

  let num2 = 0;
  for(let i = 0; i < arr2.length; i++) {
    let n = arr2[arr2.length - 1 -i]
    num2+= n * (10 ** i)
  }
  // console.log(arr1, arr2)
  // console.log(num1, num2)

  return num1 + num2
};