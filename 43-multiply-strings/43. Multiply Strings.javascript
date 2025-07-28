/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // 012345
  
  //    123 i=2
  //    456 j=2
  // 000000
  //     dd d=i+j, d1=i+j+1

  if(num1 === '0' || num2 === '0') return '0'

  let out = new Array(num1.length + num2.length).fill(0)

  for(let i = num1.length - 1; i >= 0; i--) {
    for(let j = num2.length - 1; j >= 0; j--) {
      let n1 = Number(num1[i])
      let n2 = Number(num2[j])

      let d0 = i + j
      let d1 = i + j + 1

      let sum = out[d1] + n1*n2
      
      out[d0] = out[d0] + Math.floor(sum / 10)
      out[d1] = sum % 10
    }
  }

  if(out[0] === 0) {
    out.shift()
  }
  return out.join('')

};