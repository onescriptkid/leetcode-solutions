/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
  // 0123

  // 1210 
  // 0    occurs 1 time
  //  1   occurs 2 times
  //   2  occurs 1 time
  //    3 occurs 0 time

  let freq = {}
  for(let n of num) {
    freq[n] = (freq[n] || 0) + 1
  }
  
  // {1: 2}

  for(let i = 0; i < num.length; i++) {
    let n = num[i]
    if(freq[i] === undefined && Number(n) !== 0){
      return false
    } else if(freq[i] !== undefined && freq[i] !== Number(n))  {
      return false
    }
  }
  return true

};