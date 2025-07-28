/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || p === null || q === null) return null   

  let min = Math.min(p.val, q.val)
  let max = Math.max(p.val, q.val)

  if(min <= root.val && max >= root.val) {
    return root
  } else if(min < root.val && max < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return lowestCommonAncestor(root.right, p, q)
  }
};