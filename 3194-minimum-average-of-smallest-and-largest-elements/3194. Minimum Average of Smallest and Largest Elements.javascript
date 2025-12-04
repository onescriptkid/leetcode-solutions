/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {

  nums.sort((a,b) => a > b ? 1 : -1)

  // 7 8 3 4 15 13 4 1
  // 1 3 4 4 7 8 13 15

  let l = 0
  let r = nums.length -1

  // let out = []
  let gmin = undefined
  while(l <= r) {
    let min = nums[l]
    let max = nums[r]

    let avg = (min + max) / 2
    // out.push(avg)
    if(gmin === undefined) {
      gmin = avg
    } else if (avg < gmin) {
      gmin = avg
    }

    l++
    r--
  }
  // console.log(out)
  // return out
  return gmin

};