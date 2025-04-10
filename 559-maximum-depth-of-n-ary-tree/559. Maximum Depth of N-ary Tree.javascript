/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {

  let max = 0
  function dfs(curr, depth) {
    if(curr === null) return
    if(depth > max) {
      max = depth
    }
    curr.children.forEach(c => {
      dfs(c, depth + 1)
    })
  }
  dfs(root, 1)
  return max
    
};