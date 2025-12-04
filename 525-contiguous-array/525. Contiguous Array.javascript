/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  // 0  1  1  1  1  1  0  0  0 
  // -1 0  1  2  3  4  3  2  1
  // - 1 1 1 1 1 - - -

let map = new Map();
map.set(0, -1);
let prefixsum = 0, max = 0;

for (let i = 0; i < nums.length; i++) {
  prefixsum += (nums[i] === 0 ? -1 : 1);
  if (map.has(prefixsum)) {
    max = Math.max(max, i - map.get(prefixsum));
  } else {
    map.set(prefixsum, i);
  }
}
return max
};