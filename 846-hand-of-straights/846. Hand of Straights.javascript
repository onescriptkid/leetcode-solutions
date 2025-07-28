/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  hand.sort((a,b) => a >b ? 1 : -1)

  let freq = {}
  for(let h of hand) {
    freq[h] = (freq[h] || 0) + 1
  }

  for(let h of hand) {
    if(freq[h] !== 0) {
      
      for(let i = h; i < h + groupSize; i++) {
        if(freq[i] === undefined || freq[i] === 0) {
          return false
        }
        freq[i]--
      }
    }
  }
  return true
};