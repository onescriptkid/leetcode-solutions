/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {

  let head = null
  let ptr = null;
    // let node = new TreeNode(curr.val)

  function dfs(curr) {
    if(curr === null) {
      return null
    }

    dfs(curr.left)
    if(head === null) {
      head = new TreeNode(curr.val)
      ptr = head;
    } else {
      ptr.right = new TreeNode(curr.val)
      ptr = ptr.right
    }
    dfs(curr.right)
  }
  dfs(root)
  return head
};