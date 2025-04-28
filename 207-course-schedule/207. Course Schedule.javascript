/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let adj = {}
  for(let i = 0; i < numCourses; i++) {
    adj[i] = new Set()
  }

  for(let [u,v] of prerequisites) {
    adj[u].add(v)
  }

  let indegrees = {}
  let vertices = Object.keys(adj)
  for(let vertex of vertices) {
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

  let out = 0

  while(queue.length > 0) {
    let curr = queue.shift()

    out++

    for(let edge of adj[curr]) {
      indegrees[edge]--
      if(indegrees[edge] === 0) {
        queue.push(edge)
      }
    }
  }

  if(out !== numCourses) {
    return false
  }
  return true
};