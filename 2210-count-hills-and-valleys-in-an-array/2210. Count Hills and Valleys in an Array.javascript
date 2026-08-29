/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  // - h -
  // 2 3 2

  // 2 4 1 1 6 5
  // - h v v h -
  
  // 2 4 4 4 4 1 1 6 5
  // - h h h h v v h -

  let hills = 0
  let valleys = 0
  let ishill = false
  let isvalley = false

  for(let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    let prev = nums[i-1]
    let next = nums[i+1]

    // hills
    if(prev !== undefined && prev < curr && ishill === false) {
      ishill = true
    }
    if(next !== undefined && curr > next && ishill === true) {
      ishill = false
      hills++
    }
  }

  for(let i = 0; i < nums.length; i++) {
   
    let curr = nums[i]
    let prev = nums[i-1]
    let next = nums[i+1]

    // valleys
    if(prev !== undefined && prev > curr && isvalley === false) {
      isvalley = true
    }
    if(next !== undefined && curr < next && isvalley === true) {
      isvalley = false
      valleys++
    }

   
  }
  // console.log('hills', hills, 'valley', valleys)
    return hills + valleys




};