/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {

  let formatted = ""

  for(let i = 0; i < number.length; i++) {
    let c = number[i]
    if(c === ' ' || c === '-') continue
    formatted+=c
  }   

  // 012
  // 123456
  //   i
  let curr = 1
  let out = ""
  let left = formatted.length
  let index = 0;
  if (formatted.length > 4) {
    for (let i = 0; i < formatted.length; i++) {
      let c = formatted[i]
      left = formatted.length - i - 1
      if (curr === 3) {
        out = out + c + "-"
        curr = 1
        if (left <= 4) {
          index = i + 1
          break;
        }
      } else {
        out = out + c
        curr++
      }
    }

  }


  if(left === 2) {
    out+=formatted.substring(index)
  } else if(left === 3) {
    out+=formatted.substring(index)
  } else if(left === 4) {
    // console.log(formatted, index, formatted.substring(index, index+2))
    out+=formatted.substring(index, index+2) + "-" + formatted.substring(index+2)
  }

  return out
};