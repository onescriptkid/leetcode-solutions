/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
  // 1 2 3 4

  // 123 123 4

  let freqd = {}
  for(let d of digits) {
    freqd[d] = (freqd[d] || 0) + 1
  }

  let count = 0
  for(let i = 100; i < 999; i+=2) {

    let freqi = {}
    let str = ""+i
    for(let c of str) {
      freqi[c] = (freqi[c] || 0) + 1
    }


    let valid = true
    for(let d of Object.keys(freqi))  {
      if(freqi[d] > freqd[d]) {
        valid = false
        break;
      }
      if(freqd[d] === undefined) {
        valid = false
        break;
      }
    }
    if(valid) {
      count++
    }
  }
  return count
};