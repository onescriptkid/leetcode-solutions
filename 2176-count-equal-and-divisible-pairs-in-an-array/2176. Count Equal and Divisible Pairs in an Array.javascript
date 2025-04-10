/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
   // 1 1 2 2 2 3 3 
  //  {
  //   3; []
  //  }

  // nums.sort((a, b) => a > b ? 1 : -1)
  let count = 0
  // console.log(nums)
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]
    if(hash[num1] === undefined) {
      hash[num1] = [i]
    } else {
      hash[num1].push(i)
    }
    // let num2 = nums[i]
    // 3 1 2 2 2 1 3
    // 0 1 2 3 4 5 6

    // 3: [0, 6]
    for(let j = 0; j < hash[num1].length; j++) {
      let index = hash[num1][j]
      if(index !== i) {
        if((i * index) % k === 0) {
          // console.log(num1, i, index)
          count++
        }
      }
    }


    // if (num1 === num2 && ((num1 * num2) % k === 0)) {
    //   count++
    // }
  }
  // console.log(hash)
  return count
};