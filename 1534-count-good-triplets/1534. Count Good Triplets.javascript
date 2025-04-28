/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {

  // 3 0 1 1 9 7
  // i j k
  // let out = []
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      for(let k = j+1; k < arr.length; k++) {
        let diffa = Math.abs(arr[i] - arr[j])
        let diffb = Math.abs(arr[j] - arr[k])
        let diffc = Math.abs(arr[i] - arr[k])
        if(diffa <= a && diffb <= b && diffc <= c) {
          count++
          // out.push([arr[i], arr[j], arr[k]])
        }
      }
    }
  }
  return count
  // console.log(out)
  return out.length
};