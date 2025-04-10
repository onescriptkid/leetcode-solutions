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
 * @return {number}
 */
var findTilt = function(root) {
  //             4
  //          /     \
  //         2       9
  //        / \       \
  //       3   5       7
  let tilt = 0
  function dfs(curr) {
    if(curr === null) {
      return 0
    }

    let left = dfs(curr.left)
    let right = dfs(curr.right)

    let diff = Math.abs(left - right)
    tilt+=diff

    return left + curr.val + right
  }
  dfs(root)
  return tilt

};