/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let adj = {}
  for(let i = 1; i <= edges.length; i++) {
    adj[i] = []
  }   
  for(let [u,v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  let visited = new Set()
  let cycle = new Set()
  let cycleStart = -1

  dfs(1, -1)
  for(let i = edges.length - 1; i >= 0; i--) {
    let [u,v] = edges[i]
    if(cycle.has(u) && cycle.has(v)) {
      return [u, v]
    }
  }

  return [-1,-1]

  function dfs(u, p) {
    visited.add(u)

    for(let v of adj[u]) {
      if(v === p) continue
      if(visited.has(v)) {
        cycleStart = v
        cycle.add(u)
        return true
      }
      if(dfs(v, u)) {
        if(cycleStart === v) cycleStart = -1
        if(cycleStart !== -1) cycle.add(u)
        return true
      }
    }
    return false
  }
};