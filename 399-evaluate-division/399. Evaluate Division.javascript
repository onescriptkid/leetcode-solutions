/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {

  // Create graph in both directions
  // a / b = 2, b / c = 3  =>  a = 2b, b = 3c
  // a = 2b
  // b = 0.5a, b = 3c
  // c = 0.3b

  // Create adj list of leftside to rightside & rightside to leftside
  // adj {
  //   a: [ [ 'b', 2 ] ],
  //   b: [ [ 'a', 0.5 ], [ 'c', 3 ] ],
  //   c: [ [ 'b', 0.3333333333333333 ] ]
  // }
  let adj = {}
  for(let i = 0; i < equations.length; i++) {
    let [left, right] = equations[i]
    if(adj[left] === undefined) adj[left] = []
    if(adj[right]=== undefined) adj[right] = []
    let value = values[i]
    adj[left].push([right, value])
    adj[right].push([left, 1/value])
  }

  // Walk over queries. Instantiate a multiplier of 1.
  let visited = new Set() 
  let recstack = new Set()
  let out = []
  for(let query of queries) {
    visited = new Set() 
    recstack = new Set()
    let [start, end] = query
    let mult = 1
    let res = dfs(start, -1, mult,end)
    out.push(res[1])
  }

  // DFS for each query. Returns an [isValid, mult]
  function dfs(u, p, mult,end) {

    // If we already visited, the equation is impossible
    if(visited.has(u)) return [false, -1]
    visited.add(u)

    // If the adj[u] is undefined, the equation is impossible
    if(adj[u] === undefined) {
      return [false, -1]
    }

    // Once we found the node which equals the end, push mult up the dfs stack.
    if(u === end) {
      return [true, mult]
    }

    // Walk over each node in adj list
    for(let [v, m] of adj[u]) {
      if(v === p) continue

      // If we found a solution, (true) push that up the dfs stack
      let out = dfs(v,u,m*mult, end)
      if(out[0] === true) {
        return out
      }
    }

    // We couldn't find a solution traversing, return [false, -1]
    return [false, -1]
  }

  return out




    
};