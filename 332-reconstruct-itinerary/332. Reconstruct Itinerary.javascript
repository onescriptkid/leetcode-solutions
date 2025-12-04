/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let adj = {}
  for(let [u,v] of tickets) {
    if(adj[u] === undefined) adj[u] = []
    if(adj[v] === undefined) adj[v] = []
    adj[u].push(v) 
  }   

  for(let u in adj) {
    adj[u].sort().reverse()
  }

  let out = []
  dfs('JFK')
  function dfs(u) {

    while(adj[u].length > 0) {
      let v = adj[u].pop()
      dfs(v)
    }
    out.push(u)
  }
  return out.reverse()
};