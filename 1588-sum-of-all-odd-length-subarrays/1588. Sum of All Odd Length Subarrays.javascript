/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

  // 1 4 2 5 3 0 0
  //     a          5    arr.length - i => 7 - 2 => 5
  //     a a
  //     a a a
  //     a a a a
  //     a a a a a
  // x x x          10  (arr.length-i) * i
  // x x x x
  // x x x x x
  // x x x x x x
  // x x x x x x x
  //   x x
  //   x x x
  //   x x x x
  //   x x x x x
  //   x x x x x x
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    let after = arr.length - i
    let before = (arr.length - i) * i

    let count = Math.ceil((after + before) / 2)
    sum+=count*arr[i]
  }
  return sum

};