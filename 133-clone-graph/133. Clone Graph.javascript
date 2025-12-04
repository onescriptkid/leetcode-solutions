/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  if(node === null) return null
  let map = {}
  let visited = new Set([node.val])
  let queue = [node]

  while(queue.length > 0) {
    let u = queue.shift()

    if(map[u.val] === undefined) {
      map[u.val] = new Node(u.val)
    }

    for(let v of u.neighbors) {
      if(map[v.val] === undefined) {
        map[v.val] = new Node(v.val)
      }
      map[u.val].neighbors.push(map[v.val])

      if(visited.has(v.val)) continue
      visited.add(v.val)
      queue.push(v)
    }
  }

  return map[node.val]

};