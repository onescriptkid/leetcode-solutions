/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {

  // 10, 15
  function gcd(x, y) {
    let large = x > y ? x : y
    let small = x > y ? y : x
    for(let i = 2; i <= small; i++) {
      if(small % i === 0 && large % i === 0) {
        return i
      }
    }
    return 1
  }   

  let out = 0
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      let num1 = nums[i]
      let num2 = nums[j]

      let num1str = ""+num1
      let num2str = ""+ num2
      let fd = num1str[0]
      let ld = num2str[num2str.length - 1]

      let fdnum = Number(fd)
      let ldnum = Number(ld)
      // console.log('fdnum', fdnum, 'ldnum', ldnum)

      if(gcd(fdnum, ldnum) ===1) {
        out++
      }
    }
  }
  return out

};