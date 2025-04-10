/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {

  let [hh, mm] = time.split(':')

  // ?5:00
  // 00:0?
  // ?    ?    :    ?    ?
  //                6    10    
  // ??:10 => 
  let valid = 1
  if(mm[0] === "?") {
    valid = valid * 6
  }
  if(mm[1] === "?") {
    valid = valid * 10
  }

  // 0?:45
  // 2?:45
  if(hh[0] !== "?" && hh[1] === "?") {
    if(Number(hh[0]) === 2) {
      valid = valid * 4
    } else {
      valid = valid * 10

    }
  }
  // ?0:45
  // ?5:45
  if(hh[0] === "?" && hh[1] !== "?") {
    if(Number(hh[1]) < 4) {
      valid = valid * 3
    } else {
      valid = valid * 2
    }
  }
  // ??:45
  if(hh[0] === "?" && hh[1] === "?") {
    valid = valid * 24
  }
  return valid
  
  // // 15:00
  // if(hh[0] !== '?' && hh[1] !== "?" && mm[0] !== "?" && mm[1] !== "?") {
  //   return 1
  // }
  // // 15:0?
  // if(hh[0] !== '?' && hh[1] !== "?" && mm[0] !== "?") {
  //   return 10
  // }
  // // 15:?0
  // if(hh[0] !== '?' && hh[1] !== "?" && mm[1] !== "?") {
  //   return 6
  // }
  
  // // 15:??
  // if(hh[0] !== '?' && hh[1] !== "?") {
  //   return 60
  // }
  // // 1?:??
  // if(hh[0] !== '?' && hh[1] !== "?") {
  //   return 60
  // }
};