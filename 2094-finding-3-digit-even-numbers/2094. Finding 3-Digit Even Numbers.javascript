/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {

  let freq = {}
  for(let digit of digits) {
    freq[digit] = (freq[digit] || 0) + 1
  }

  let out = []
  for(let i = 100; i <= 999; i+=2) {
    let str = i + ""
    let freqd = {}
    for(let c of str) {
      freqd[c] = (freqd[c] || 0) + 1 
    }

    let flag = true
    for(let key of Object.keys(freqd)) {
      let count = freqd[key]
      if(freq[key] === undefined) {
        flag = false
        break;
      } else if(freqd[key] > freq[key]) {
        flag = false
        break;
      }
    }
    if(flag) {
      out.push(i)
    }
  }
  return out
};