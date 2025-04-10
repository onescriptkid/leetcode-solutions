/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {

  // 11891
 
  // 99899
  // 00890

  // 90
  // 90

  let numstr = "" + num
  let maxremap = numstr[0]
  if(maxremap === '9') {
    for(let c of numstr) {
      if(c !== "9") {
        maxremap = c
        break;
      }
    }
  }

  let maxstr = ""
  for(let c of numstr) {
    if(c === maxremap) {
      maxstr+=9
    } else {
      maxstr+=c
    }
  }

  let minremap = numstr[0]
  let minstr = ""
  for(let c of numstr) {
    // console.log('c', c, 'first', first)
    if(c === minremap) {
      minstr+=0
    } else {
      minstr+=c
    }
  }
  // console.log('minstr', minstr, 'maxstr', maxstr)

  let max = Number(maxstr)
  let min = Number(minstr)
  return max - min
};