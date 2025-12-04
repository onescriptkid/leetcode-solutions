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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let out = []
  let set = new Set()

  function dfs(curr) {
    if(curr === null) return false
    let partial = k - curr.val
    if(set.has(partial)) return true
    set.add(curr.val)

    return dfs(curr.left) || dfs(curr.right)
  } 
  return dfs(root)

};