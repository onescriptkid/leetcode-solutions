/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
  
  function dfs(curr) {
    if(curr === null) return null
    
    let left = curr.left
    let right = curr.right
    let next  = curr.next

    // left
    if(curr.left !== null) {
      left.next = right
    }

    // right
    if(curr.next && curr.right) {
      curr.right.next = curr.next.left
    }

    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)
  return root
};