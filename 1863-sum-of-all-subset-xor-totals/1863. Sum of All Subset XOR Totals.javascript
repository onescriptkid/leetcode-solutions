/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

  //                    []   5,1,6
  //                 /      \
  //               [5]        []
  //              /    \
  //            [5,1]   [5]
  //            / \
  //     [5,1,3]   [5,1] 

  let out = 0
  function dfs(i, xor) {
    // console.log('i', i, 'xor', xor)
    if(i === nums.length) {
      out+=xor
      return
    }

    let opt1 = dfs(i+1, xor)
    let opt2 = dfs(i+1, xor^nums[i])

  }
  dfs(0, 0)
  return out
};