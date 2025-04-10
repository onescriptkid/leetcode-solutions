/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {

  let ops = 0
  let [hh, mm] = correct.split(':')
  let nhh = Number(hh)
  let nmm = Number(mm)

  let [currh, currm] = current.split(':')
  let numh = Number(currh)
  let numm = Number(currm)
  while(numh !== nhh || numm !== nmm) {
    // console.log(numh, numm, nhh, nmm)
    // console.log(numm, nmm,"--", numh, nhh, "ops", ops)
    if(numm > nmm) {
      if((numm + 15) % 60 === numm + 15) {
        // no wraparound 
        numm+=15
      } else if( ((numm + 15) % 60) <= nmm ) {
        // wrapparound but less
        numm+=15
      } else if((numm+ 5) % 60 === numm + 5) {
        // no wrapparound
        numm+=5
      } else if( ((numm + 5) % 60) <= nmm ) {
        /// wrapparound but less
        numm+=5
      } else {
        numm+=1
      }
      // :35, 30
    } else if(numm < nmm) {
      if((numm + 15) <= nmm) {
        numm+=15
      } else if((numm + 5) <= nmm) {
        numm+=5
      } else {
        numm+=1
      }
    } else if(numh < nhh) {
      numh+=1
    }
    // if(numh + 1 < nhh) {
    //   numh+=1
    // } else if(numh < nhh && numm <= nmm) {
    //   numh+=1
    // } else if(numh + 1 === nhh && numm > nmm) {
    //   // 02:30 -> 02:25
    // }
    if(numm % 60 !== numm) {
      numh+=1
    }
    numm = numm % 60
    ops++
  }


  return ops
};