/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  // 1 0 2 3 0 4 5 0 x x x
  //               i
  //                     j

  // 1 0 2 3 0 4 5 0


  // 1 0 2 3 0 4 5 0
  // 1 0 0 2 3 0 4 5 0
  // 1 0 0 2 3 0 0 4 5 0
  //


  // 0 1 1 1 2 2 2 3
  let z = 0
  // let 
  for(let num of arr) {
    if(num === 0) z++
  }

  let j = arr.length - 1 + z
  for(let i = arr.length - 1; i >= 0; i--) {
    arr[j] = arr[i]
    if(arr[i] === 0) {
      j--
      arr[j] = 0
    }
    j--
  }
  arr.length= arr.length - z

};