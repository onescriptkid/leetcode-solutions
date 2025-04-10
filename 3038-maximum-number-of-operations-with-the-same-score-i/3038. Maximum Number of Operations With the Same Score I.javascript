/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {

  // 1 5 3 3 4 1 3 2 2 3   
  
  // 1 5   3 3 4 2 3 3  1 2   
  //       1 2 2 3 3 3 3 4 
  //             l     r

  let sum = nums[0] + nums[1]
  let arr = nums.slice(2)
  // arr = arr.sort((a,b) => a)
  let ops = 1

  while(arr.length > 1) {
    let num1 = arr.shift()
    let num2 = arr.shift()
    let currsum = num1 + num2
    if(currsum !== sum) break;
    ops++

  }
  return ops
  // let counts = {}
  // for(let i = 0; i < arr.length; i++) {
  //   let num = arr[i]
  //   if(counts[num] === undefined) {
  //     counts[num] = 1
  //   } else {
  //     counts[num]++
  //   }
  // }
  // console.log(counts)
  // for(let i = 0; i < arr.length; i++) {
  //   let num = arr[i]
  //   let target = sum - num
  //   counts[num]--
  //   if(counts[target] > 0) {
  //     ops++
  //     counts[target]--
  //   }
  // }
  // console.log(counts)
  // return ops


  // let l = 0
  // let r = arr.length - 1

  // while(l < r) {
  //   let left = arr[l]
  //   let right = arr[r]
  //   let currsum = left + right
  //   if(currsum === sum) {
  //     ops++
  //     l++
  //     r++
  //   }
  //   if(currsum < sum) {
  //     l++
  //   }

  // }
};