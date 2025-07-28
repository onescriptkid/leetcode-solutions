/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  let adj = {}
  for(let i = 1; i <= n; i++) {
    adj[i] = new Set()
  }   
  // console.log('adj',adj)

  let trustset = new Set()
  for(let [u,v] of trust) {
    adj[v].add(u)
    trustset.add(u)
  }

  // console.log('adj',adj)
  for(let i = 1; i<=n; i++) {
    if(adj[i].size === n - 1 && !trustset.has(i)) return i
  }
  return -1
};