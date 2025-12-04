/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  // 0040 k=4 => 6   
  // xxx
  //  xx
  //   x
  // xxxx
  //  xxx
  //   xx

  let map = {0:1}
  let prefixsum = 0
  let count = 0

  for(let num of nums) {
    prefixsum+=num
    let rem = prefixsum % k
    if(rem < 0) rem+=k

    count+=(map[rem] || 0)
    map[rem] = (map[rem] || 0) + 1
    // console.log('num', num, 'prefixsum', prefixsum, map)
  }
  return count
};