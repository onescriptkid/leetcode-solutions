/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {

  let starts = []
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      starts.push(i)
    }
  }

  function isValid(arr, curr, dir) {
    // console.log('start', arr, dir)
    while(arr[curr] !== undefined) {
      // console.log('      ', arr, curr)
      if(dir === 'left') {
        curr--
      } else {
        curr++
      }
      if(arr[curr] > 0) {
        arr[curr]--
        if(dir === 'left') {
          dir = 'right'
        } else {
          dir = 'left'
        }
      }
    }
    // console.log('  end', arr)

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== 0) {
        return false
      }
    }
    return true
  }
  let counts = 0
  for(let start of starts) {
    let curr = start
    let left = isValid(nums.slice(0), curr, 'left')
    let right = isValid(nums.slice(0), curr, 'right')
    if(left === true) {
      counts++
    }
    if(right === true) {
      counts++
    }
  }
  return counts

};