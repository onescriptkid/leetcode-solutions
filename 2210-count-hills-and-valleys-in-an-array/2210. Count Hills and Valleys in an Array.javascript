/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {

  // 2 4 1 1 6 5
  // - h v


  // - h v v h -


  // 6 6 5 5 4 1
  // - h v v v -
  
  // 6 6 5 5 6 1
  // - h v v v -


  let isValley = false
  let isHill = false
  let hills = 0
  let valleys = 0
  for(let i = 1; i < nums.length-1; i++) {
    let num = nums[i]
    let left = nums[i-1]
    let right = nums[i+1]
    // console.log('num', num, 'v', isValley, 'h', isHill, 'count', hills, valleys)
    if(left < num) {
      isHill = true
    }
    if(left > num) {
      isValley = true
    }

    if(isHill && num > right) {
      hills++
      isHill = false
    }
    if(isValley && num < right) {
      valleys++
      isValley = false
    }

  }
  return hills + valleys 

};