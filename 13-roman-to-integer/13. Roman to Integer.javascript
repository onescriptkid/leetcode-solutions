/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

  let i = 0
  let sum = 0
  while(i < s.length) {
    let c0 = s[i]
    let c1 = s[i+1]

    if(c0 === "I" && c1 === "V") {
      sum+=4
      i+=2
    } else if(c0 === "I" && c1 === "X") {
      sum+=9
      i+=2
    } else if(c0 === "X" && c1 === "L") {
      sum+=40
      i+=2
    } else if(c0 === "X" && c1 === "C") {
      sum+=90
      i+=2
    } else if(c0 === "C" && c1 === "D") {
      sum+=400
      i+=2
    } else if(c0 === "C" && c1 === "M") {
      sum+=900
      i+=2
    } else if(c0 === "I") {
      sum+=1
      i++
    } else if(c0 === "V") {
      sum+=5
      i++
    } else if(c0=== "X") {
      sum+=10
      i++
    } else if(c0 === "L") {
      sum+=50
      i++
    } else if(c0 === "C") {
      sum+=100
      i++
    } else if(c0 === "D") {
      sum+=500
      i++
    } else if(c0 === "M") {
      sum+=1000
      i++
    }
  }
  return sum
};