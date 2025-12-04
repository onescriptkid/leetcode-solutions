/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if(n <= 2) {
    let out = []
    for(let i = 0; i < n; i++) {
      out.push(i)
    }
    return out
  }   

  let adj = {}
  for(let i = 0; i < n; i++) {
    adj[i] = new Set()
  }
  for(let [u,v] of edges) {
    adj[u].add(v)
    adj[v].add(u)
  }

  let leaves = []
  for(let u in adj) {
    if(adj[u].size === 1) leaves.push(Number(u))
  } 
  // console.log(leaves)

  while(n > 2) {
    let newleaves = []
    for(let leaf of leaves) {
      let trim = adj[leaf].values().next().value
      adj[trim].delete(leaf)
      if(adj[trim].size === 1) newleaves.push(trim)
    }
    // console.log(newleaves)

    n-=leaves.length
    leaves = newleaves
  }

  return leaves
};