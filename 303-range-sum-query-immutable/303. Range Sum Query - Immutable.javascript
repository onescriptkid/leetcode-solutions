/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  //  0  1  2  3  4  5 

  // -2  0  3 -5  2 -1
  // -2 -2  1 -4 -2 -3
  //        x        x
  //        2        5      -3 - (-2)  => 1
  this.psums = []
  let sum = 0
  for(let num of nums) {
    sum+=num
    this.psums.push(sum)
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {

  let lsum = this.psums[left - 1] || 0
  let rsum = this.psums[right]

  return rsum - lsum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */