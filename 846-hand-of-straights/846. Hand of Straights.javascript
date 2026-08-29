/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  // 1 2 3  6 2 3  4 7 8
  // 1 2 2  3 3 4  6 7 8
  // 1 2    3
  //     2    3 4
  //               6 7 8

  if(hand.length % groupSize !== 0) return false

  hand.sort((a,b) => a > b ? 1 : -1)

  let freq = {}
  for(let v of hand) {
    freq[v] = (freq[v] || 0) + 1
  }

  // {1: 1, 2; 2, 3: 2}

  // freq[1] === 1
  // console.log(freq)
  for(let num of hand) {
    if(freq[num] !== 0) {
      // console.log('num', num)
      for(let i = num; i < num+groupSize; i++) {
        // console.log('  ', i)
        if(freq[i] === 0 || freq[i] === undefined) return false
        freq[i]--
      }
    } 
  }

  return true

};