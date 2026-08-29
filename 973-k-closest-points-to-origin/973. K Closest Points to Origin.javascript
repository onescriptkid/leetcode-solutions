/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let maxheap = new PriorityQueue((a,b) => a[0] > b[0] ? -1 : 1)   

  for(let [x,y] of points) {
    let d = (x**2 + y**2) ** 0.5

    maxheap.push([d, x, y])
    if(maxheap.size() > k) maxheap.pop()
  }


  return maxheap.toArray().map(v => [v[1], v[2]])
};