/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
  // 10 21 31
  // 11 22 33

  function encrypt(n) {

    let tmp = n
    let max = 0
    while(tmp > 0) {
      let digit = tmp % 10
      if(digit > max) {
        max = digit
      }
      tmp = Math.floor(tmp / 10)
    }
    // console.log('max', max, 'n', n)
    // max
    tmp = n
    let encrypted = 0
    let i = 0
    while(tmp > 0) {
      encrypted = encrypted + max * (10 ** i)
      tmp = Math.floor(tmp / 10)
      i++
    }
    return encrypted
  }

  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let encrypted = encrypt(num)
    sum+=encrypted
  }
  return sum
};