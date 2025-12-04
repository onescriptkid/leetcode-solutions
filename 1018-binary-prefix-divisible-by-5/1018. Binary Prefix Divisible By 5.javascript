/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {

  let prefixes = []
  let prefix = 0
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    prefix = prefix *2
    if(num === 1) {
      prefix = prefix +1
    }
    prefix= prefix % 5
    prefixes.push(prefix)
  }
  // console.log('prefixes', prefixes)
  // let str = nums.join('')
  // console.log(str)
  // console.log(str.slice(0, str.length - 3))
  // console.log(parseInt(str.slice(0, str.length - 3), 2))
  let out = []
  for(let num of prefixes) {
    if(num % 5 === 0) {
      out.push(true)
    } else [
      out.push(false)
    ]
  }
  return out
};