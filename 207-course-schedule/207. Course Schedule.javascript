/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let adj = {}
  for(let i = 0; i < numCourses; i++) {
    adj[i] = []
  }
  for(let [u,v] of prerequisites) {
    adj[v].push(u)
  }

  let indegrees = {}
  for(let vertex of Object.keys(adj)) {
    indegrees[vertex] = (indegrees[vertex] || 0)
    for(let edge of adj[vertex]) {
      indegrees[edge] = (indegrees[edge] || 0) + 1
    }
  }

  let queue = []
  for(let vertex of Object.keys(indegrees)) {
    if(indegrees[vertex] === 0) {
      queue.push(vertex)
    }
  } 

  let out = []
  // console.log('indegrees', indegrees)
  // console.log('queue', queue)
  // 1 <- 4   9
  // v    v
  // 3 <- 2
  while(queue.length > 0) {
    let curr = queue.shift()
    out.push(curr)

    for(let edge of adj[curr]) {
      indegrees[edge]--
      if(indegrees[edge] === 0) queue.push(edge)
    }
  }

  if(out.length === Object.keys(adj).length) {
    return true
  }
  return false

};