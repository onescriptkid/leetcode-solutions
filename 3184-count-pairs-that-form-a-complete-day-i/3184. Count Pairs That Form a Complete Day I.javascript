/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {

  // { 12: 0}
  // 12 12 30 24 24
  // 12 12 6  0  0

  // 6 18 18
  let kv = {}
  let total = 0
  for(let i = 0; i < hours.length; i++) {
    let hour = hours[i]
    // 72 -> 0
    // 72 -> 24
    let key = hour % 24 
    let diff = 24 - key
    if(diff === 24 && kv[key] !== undefined) {
      total = total + kv[key]
    } else if(kv[diff] !== undefined) {
      total = total + kv[diff]
    }

    kv[key] = (kv[key] || 0) + 1
  }
  // console.log('kv',kv)
  return total

};