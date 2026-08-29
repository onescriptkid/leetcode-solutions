/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0
  function merge(left, right) {
    let i = 0
    let j = 0
    let out = []
    while(i < left.length && j < right.length) {
      if(left[i] < right[j]) {
        out.push(left[i])
        i++
      } else {
        out.push(right[j])
        j++
      }
    }
    while(i < left.length) {
      out.push(left[i])
      i++
    }
    while(j < right.length) {
      out.push(right[j])
      j++
    }
    return out
  }   
  function partition(arr) {
    if(arr.length === 0 || arr.length === 1) return arr
    let m = arr.length >> 1
    let left = arr.slice(0, m)
    let right = arr.slice(m, arr.length)

    let pleft = partition(left)
    let pright = partition(right)


    let j = 0
    for(let i = 0; i < pleft.length; i++) {
      while(j < pright.length && pleft[i] > 2 * pright[j]) {
        j++
      }
      count+=j
    }
    return merge(pleft, pright)
  }
  partition(nums)
  return count
};