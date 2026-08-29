/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)   
  minheap.push([nums1[0]+nums2[0], 0, 0])

  let visited = new Set()
  let out = []
  while(out.length < k) {
    let [_, i,j] = minheap.pop()
    out.push([nums1[i], nums2[j]])

    let key0 = `${i+1},${j}`
    if(nums1[i+1] !== undefined && !visited.has(key0)) {
      visited.add(key0)
      minheap.push([nums1[i+1]+nums2[j], i+1, j])
    }
    let key1 = `${i},${j+1}`
    if(nums2[j+1] !== undefined && !visited.has(key1)) {
      visited.add(key1)
      minheap.push([nums1[i]+nums2[j+1], i, j+1])
    }
  }

  return out
};