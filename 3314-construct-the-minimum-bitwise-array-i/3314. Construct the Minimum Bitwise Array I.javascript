/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
  // 0  1  2  3
  // 2  3  5  7       2 => 10  4 => 100  3 => 11   5 => 101  111 => 
  // a  2  4  6
  let ans = []
  for(let num of nums) {

    let a = -1
    for(let i = 0; i < num; i++) {
      if( (i | (i+1)) === num) {
        a = i
        break;
      }
    }
    ans.push(a)
  }
  return ans
};