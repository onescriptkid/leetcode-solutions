/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {

  // 11111222223
  // 111 112 222 23

  // 12 34
  // 3  7

  while(s.length > k) {

    // split
    let chunks = []
    let chunk = ""
    for(let i = 0; i < s.length; i++) {
      let c = s[i]
      chunk+=c
      if(chunk.length  === k) {
        chunks.push(chunk)
        chunk = ""
      }
    }
    if(chunk.length > 0) {
      chunks.push(chunk)
    }
    // console.log('chunk', chunks)
    // 111 112 222 23

    // sum
    let sums = []
    for(let chunk of chunks) {
      let sum = 0
      for(let i = 0; i < chunk.length; i++) {
        let num = Number(chunk[i])
        sum+=num
      }
      sums.push(sum)
    }
    // console.log('sums', sums)

    // merge
    let next = ""
    for(let sum of sums) {
      next+=sum
    }
    s = next
  }
  return s
};