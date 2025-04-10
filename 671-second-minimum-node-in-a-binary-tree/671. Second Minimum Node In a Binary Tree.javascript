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
var findSecondMinimumValue = function (root) {
  let min = root.val
  let min2 = undefined

  function dfs(curr) {
    if(curr === null) {
      return 0
    }

    if(min2 === undefined && curr.val !== min) {
      min2 = curr.val
    } else if(curr.val < min2 && curr.val !== min) {
      min2 = curr.val
    }

    // Prune options. UNnecesary, but limits search space
    // Only need to follow branches where val === min
    //        1
    //     1     3
    //   1   2
    if(curr.val !== min) return


    dfs(curr.left)
    dfs(curr.right)
  }
  dfs(root)

  if(min2 === undefined) return -1
  return min2

};