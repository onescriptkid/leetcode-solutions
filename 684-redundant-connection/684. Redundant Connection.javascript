/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {

  let adj = {}
  for(let [u,v] of edges) {
    if(adj[u] === undefined) adj[u] = []
    if(adj[v] === undefined) adj[v] = []
    adj[u].push(v)
    adj[v].push(u)
  }   

  let cycle = new Set()
  let cycleStart = -1
  let visited = new Set()
  dfs(1, -1) 

  for(let i = edges.length - 1; i >= 0; i--) {
    let [u,v] = edges[i]
    if(cycle.has(u) && cycle.has(v)) {
      return [u,v]
    }
  }

  function dfs(u, p) {
    visited.add(u)

    for(let v of adj[u]) {
      if(v === p) continue
      if(visited.has(v)) {
        cycleStart = v
        cycle.add(u)
        return true
      }
      if(dfs(v,u)) {
        if(cycleStart === v) cycleStart = -1
        if(cycleStart !== -1) cycle.add(u)
        return true
      }
    }
    return false
  }
};