/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  // 4 5 8     10 9 1 8
  //    
  arr2.sort((a,b) => a > b ? 1 : -1)
  let min = arr2[0]
  let max = arr2[arr2.length - 1]
  let out = 0
  for(let num1 of arr1) {


    // let maxdiff = Math.abs(num1 - max)
    // let mindiff = Math.abs(num1 - min)
    // if(maxdiff > 2 || mindiff > 2) {
    //   continue
    // }
    // out++
    let l = 0;
    let r = arr2.length - 1

    // 4 5 8


    // 1  8 9 10
    // l  m   r
    
    // 1  8 9 10
    // l  r
    // m

    let closest = undefined
    // console.log('num1', num1) 
    while(l <= r) {
      let m = Math.floor((l + r) / 2)
      let mid = arr2[m]
      // console.log('  lmr', l, m,r, 'mid', mid, 'num1', num1, 'closest', closest)

      let diff = Math.abs(mid - num1)
      let cdiff = Math.abs(closest- num1)
      if(closest === undefined) {
        closest = mid
      } else if(diff < cdiff) {
        closest = mid
      }

      if(mid === num1) {
        break;
      }
      if(mid < num1) {
        l = m + 1
      }
      if(mid > num1) {
        r = m - 1
      }
    } 
    // console.log('num1', num1, 'closest', closest)

    if(Math.abs(closest - num1) > d) {
      out++
    }
  }



  return out
};