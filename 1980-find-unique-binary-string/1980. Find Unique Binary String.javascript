/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  let set = new Set(nums)
  let n = nums.length
  for(let i = 0; i < (2 **n); i++) {
    // console.log('i', i)
    let str = i.toString(2)
    let diff = n - str.length
    for(let j = 0; j < diff; j++) {
      str = "0" + str
    }
    // console.log(str)
    if(!set.has(str)) {
      return str
    }
  }
};