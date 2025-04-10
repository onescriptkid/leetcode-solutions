/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let out = []
  function dfs(curr) {
    if(curr === null) {
      return
    }
    out.push(curr.val)
    for(const child of curr.children) {
      dfs(child)
    }
  }
  dfs(root)
  return out
};