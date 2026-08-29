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
    curr = curr.next
    while(curr !== null) {
      if(curr.left !== null) return curr.left
      if(curr.right !== null) return curr.right
      curr = curr.next
    }
    return null
  }   

  function dfs(curr) {
    if(curr === null) return

    if(curr.left !== null) {
      curr.left.next = curr.right || getNext(curr)
    }
    if(curr.right !== null) {
      curr.right.next = getNext(curr)
    }

    dfs(curr.right)
    dfs(curr.left)
  }
  dfs(root)
  return root
};