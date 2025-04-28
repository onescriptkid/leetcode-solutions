/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  //   0 2 3 4 6 8 9
  // p c 
  //   0,2---4,6,8-9

  let prev
  let range = []
  let out = []
  for(let num of nums) {
    // console.log('n', num, 'p', prev, 'r', range, 'out', out)
    if(prev === undefined) {
      range[0] = num
    } else {
      if((prev+1) !==num) {
        out.push(rangeToStr(range))
        range = [num]
      } else {
        range[1] = num
      }
    }

    prev = num
  }
  if(range.length > 0) {
    out.push(rangeToStr(range))
  }

  function rangeToStr(r) {
    if(r.length === 2) {
      return `${r[0]}->${r[1]}`
    } else {
      return `${r[0]}`
    }
    return ''
  }
  return out


};