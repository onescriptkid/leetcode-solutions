/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {

  let bmap = {}
  for(let i = 0; i < arr2.length; i++) {
    let num = arr2[i]
    bmap[num] = i
  }   

  let out = arr1.sort((a,b) => {
    let aval = bmap[a]
    let bval = bmap[b]
    if(aval === undefined && bval === undefined) {
      if(a > b) {
        return 1
      } else {
        return -1
      }
    } else if(aval === undefined && bval !== undefined) {
      return 1
    } else if(aval !== undefined && bval === undefined) {
      return -1
    } else {
      if(aval > bval) {
        return 1
      } else {
        return -1
      }
    }
  })
  return out
};