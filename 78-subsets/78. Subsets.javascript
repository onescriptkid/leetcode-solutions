/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let out = []
    // [1,2,3], []
    //  i
    //   
    // [[], [1]]  
    // Go left, Go right. left adds nothing, right adds the index
    //                              res = []               nums =  [1,2,3]
    //                       /                         \
    // 0                   []                           [1]
    //                 /       \                     /        \
    // 1             []        [2]                [1]          [1, 2]
    //            /     \     /   \              /    \        /     \
    // 2         []     [3]  [2]  [2,3]      [1]     [1,3]  [2,3]     [1,2,3]
     
    function bt(i, res, ) {
      // console.log(i, res)
      // Once we've exhausted all options(numbers), add the result to the output
      if(i >= nums.length) {
        out.push([...res])
        return
      }

      // Grab num to be added to res
      let num = nums[i]
      i++

      // left is [] and right is [..., num]
      bt(i, [...res])
      bt(i,[...res, num])
    }
    bt(0, [])
    return out
};