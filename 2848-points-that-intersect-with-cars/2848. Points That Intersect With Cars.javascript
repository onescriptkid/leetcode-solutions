/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {

  // 1 2 3 4 5 6 7 8
  //     x-----x
  // x-------x
  //       x-----x

  // x---x
  //         x-----x
  let set = new Set()
  for(let num of nums) {
    let [start, end] = num
    for(let i = start; i <= end; i++) {
      set.add(i)
    }
  }
  return set.size
};