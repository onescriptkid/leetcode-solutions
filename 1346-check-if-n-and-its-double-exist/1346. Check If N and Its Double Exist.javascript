/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

  let hash = {}
  let set = new Set()
  for(let i = 0; i< arr.length; i++) {
    let num = arr[i]
    if(set.has(2 * num)) {
      return true
    } 
    if(set.has(num / 2)) return true
    set.add(num)
  }   
  return false
};