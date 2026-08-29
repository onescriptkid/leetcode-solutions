/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let adj = {}
  for(let i = 0; i < numCourses; i++) {
    adj[i] = []
  }
  for(let [crs, pre] of prerequisites) {
    adj[pre].push(crs)
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
    if(indegrees[u] === 0) queue.push(u)
  }

  let out = []
  while(queue.length > 0) {
    let u = queue.shift()
    out.push(Number(u))

    for(let v of adj[u]) {
      indegrees[v]--
      if(indegrees[v] === 0) queue.push(v)
    }
  }

  if(out.length !== numCourses) {
    return []
  }

  return out
};