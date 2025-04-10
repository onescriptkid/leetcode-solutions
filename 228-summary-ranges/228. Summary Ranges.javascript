/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return []
  let l;
  let r;
  let prev;
  // 0 1 2 
  //     i
  // l   
  //     r 
  //     p
  let out = []
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    r = num

    if(l === undefined) {
      l = num
    }

    if(prev !== undefined) {
      if((prev + 1) !== num) {
        if(prev !== l) {
          out.push(`${l}->${prev}`)
          l = num
        } else {
          out.push(`${l}`)
          l = num
        }
      }
    }
    prev = num
  }
  if(l === r) {
    out.push(`${l}`)
  } else {
    out.push(`${l}->${r}`)
  }
  return out
};