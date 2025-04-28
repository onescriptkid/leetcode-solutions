/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {

  // ??:??
  let [hh, mm] = time.split(':')

  // ?4:??
  let hour = ""
  if(hh[0] !== '?' && hh[1] !== '?') {
    hour = hh
  } else if(hh[0] === '?' && hh[1] === '?') {
    hour = '23'
  } else if(hh[0] === '?' && hh[1] !== '?') {
    // ?4:??
    let numhh1 = Number(hh[1])
    if(numhh1 < 4) {
      hour+='2'+hh[1]
    } else {
      hour+='1'+hh[1]
    }
    // 1?
  } else if(hh[0] !== '?' && hh[1] === '?') {
    let numhh0 = Number(hh[0])
    if(numhh0 === 2) {
      hour+='23'
    } else {
      hour+=`${hh[0]}9`
    }
  } 
  // console.log('hh', hh, 'hh[0]', hh[0], 'hh[1]', hh[1])

  let min = ""
  // :
  if(mm[0] === '?' && mm[1] === '?') {
    min = '59'
  } else if(mm[0] !== '?' && mm[1] !== '?') {
    min = `${mm}`
  // :?0
  } else if(mm[0] === '?' && mm[1] !== '?') {
    min= `5${mm[1]}`
  // :0?
  } else if(mm[0] !== '?' && mm[1] === '?') {
    min = `${mm[0]}9`
  }

  return `${hour}:${min}`

};