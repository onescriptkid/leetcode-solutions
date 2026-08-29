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
  for(let [u,v,wt] of times) {
    adj[u].push([v,wt])
  }

  let dist = {}
  for(let i = 1; i <= n; i++) {
    dist[i] = Infinity
  }
  dist[k] = 0

  let minheap = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)
  minheap.push([0, k])

  let visited =new Set()

  while(minheap.size() > 0) {
    let [d,u] = minheap.pop()
    if(visited.has(u)) continue
    visited.add(u)

    for(let [v,wt] of adj[u]) {
      if(dist[v] > dist[u] + wt) {
        dist[v] = dist[u] + wt

        minheap.push([dist[v], v])
      }
    }
  }

  // console.log(dist)

  let max = 0
  for(let u in dist) {
    if(dist[u] === Infinity) return -1
    if(dist[u] > max) {
      max = dist[u]
    }
  }
  return max


};