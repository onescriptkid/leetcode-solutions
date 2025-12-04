/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  // 8 5 1 7 10 12 
  // i

  //      8
  //   5     10
  // 1   7      12

  // 8 5 1 7
  //     i

  //     8
  //    /
  //   5
  //  /
  // 1


  // let i = 0

  // 8 5 1 7 10 12
  // i l   m    r
  //         lm r
  //         m


  // 4 2
  //  

  function dfs(arr) {
    let p = arr[0]
    if(p === undefined) return null

    let node = new TreeNode(p)
    let l = 1
    let r = arr.length - 1
    while(l <= r) {
      let m = Math.floor((l + r) /2 )
      let mid = arr[m]
      if(mid < p) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
    let left = arr.slice(1, l)
    let right = arr.slice(l)
    // console.log('p', p, 'left', left, 'right', right)

    node.left = dfs(left)
    node.right = dfs(right)

    // i++

    // if(preorder[i] > p) {
    //   node.left = dfs()
    // }
    // node.right = dfs()

    return node
  }
  return dfs(preorder)


};