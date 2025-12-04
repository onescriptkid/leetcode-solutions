/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  function getBits(num) {
    let count = 0
    while(num > 0) {
      let bit = num % 2
      if(bit === 1) count++
      num = Math.floor(num / 2)
    }
    return count
  }

  function fmt(h, m) {
    let hh = h
    let mm = m
    if(m < 10) {
      mm = `0${m}`
    }

    return `${hh}:${mm}`
  }

  let out = []
  for(let i = 0; i < 12; i++) {
    for(let j = 0; j < 60; j++) {
      let bits = getBits(i) + getBits(j)

      if(bits === turnedOn) {
        out.push(fmt(i,j))
      }
    }
  }
  return out

};