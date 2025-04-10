/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {

  let str = ""
  let trailing = true
  for(let i = num.length - 1; i >= 0; i--) {
    let n = num[i]

    if(n !== "0") {
      trailing = false
      str = n + str
    } else {
      if(!trailing) {
        str = n + str
      }
    }
  }
  return str

};