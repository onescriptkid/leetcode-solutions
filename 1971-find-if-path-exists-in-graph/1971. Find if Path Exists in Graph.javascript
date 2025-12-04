/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  let adj = {}
  for(let i = 0; i < n; i++) {
    adj[i] = new Set([i])
  }

  for(let [u,v] of edges) {
    adj[v].add(u)
    adj[u].add(v)
  }
  // console.log('adj', adj)


  let queue = [[source, -1]]
  let visited = new Set([source])
  while(queue.length > 0) {
    let [curr, parent] = queue.pop()

    if(curr === destination) return true

    for(let edge of adj[curr]) {
      if(edge === parent) continue
      if(visited.has(edge)) continue
      queue.push([edge, curr])
      visited.add(edge)
    }
  }

  return false
};