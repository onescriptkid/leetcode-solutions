/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(arr.length < 3) return false
  //
  // 2 0 2

  // 0 2 3 4 5 2 1 0
  //           
  let prev
  let inc = true
  // let dec = false
  for(let i = 1; i < arr.length; i++) {
    let num = arr[i]
    let prev = arr[i-1]
    // console.log('p n', prev, num,'inc',inc)
    if(num === prev) return false
    if(inc) {
      if(prev > num) {
        inc = false
      }
      if(prev > num && i===1) {
        return false
      }
    } else {
      if(num > prev) {
        return false
      }
    }
  }   
  return !inc
};