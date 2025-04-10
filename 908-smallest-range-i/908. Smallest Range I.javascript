/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
  let min;
  let max;
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if(min === undefined) {
      min = num
    } else if(num < min) {
      min = num
    }
    if(max === undefined) {
      max = num
    } else if(num > max) {
      max = num
    }
  }

  let diff = Math.floor((max - min)/ 2)
  let newnums = []

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num < min + diff) {
      if((num + k) >= min + diff) {
        newnums.push(min + diff)
      } else {
        newnums.push(num + k)
      }
    }
    if(num > min + diff) {
      if((num - k) <= min + diff) {
        newnums.push(min + diff)
      } else {
        newnums.push(num - k)
      }
    }
    if(num === min + diff) {
      newnums.push(num)
    }
  }
  console.log(newnums, diff, min, max)

  let newmin;
  let newmax
  for(let i = 0; i <newnums.length; i++) {

    let num = newnums[i]

    if(newmin === undefined) {
      newmin = num
    } else if(newmin > num) {
      newmin = num
    }
    if(newmax === undefined) {
      newmax = num
    } else if(newmax < num) {
      newmax = num
    }
  }
  return newmax - newmin
  // [1, 3, 6]
  // 6 - 3 => 3
  // 1 + 3 => 4

};