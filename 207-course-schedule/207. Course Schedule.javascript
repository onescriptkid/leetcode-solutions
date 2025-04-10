/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // [0,1] 0 -> 1 
  let adj = {}
  for (let p of prerequisites) {
    let [vertex, edge] = p
    if(adj[vertex] === undefined) {
      adj[vertex] = new Set([edge])
    } else {
      adj[vertex].add(edge)
    }
    if(adj[edge] === undefined) {
      adj[edge] = new Set()
    }
  }
  // console.log('adj', adj)

  // topological sort
  let indegree = {}
  let vertices = Object.keys(adj)
  for(const vertex of vertices) {
    if(indegree[vertex] === undefined) {
      indegree[vertex] = 0
    }
    const edges = adj[vertex]
    for(const edge of edges) {
      if(indegree[edge] === undefined) {
        indegree[edge] = 1
      } else {
        indegree[edge]++
      }
    }
  }

  // create queue of indegree 0
  const queue = []
  for(const vertex of Object.keys(indegree)) {
    if(indegree[vertex] === 0) {
      queue.push(vertex)
    }
  }
  // console.log('queue', queue)

  // decrement and push indegree of 0 onto queue
  const out = []
  while(queue.length > 0) {
    const curr = queue.shift()
    out.push(curr)

    const edges = adj[curr]
    // console.log('curr', curr, edges)
    for(const edge of edges) {
      indegree[edge]--
      if(indegree[edge] === 0) {
        queue.push(edge)
      }
    }
  }

  if(out.length !== vertices.length) {
    return false
  }
  return true
};