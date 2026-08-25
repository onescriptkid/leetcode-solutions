/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let str = ''

  while(num > 0) {
    if(num >= 1000) {
      num-=1000
      str+='m'
    } else if(num >= 900) {
      num-=900
      str+='cm'
    } else if(num >= 500) {
      num-=500
      str+='d'
    } else if(num >= 400) {
      num-=400
      str+='cd'
    } else if(num >= 100) {
      num-=100
      str+='c'
    } else if(num >= 90) {
      num-=90
      str+='xc'
    } else if(num >= 50) {
      num-=50
      str+='l'
    } else if(num >= 40) {
      num-=40
      str+='xl'
    } else if(num >= 10) {
      num-=10
      str+='x'
    } else if(num >= 9) {
      num-=9
      str+='ix'
    } else if(num >= 5) {
      num-=5
      str+='v'
    } else if(num >= 4) {
      num-=4
      str+='iv'
    } else if(num >= 1) {
      num-=1
      str+='i'
    }
  }   
  return str.toUpperCase()
};