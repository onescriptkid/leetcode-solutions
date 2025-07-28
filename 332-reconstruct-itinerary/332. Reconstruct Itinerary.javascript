/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
   let adj = {}
  for(let [u,v] of tickets) {
    if(adj[u] === undefined) adj[u] =[]
    // if(adj[v] === undefined)adj[v] = []
    adj[u].push(v)
    // adj[v].push(v)
  }

  for(let vertex in adj) {
    adj[vertex].sort().reverse()
  }
  // jfk: [sfo, atl]
  // sfo: [atl]
  // atl: [jfk, sfo]
  //
  // console.log('adj', adj)
  let queue = []
  let out = []
  function dfs(u) {
    let arr = adj[u]
    while(adj[u] !== undefined && adj[u].length > 0) {
      dfs(adj[u].pop())
    }
    out.push(u)

  }
  dfs("JFK")
  return out.reverse()   
};