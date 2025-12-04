/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function partition(arr, start, end) {
      let rand = start + Math.floor(Math.random() * (end - start + 1));
      [arr[rand], arr[end]] = [arr[end], arr[rand]];

      let pv = arr[end]
      let pi = start
      for(let i = start; i < end; i++) {
          if(arr[i] < pv) {
              let tmp = arr[pi]
              arr[pi] = arr[i]
              arr[i] = tmp
              pi++
          }
      }
      let tmp = arr[pi]
      arr[pi] = arr[end]
      arr[end] = tmp
      return pi

  }        

  function quicksorti(arr, start, end) {
      if(start >= end) {
          return
      }
      let i = partition(arr, start, end)

      quicksorti(arr, start, i -1)
      quicksorti(arr, i+1, end)
  }
  quicksorti(nums, 0, nums.length - 1)
  return nums 
};