/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {

  let out = []
   for(let i = 0; i < arr.length-2; i++) {
    for(let j = i+1; j < arr.length - 1; j++) {
      for(let k = j+1; k < arr.length; k++) {
        if(i === j || j === k || i === k) {
          continue
        }
        let diffa = Math.abs(arr[i] - arr[j])
        let diffb = Math.abs(arr[j] - arr[k])
        let diffc = Math.abs(arr[i] - arr[k])


        if(diffa <= a && diffb <= b && diffc <=c) {
          out.push([arr[i], arr[j],arr[k]])
        }
      }
    }
   }
   console.log(out)
   return out.length
};