/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

  for(let i = 0; i < num.length; i++) {
    let c = num[num.length - 1 - i]
    let val = Number(c)
    if(val % 2 === 1) {
      // 01234
      // 34532  5 -1
      // 0  i
      let sub = num.substring(0, num.length - i)
      return sub 
    }
  }
  return ""
};