/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.prefixsums = []
  this.sum = 0
  for(let num of nums) {
    this.sum+=num
    this.prefixsums.push(this.sum)
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  //  0  1  2  3  4  5  6
  // -2  0  3  0 -5  2 -1
  // -2  0  1  1 -4 -2 -3
  //        l        r

  return this.prefixsums[right] - (this.prefixsums[left - 1] || 0)
    
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */