/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
   // WBBWWBBWBW = 7
   //    BB  B


  // WBBWWBBWBW
  //    0123456

   // BBBB---------BBBWWBBB
  // ABCD
  // 0123
  //   XX
  let max = 0
  for (let i = 0; i < blocks.length + 1 - k; i++) {
    let sub = blocks.substring(i, i + k)
    // console.log(sub, sub.length)
    let total = 0
    for(let j = 0; j < sub.length; j++) {
      // console.log(j)
      let c = sub[j]
      if(c === 'B') {
        total++
      }
    }
    if(max === undefined) {
      max = total
    } else if(total > max) {
      max = total
    }
  }
  return k - max
};