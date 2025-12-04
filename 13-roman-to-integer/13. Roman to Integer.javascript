/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // 01234
  // LVIII
  // i
  let i = 0
  let out = 0
  while(i < s.length) {
    let c = s[i]
    let c2 = s[i+1]
    if(c === 'I' && c2 === 'V') {
      out+=4
      i+=2
    } else if(c ==='I' && c2 === 'X') {
      out+=9
      i+=2
    } else if(c === 'X' && c2 === 'L') {
      out+=40
      i+=2
    } else if(c === 'X' && c2 === 'C') {
      out+=90
      i+=2
    } else if(c === 'C' && c2 === 'D') {
      out+=400
      i+=2
    } else if(c === 'C' && c2 === 'M') {
      out+=900
      i+=2
    } else if(c === 'I') {
      out+=1
      i+=1
    } else if(c === 'V') {
      out+=5
      i++
    } else if(c === 'X') {
      out+=10
      i++
    } else if(c === 'L') {
      out+=50
      i++
    } else if(c === 'C') {
      out+=100
      i++
    } else if(c ==='D') {
      out+=500
      i++
    } else if( c=== 'M') {
      out+=1000
      i++
    }
  }   
  return out
};