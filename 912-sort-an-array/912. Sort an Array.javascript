/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    
  let unsorted = nums
  console.log(`nums ${nums}`)
  
  function merge(left, right) {
    let merged = []
    
    let i = 0;
    let j = 0;
    //console.log(`merge left ${left} right ${right}`)
    
    while(i < left.length && j < right.length) {
      let l = left[i]
      let r = right[j]
      if(l < r) {
        merged.push(l)
        i++
      } else {
        merged.push(r)
        j++
      }
    }
    
    while( i < left.length) {
      let l = left[i]
      merged.push(l)
      i++
    }
    while(j < right.length) {
      let r = right[j]
      merged.push(r)
      j++
    }
    //console.log(`merge merged ${merged}`)
    return merged
  }
  
  function mergeSort(unsorted) {
    //console.log(`mergeSort unsorted ${unsorted}`)
    if(unsorted.length <= 1) { return unsorted}
    
    let half = Math.floor(unsorted.length /2)
    let left = unsorted.slice(0, half )
    let right = unsorted.slice(half)
    
    //console.log(`mergeSort unsorted ${unsorted} l ${left} r ${right}`)

    let sorted = merge(mergeSort(left), mergeSort(right));
    return sorted
  }
  
  return mergeSort(unsorted)
};