/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let out = []
  // []    [1,2,3] i=0

  // [1]   [1,2,3] i=1
  
  // [1,2]   [1,2,3] i=2
  
  // [1,2,3]   [1,2,3] i=3



  // [2]
  // [3]

  function bt(arr, i) {
    out.push([...arr])

    for(let j = i; j < nums.length; j++) {
      arr.push(nums[j])
      bt(arr, j+1)
      arr.pop()

    }
  }   
  bt([], 0)
  return out
};