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

  function getNext(curr) {
    while(curr !== null) {
      if(curr.left !== null) return curr.left
      if(curr.right !== null) return curr.right
      curr = curr.next
    }
    return null
  }   

  function dfs(curr) {
    if(curr === null) return null
    if(curr.left) {
      curr.left.next = curr.right ? curr.right : getNext(curr.next)
    }

    if(curr.right) {
      curr.right.next = getNext(curr.next)
    }

    dfs(curr.right)
    dfs(curr.left)
  }
  dfs(root)
  return root
};