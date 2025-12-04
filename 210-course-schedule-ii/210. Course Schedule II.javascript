/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  // 0 1 2 3 4 5 6   
  //  [0 ,     1  ]
  /// [course, pre]

  let adj = {}
  for (let i = 0; i < numCourses; i++) {
    adj[i] = []
  }
  //  1 0
  // b -> a
  // 0 -> 1
  for(let [c, p] of prerequisites) {
    adj[p].push(c)
  }
  // console.log('adj', adj)

  let indegrees = {}
  for(let vertex of Object.keys(adj) ){
    indegrees[vertex] = (indegrees[vertex] || 0)
    for(let edge of adj[vertex]) {
      indegrees[edge] = (indegrees[edge] || 0) + 1
    }
  }

  // console.log('indegres', indegrees)

  let queue = []
  for(let key of Object.keys(indegrees)) {
    if(indegrees[key] === 0) {
      queue.push(key)
    }
  }
  // a -> b -> c
  // d -> e

  // console.log('queue', queue)
  // let visited = new Set()
  let out = []
  while(queue.length > 0) {
    let curr = queue.shift()
    out.push(curr)

    for(let edge of adj[curr]) {
      indegrees[edge]--
      if(indegrees[edge] === 0) {
        queue.push(edge)
      }
      // if(visited.has(edge)) {
      //   console.log('cycle!', curr, edge)
      //   return []
      // }
    }
  }

  if(out.length !== Object.keys(adj).length) {
    // console.log('impossible')
    return []
  }
  out = out.map(Number)
  return out


};