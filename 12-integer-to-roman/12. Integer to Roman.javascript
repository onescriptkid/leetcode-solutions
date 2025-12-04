/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let str = ''

  // 4, 9      IV, IX
  // 40, 90,   XL, XC
  // 400, 900  CD, CM
  // 109 => C + IX => CIX
  // IX + C

  // 149 => C+XL+IX

  while(num > 0) {
    // console.log('str', str, 'num', num)
    if(false) {
      //



    } else if(num >= 1000) {
      str = str + "M"
      num-=1000
    } else if(num >= 900) {
      str = str + "CM"
      num-=900
    } else if(num >= 500) {
      str = str + "D"
      num-=500
    } else if(num >= 400) {
      str = str + "CD"
      num-=400
    } else if(num >= 100) {
      str = str + "C"
      num-=100
    } else if(num >= 90) {
      str = str + "XC"
      num-=90
    } else if(num >=50) {
      str = str + "L"
      num-=50
    } else if(num >= 40) {
      str = str + 'XL'
      num-=40
    } else if(num >= 10) {
      str = str + "X"
      num-=10
    } else if(num % 10 === 9) {
      str = str + "IX"
      num-=9
    } else if(num >= 5) {
      str = str + "V"
      num-=5
    } else if(num % 10 === 4) {
      str = str + "IV"
      num-=4
    } else if(num >= 1) {
      str = str + "I"
      num-=1
    }
  }

  return str
    
};