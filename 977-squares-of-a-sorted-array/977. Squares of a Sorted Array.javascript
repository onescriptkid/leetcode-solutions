/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

  let neg = []   
  let pos = []
  for(let i = 0; i < nums.length; i++) {

    let num = nums[i]

    if(num < 0) {
      neg.unshift(num * num)
    } else {
      pos.push(num *num)
    }
  }

  // merge
  let i = 0;
  let j = 0;
  let out = []
  while(i < neg.length && j < pos.length) {
    if(neg[i] < pos[j]) {
      out.push(neg[i])
      i++
    } else {
      out.push(pos[j])
      j++
    }
  }
  while(i < neg.length) {
    out.push(neg[i])
    i++
  }
  while(j < pos.length) {
    out.push(pos[j])
    j++
  }
  // console.log(neg, pos)
  return out

};