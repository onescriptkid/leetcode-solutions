/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

  let maxheap = new PriorityQueue((a, b) => a[0] > b[0] ? -1 : 1);
  for(let [x,y] of points) {
    let dist = x**2 + y**2
    // console.log('xy', [x, y], 'dist', dist, '-', maxheap.toArray())
    maxheap.enqueue([dist, x,y])
    if(maxheap.size() > k) {
      maxheap.pop()
      // let [fx, fy]= maxheap.front()
      // let distf = (fx**2 + fy**2)**0.5

      // if(distf > dist) {
      //   maxheap.dequeue()
      //   maxheap.enqueue([x,y])
      // }

    }
    



  }

  let out = []
  while(maxheap.size() >0) {
    let tmp = maxheap.pop()
    out.push([tmp[1], tmp[2]])
  }
  return out
};