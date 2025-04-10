/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  // 0123
  // 1210

  let freq = {}
  for(let n of num) {
    freq[n] = (freq[n] || 0) + 1
  }
  
  // 3:0
  // console.log(freq)
  for(let i = 0; i < num.length; i++) {
    let n = Number(num[i])
    // console.log(['i', i, 'n', n])
    if(freq[i] !== n) {
      if(freq[i] === undefined && n === 0) continue
      return false
      // if(n === 0 && freq[i] !== undefined) return false
      // if(n !== 0) return false
    }
  }
  return true


};