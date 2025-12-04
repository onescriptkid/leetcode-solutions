/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  let squeries = queries.slice().sort((a,b) => a > b ? 1 : -1)   
  intervals.sort((a,b) => a[0] > b[0] ? 1 : -1)
  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 :-1)
  let minmap = {}

  let i = 0
  for(let q of squeries) {

    while(i < intervals.length && intervals[i][0] <= q) {
      let [l,r] = intervals[i]
      minheap.push([r-l+1, r])
      i++
    }
    while(minheap.size() > 0 && minheap.front()[1] < q) {
      minheap.pop()
    }

    minmap[q] = minheap.size() > 0 ? minheap.front()[0] : -1
  }

  return queries.map(v => minmap[v])
};