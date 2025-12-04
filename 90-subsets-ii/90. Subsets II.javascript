/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let out = []
  let arr = []
  nums.sort((a,b) => a > b ? 1 : -1)

  function bt(i) {
    out.push([...arr])

    for(let j = i; j < nums.length; j++) {
      if(j !== i && nums[j] === nums[j-1]) continue
      arr.push(nums[j])
      bt(j+1)
      arr.pop()
    }
  }
  bt(0)
  return out
};