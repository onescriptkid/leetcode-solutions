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

  let queue = [node]
  let visited = new Set([node.val])
  let bmap = {}

  while(queue.length > 0) {
    let curr = queue.shift()

    if(bmap[curr.val] === undefined) {
      bmap[curr.val] = new Node(curr.val)
    }

    for(let neighbor of curr.neighbors) {
      if(bmap[neighbor.val] === undefined) {
        bmap[neighbor.val] = new Node(neighbor.val)
      }

      bmap[curr.val].neighbors.push(bmap[neighbor.val])
      if(!visited.has(neighbor.val)) {
        visited.add(neighbor.val)
        queue.push(neighbor)
      }
    }
  }
  return bmap[node.val]
};