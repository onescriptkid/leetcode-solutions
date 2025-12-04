/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)   

  let visited = new Set(['0,0'])
  minheap.push([nums1[0]+nums2[0], 0, 0])
  // console.log(minheap.toArray())

  let out = []
  while(out.length < k) {
  // console.log(minheap.toArray())
    let [sum, i, j] = minheap.pop()
    out.push([nums1[i], nums2[j]])

    let sum0 = nums1[i+1] + nums2[j]
    let key0 = `${i+1},${j}`
    if(!visited.has(key0) && nums1[i+1] !== undefined) {
      minheap.push([sum0, i+1, j])
      visited.add(key0)
    }

    let sum1 = nums1[i] + nums2[j+1]
    let key1 = `${i},${j+1}`
    if(!visited.has(key1) && nums2[j+1] !== undefined) {
      minheap.push([sum1, i, j+1])
      visited.add(key1)
    }
  }
  return out
};