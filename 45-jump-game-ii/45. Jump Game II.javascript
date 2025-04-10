/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let min = Number.MAX_SAFE_INTEGER
    const memo = {}
    const recurse = (index, jumps) => {
      if(index >= nums.length -1) {
        if(jumps < min){
          min = jumps
        }
        return
      }
      // Quit if curr number of jumps exceeds the current min
      if(jumps >= min) {
        return
      }
      // keep track of indicies we visited and their min number of jumps
      if(index in memo) {
        if(memo[index] <= jumps) {
          return 
        } else {
          memo[index] = jumps
        }
      } else {
        memo[index] = jumps 
      }
      
      for(let i = nums[index]; i > 0; --i) {
        recurse(index + i, jumps + 1)
      }
    }
    recurse(0, 0)
    return min
};