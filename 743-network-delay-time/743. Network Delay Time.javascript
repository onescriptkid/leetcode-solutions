/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let adj = {}
  for(let i = 1; i <= n; i++) {
    adj[i] = []
  }
  for(let [u,v,w] of times) {
    adj[u].push([v,w])
  }

  let minheap = new MinPriorityQueue()  

  let dist = {}
  for(let i = 1; i <= n; i++) {
    dist[i] = Infinity
  }
  // console.log('adj', adj)
  // console.log('dist', dist)

  dist[k] = 0
  minheap.push([0,k])

  while(minheap.size() > 0) {
    let [d, u] = minheap.pop()
    // console.log('d', d, 'u', u)

    for(let [v,wt] of adj[u]) {

      if(dist[v] > dist[u] + wt) {
        dist[v] = dist[u] + wt
        minheap.push([dist[v], v])
      }
    }
  }

  let max = undefined
  // console.log('dist', dist)
  for(let d of Object.keys(dist)) {
    if(dist[d] === Infinity) return -1
    if(max === undefined) {
      max = dist[d]
    } else if(dist[d] > max) {
      max = dist[d]
    }
  }
  return max
  
};