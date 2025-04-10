/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

  // 0  1  2  3  4
  // 1  4  2  5  3
  // 1  5  7  12 15
  // k = i + 1 * (n - i)
  // k = (4 + 1) *(5 - 1) 20
  // k = end   * start

  let out = 0
  for(let i = 0; i < arr.length; i++) {
    // let num = arr[i]
    let total = i * (arr.length - i) + (arr.length - i)
    out += Math.ceil(total / 2) * arr[i]
    // out += ((i + 1) * (arr.length - 1) + 1) / 2 * arr[i]

  }
  return out



  let allsums = 0
  for(let i = 0; i < arr.length; i++) {
    let currsum = 0
    let tmp = []
    for(let j = i; j < arr.length; j++) {
      let len = (j - i) + 1
            // tmp.push(arr[j])
      currsum+=arr[j]
      
      if(len % 2 === 1) {
        allsums+=currsum
        // console.log('i', i, 'j', j, 'currsum', currsum, 'allsums', allsums, 'tmp', tmp)
      }
    }
  }
  return allsums
};