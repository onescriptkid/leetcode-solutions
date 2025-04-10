/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function(nums, k) {
  // 0 1 2 3 4 5 6 7 8 9
  // 2 5 7 8 9 2 3 4 3 1
  //     x x x y y y
  //                   
  // x x x x x
  //           y y y z a
  let count = 1
  let start = 0
  let longest = 1
  let prev
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(prev !== undefined) {
      if(num > prev) {
        count++
      } else {
        arr.push([start, i-1])
        start = i
        count = 1
      }
    }

    if(count > longest) {
      longest = count
    }
    prev = num
  } 

  arr.push([start, nums.length -1])


  let previ
  for(let i = 0; i < arr.length; i++) {
    let [start, end] = arr[i]
    if(previ !== undefined) {
      let [prevstart, prevend] = previ

      let prevlen = prevend - prevstart +1
      let len = end - start + 1
      // console.log('pe, ps', prevend, prevstart, 'e, s', end, start, '-', len >= k)
      if((prevend+1) === start &&  prevlen >= k && len >= k) {
        return true
      }
    }

    let len = end - start + 1
    if(len >= (2 * k)) {
      return true
    }

    previ = arr[i]
  }
  // console.log('arr', arr)

  // if((longest / 2) >= k) {
  //   return true
  // }
  return false
};