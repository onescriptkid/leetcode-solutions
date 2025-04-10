/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
   // 2 

  let nfreq = {}
  let max = undefined
  for (let num of nums) {
    nfreq[num] = (nfreq[num] || 0) + 1

    if (max === undefined) {
      max = nfreq[num]
    } else if (nfreq[num] > max) {
      max = nfreq[num]
    }
  }

  let set = new Set()
  for(let key of Object.keys(nfreq)) {
    let count = nfreq[key]
    if(count === max) {
      set.add(Number(key))
    }
  }
  // 1 5 2 3 5 4 5 6
  //   x     x   x
  let first = {}
  let counts = {}
  let shortest = undefined
  // console.log('max', max, 'nfreq', nfreq, 'set', set)
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    // console.log('i', i, 'num', num, 'shortest', shortest)
    if(set.has(num)) {
      if(first[num] === undefined) {
        first[num] = i
      }
      counts[num] = (counts[num] || 0) + 1
      if(counts[num] === max) {
        let len = i - first[num] + 1
        if(shortest === undefined) {
          shortest = len 
        } else if(len < shortest) {
          shortest = len
        }
      }
    }
  }


  return shortest
  // 1 2 2 3
  //       r
  // l

  // let l = 0
  // let r = 0
  // let wfreq = {}
  // while(r < nums.length) {
  //   let nr = nums[r]
  //   r++

  //   wfreq[nr] = (wfreq[nr] || 0) + 1
  //   if(wfreq[nr] === max)

  // }

};