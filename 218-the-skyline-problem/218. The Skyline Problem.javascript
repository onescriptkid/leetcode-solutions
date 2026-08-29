/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
   let events = [];

  for (let [l, r, h] of buildings) {
    events.push([l, -h]);
    events.push([r,  h]);
  }

  events.sort((a, b) =>
    a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
  );

  // max heap
  let pq = new PriorityQueue((a, b) => b - a);

  let count = new Map();
  pq.enqueue(0);
  count.set(0, 1);

  let res = [];
  let prevMax = 0;

  for (let [x, h] of events) {
    if (h < 0) {
      let height = -h;
      pq.enqueue(height);
      count.set(height, (count.get(height) || 0) + 1);
    } else {
      count.set(h, count.get(h) - 1);
    }

    // lazy deletion
    while (!pq.isEmpty() && count.get(pq.front()) === 0) {
      pq.dequeue();
    }

    let currMax = pq.front();
    if (currMax !== prevMax) {
      res.push([x, currMax]);
      prevMax = currMax;
    }
  }

  return res;   
};