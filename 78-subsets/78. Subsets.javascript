/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let out = []
  let arr = []

  function bt(i) {
    out.push([...arr])

    for(let j = i; j < nums.length; j++) {
      arr.push(nums[j])
      bt(j+1)
      arr.pop()
    }
  }
  bt(0)
  return out
};