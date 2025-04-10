/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {

  // 0001, 0010, 1000

  function leftpad(num) {
    num = ""+num
    let zeros = 0
    if(num.length < 4) {
      zeros = 4 - num.length
    }

    let out = ""
    for(let i = 0; i < zeros; i++) {
      out+=0
    }

    out = out + num
    return out
  }

  let num1str = leftpad(num1)
  let num2str = leftpad(num2)
  let num3str = leftpad(num3)

  let i = 0
  let key = ""
  while(i < 4) {
    let n1 = Number(num1str[i])
    let n2 = Number(num2str[i])
    let n3 = Number(num3str[i])
    let min = Math.min(n1, n2, n3)
    key+=min
    i++
  }
  return Number(key)
};