/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let i = 0
  let sum = 0
  while(i < s.length) {
    let c = s[i]
    let c2 = s[i+1]

    if(c === 'I' && c2 === 'V') {
      sum+=4
      i+=2
    } else if(c === 'I' && c2 === 'X') {
      sum+=9
      i+=2
    } else if(c === 'X' && c2 === 'L') {
      sum+=40
      i+=2
    } else if(c === 'X' && c2 === 'C') {
      sum+=90
      i+=2
    } else if(c === 'C' && c2 === 'D') {
      sum+=400
      i+=2
    } else if(c === 'C' && c2 === 'M') {
      sum+=900
      i+=2
    } else if(c === 'I') {
      sum+=1
      i++
    } else if(c === 'V') {
      sum+=5
      i++
    } else if(c === 'X') {
      sum+=10
      i++
    } else if(c === 'L') {
      sum+=50
      i++
    } else if(c === 'C') {
      sum+=100
      i++
    } else if(c === 'D') {
      sum+=500
      i++
    } else if(c === 'M') {
      sum+=1000
      i++
    }
  }
  return sum
};