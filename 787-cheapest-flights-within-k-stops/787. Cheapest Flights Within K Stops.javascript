/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  let adj = {}
  for(let i = 0; i < n; i++) {
    adj[i] = []
  }   
  for(let [u,v,wt] of flights) {
    adj[u].push([v,wt])
  }

  let dist = []
  for(let i = 0; i < n; i++) {
    dist[i] = Infinity
  }
  dist[src] = 0

  let queue = [[0, src, 0]]

  while(queue.length > 0) {
    let [d, u, stops] = queue.shift()

    if(stops > k) continue

    for(let [v,wt] of adj[u]) {
      if(dist[v] > d + wt) {
        dist[v] = d + wt
        queue.push([dist[v], v, stops+1])
      }
    }
  }
  return dist[dst] === Infinity ? -1 : dist[dst]
};