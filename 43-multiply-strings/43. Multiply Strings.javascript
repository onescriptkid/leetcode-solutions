/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
      // 100 * 100 => 10000 
      // 99
        //  99
    //       123
    //       456
    //res 000000  
    
    //    012345
    //       123
    //       456
    //res 000000
    //        18
    //       12  
    //       6
    //        dd   i=2,j=2
    
    let res = new Array(num1.length + num2.length).fill(0)

    for(let i = num1.length - 1; i >= 0; i--) {
      for(let j = num2.length - 1; j >=0; j--) {
        let n1 = Number(num1[i])
        let n2 = Number(num2[j])

        // let mult = n1*n2  // 6*3 => 18
        let sum = res[i+j+1] + n1*n2

        let digit = sum % 10
        let carry = Math.floor(sum/10)

        // console.log('mult', mult, 'res', res)
        
        res[i+j] = res[i+j] + carry
        res[i+j+1] = digit
      }
    }

    // [0,8,5]
    // console.log(res)

    if(res[0] === 0) {
      res.shift()
    }

    return res.join('')

};