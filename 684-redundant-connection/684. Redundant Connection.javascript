/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let adj = {}
  for (let i = 1; i <= edges.length; i++) {
    adj[i] = []
  }

  for (let [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  console.log('adj', adj)

  let cycleStart = -1
  let visited = new Set()
  let cycle = new Set()

  // for(let i = 1; i <= edges.length; i++) {
  //   if(visited)
  // }
  dfs(1, -1)
  // console.log('cycle', cycle, 'visited', visited)
  for(let i = edges.length -1; i >= 0; i--) {
    let [u,v] = edges[i]
    if(cycle.has(u) && cycle.has(v)) {
      return [u,v]
    }
  }
  return [0,0]


  function dfs(u, parent) {
    if(visited.has(u)) {
      cycleStart = u
      return true
    }
    visited.add(u)

    for(let v of adj[u]) {
      if(v === parent) continue
      if(dfs(v, u)) {
        // console.log('cs', cycleStart, 'cycle', cycle, 'v', v, 'u', u)
        if(cycleStart !== -1) {
          cycle.add(u)
        }
        if(u === cycleStart) {
          cycleStart = -1
        }
        return true
      }
    }
    return false
  } 
};