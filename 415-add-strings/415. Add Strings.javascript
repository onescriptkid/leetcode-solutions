/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {

  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  // -11
  // 123
  let str = ""
  while(i >= 0 || j >= 0) {
    let c1 = num1[i] || "0"
    let c2 = num2[j] || "0"

    let n1 = Number(c1)
    let n2 = Number(c2)
    let sum = carry + n1 + n2
    let next = sum % 10
    if(sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    str = next + str
    i--
    j--
  }
  if(carry === 1) {
    str = "1" + str
  }
  return str

};