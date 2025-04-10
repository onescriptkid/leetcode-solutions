/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {

  function getOn(n) {
    let on = 0
    while(n > 0) {
      let bit = n % 2
      if(bit === 1) on+=1
      n = Math.floor(n / 2)
    }
    return on
  }
  function format(h, m) {

    let mfmt = ""+m
    if(m < 10) {
      mfmt = "0"+m
    }

    return `${h}:${mfmt}`

  }

  let out = []
  for(let i = 0; i < 12; i++){
    for(let j = 0; j < 60; j++) {
      let on = getOn(i) + getOn(j)

      if(on === turnedOn) {
        out.push(format(i, j))
      }
    }
  }
  return out

};