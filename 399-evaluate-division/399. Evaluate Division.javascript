/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  let adj = {}
  for(let [u,v] of equations) {
    adj[u] = []
    adj[v] = []
  }

  for(let i = 0; i < values.length; i++) {
    let val = values[i]
    let [u,v] = equations[i]

    adj[u].push([v, val])
    adj[v].push([u, 1/val])
  }

  let out = []
  for(let [s,e] of queries) {
    let visited = new Set()
    let ans = dfs(s, 1, e, visited)
    out.push(ans)
  }
  return out

  function dfs(u, val, e, visited) {
    visited.add(u)

    if(adj[u] === undefined) return -1
    if(u === e) return val

    for(let [v,mul] of adj[u]) {
      if(visited.has(v)) continue
      let ans = dfs(v, val*mul, e, visited)
      if(ans !== -1) return ans
    }
    return -1
  }
};