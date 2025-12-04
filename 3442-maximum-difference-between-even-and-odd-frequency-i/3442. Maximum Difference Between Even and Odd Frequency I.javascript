/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  // aaaaa
  // bb
  // c 
  
  // 
  let freq = {}
  for(let c of s) {
    freq[c] = (freq[c] || 0) + 1
  }

  let maxodd = undefined
  let mineven
  for(let c of Object.keys(freq)) {
    let count = freq[c]
    if(count % 2 === 0) {
      if(mineven === undefined) {
        mineven = count
      } else if(count < mineven) {
        mineven = count
      }
    } else {
      if(maxodd === undefined) {
        maxodd = count
      } else if(count > maxodd) {
        maxodd = count
      }
    }
  }

  return maxodd - mineven
};