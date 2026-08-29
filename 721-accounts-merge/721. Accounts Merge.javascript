/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let adj = {}
  let emailtoname = {}
  for(let acc of accounts) {
    let name = acc[0]
    for(let i = 1; i < acc.length; i++) {
      let email = acc[i]
      emailtoname[email] = name

      if(adj[email] === undefined) adj[email] = new Set()

    }
    let u = acc[1]
    for(let i = 2; i < acc.length; i++) {
      let v = acc[i]
      adj[u].add(v)
      adj[v].add(u)
    }
  }    

  let visited = new Set()
  let merged = {}
  for(let u in adj) {
    if(visited.has(u)) continue
    let email = u
    merged[email] = new Set()
    dfs(u, -1, email)    
  }

  function dfs(u, p, email) {
    visited.add(u)
    merged[email].add(u)

    for(let v of adj[u]) {
      if(v === p) continue
      if(visited.has(v)) continue
      dfs(v, u, email)
    }
  }
  
  let out = []
  for(let key in merged) {
    let name = emailtoname[key]
    let emails = merged[key]
    let sorted = [...emails].sort()
    let acc = [name, ...sorted]
    out.push(acc)
  }
  return out
};