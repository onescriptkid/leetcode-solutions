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
  for(let [course, pre] of prerequisites) {
    adj[pre].push(course)
  }

  let indegrees = {}
  for(let u in adj) {
    indegrees[u] = (indegrees[u] || 0) 
    for(let v of adj[u]) {
      indegrees[v] = (indegrees[v] || 0) + 1
    }
  }

  let queue = []
  for(let u in indegrees) {
    if(indegrees[u] === 0) {
      queue.push(u)
    }
  }

  let out = []

  while(queue.length > 0) {
    let u = queue.shift()

    out.push(u)

    for(let v of adj[u]) {
      indegrees[v]--
      if(indegrees[v] === 0) queue.push(v)
    }
  }

  if(out.length !== Object.keys(adj).length) {
    return false
  }

  return true
};