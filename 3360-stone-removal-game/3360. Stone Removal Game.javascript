/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
   // 12 a  10
   // 
  //  if(n < 10) {
  //   return false
  //  }

  // return n % 2 === 0
  let stones = 10
  let turn =  'a'
  while(stones <= n && stones > 0) {
    // console.log('stones', stones, 'n', n, 'turn', turn)
    n = n - stones
    stones = stones - 1
    if(turn === 'a') {
      turn = 'b'
    } else {
      turn = 'a'
    }
  }

  if(turn === 'a') {
    return false
  } else {
    return true
  }
   // 15 a
   // 5 b
   // 4 a
   // 3 b
   // 2 a
   // 1 b
   // 0 a

};