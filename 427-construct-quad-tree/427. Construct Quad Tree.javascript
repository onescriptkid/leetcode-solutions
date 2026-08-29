/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
  let rows = grid.length
  let cols = grid[0].length

  //  0 0 1 1
  //  0 0 1 1
  //  0 0 0 0
  //  0 0 0 0

  function dfs(rs,re,cs,ce) {
    if(rs >= re || cs >= ce) {
      return new _Node(grid[rs][ce], true)
    }
    let rm = Math.floor((rs + re) / 2)
    let cm = Math.floor((cs + ce) / 2)

    let tl = dfs(rs, rm, cs, cm)
    let tr = dfs(rs, rm, cm+1, ce)
    let bl = dfs(rm+1, re, cs, cm)
    let br = dfs(rm+1, re, cm+1, ce)

    if (tl.isLeaf && bl.isLeaf && tr.isLeaf && br.isLeaf) {
      if (tl.val === tr.val && tr.val === bl.val && bl.val === br.val) {
        return new _Node(tl.val, true)
      }
    }

    return new _Node(1, false, tl, tr, bl, br)
  }   

  return dfs(0, rows-1, 0, cols-1)
};