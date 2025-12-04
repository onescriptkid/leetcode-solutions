/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  // 0 1 2 4 5 7  st=
  // i
  
  // 0 1 2 4 5 7  st=0, [0->2, ]
  //       i
  if(nums.length === 0) return []

  let out = []
  let start
  let end
  let prev
  for(let num of nums) {

    if(start === undefined) {
      start = num
    } else if(prev+1 !== num) {

      if(start !== prev) {
        out.push(`${start}->${prev}`)
      } else {
        out.push(`${start}`)
      }
      start = num
    }
    prev = num
  }

  if (start !== prev) {
    out.push(`${start}->${prev}`)
  } else {
    out.push(`${start}`)
  }
  return out




};