/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  // 1 3 2 2 5 2 3 7
  //   x x x   x x
  let freq = {}
  for(let num of nums) {
    freq[num] = (freq[num] || 0) + 1
  }


  // Don't actually need to iterate over all the nums
  // I really should just iterate over the freqs
  let max
  for(let num of nums) {
    let plusone = freq[num+1]
    let minusone = freq[num-1]
    if(plusone === undefined && minusone === undefined) {
      continue
    }

    if(plusone !== undefined) {
      let opt1 = plusone + freq[num]
      if(max === undefined) {
        max = opt1
      } else if(opt1 > max) {
        max = opt1
      }
    }

    if(minusone !== undefined) {
      let opt2 = minusone + freq[num]
      if(max === undefined) {
        max = opt2
      } else if (opt2 > max) {
        max = opt2
      }
    }

  }

  if(max === undefined) return 0
  return max

};