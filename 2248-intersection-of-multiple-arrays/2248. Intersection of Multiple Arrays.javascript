/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  let set = new Set()
  let sets = nums.map(arr => new Set(arr))

  let firstarr = nums[0]

  let out = []
  for(let num of firstarr) {

    let every = true
    for(let set of sets) {
      if(!set.has(num)) {
        every = false
        break;
      }
    }
    if(every === true) {
      out.push(num)
    }
  }
  out.sort((a,b) => a > b ? 1 : -1)
  return out
};