/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {

  // 0 1 2 3 4 5 6 7
  // 1 1 2 2 3 4 2 3      k = 6
  // [         ]
  //   [         ]
  //     [         ]
  
  // 1 1 2 2 3 4 2 3      k = 6
  // [         ]        => 1,1, 2,2
  //   [         ]      =>  2,2,2,4
  //     [         ]    => 3,3,2,2,2

  let freq = {}

  for(let i = 0; i < k; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1
  }
  let out = []
  let sum = 0
  let entries = Object.entries(freq).sort((a,b) => {
    a[0] = Number(a[0])
    if(a[1] < b[1]) {
      return 1
    } else if(a[1] > b[1]) {
      return -1
    } else if(a[1] === b[1]) {
      if(a[0] < b[0]) {
        return 1
      } else {
        return -1
      }
    }
  })

  for(let i = 0; i < x && i < entries.length; i++) {
    sum+=(entries[i][0] * entries[i][1])
  }
  out.push(sum)

  // console.log('entries',entries)
  // // for(let key of Object.keys(freq)) {
  // //   if()
  // // }

  // console.log('freq', freq )
  // console.log('out',out)


  let r = 0
  let l = 0
  while(r < nums.length - k) {
    let nr = nums[r+k]
    r++
    freq[nr] = (freq[nr] || 0) + 1
    // console.log('l, r', l, r, 'sub', nums.slice(l, r+k))
    // console.log('out', out)

    let nl = nums[l]
    freq[nl]--
    l++

    let sum = 0
    let entries = Object.entries(freq).sort((a,b) => {
      a[0] = Number(a[0])
      if(a[1] < b[1]) {
        return 1
      } else if(a[1] > b[1]) {
        return -1
      } else if(a[1] === b[1]) {
        if(a[0] < b[0]) {
          return 1
        } else {
          return -1
        }
      }
    })
    // console.log(r, entries)
    
    for(let i = 0; i < x && i < entries.length; i++) {
      sum+=(entries[i][0] * entries[i][1])
    }
    out.push(sum)



  }

  return out

};