/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {


  // let freq = {}
  let count = 0
  let prev
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if(num !== prev) {
      count = 1
    } else {
      count++
    }
    if(count > (arr.length / 4) ) {
      return num
    }
    prev = num

    // freq[num] = (freq[num] || 0) + 11
    // if(freq[num] > (arr.length /4) ) {
    //   return num
    // }
  }
};