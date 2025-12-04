/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {

  // 4 5 2 1     3 10 21
  //     2 1     3
  // 4   2 1       10
  // 4 5 2 1          21
  //             2 3  4
  nums.sort((a,b) => a > b ? 1 : -1)
  // 1 2 4 5

  // 
  let psums = []
  let psum = 0
  for(let num of nums) {
    psum+=num
    psums.push(psum)
  }
  // 1 3 7 12      3


  // 0 1 2 3
  // 1 3 7 12       3 /2 => 1.5 => 1
  // l m   r
  //     l r        5 /2 => 2.5 => 2
  let out = []
  for (let q of queries) {
    let l = 0
    let r = psums.length - 1
    while (l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = psums[m]
      // console.log('l m r', l, m, r, 'mid', mid, 'q', q)
      if (mid === q) {
        out.push(m + 1)
        break;
      }
      if(mid < q) {
        l = m + 1
      }
      if(mid > q) {
        r = m - 1
      }
    }
    if(l > r) out.push(l)
  }
  return out


};