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
  // [0,0]
  // [1,0]
  let rows = grid.length
  let cols = grid[0].length
  let node = new Node()
  node.isLeaf = true
  node.val = grid[0][0]

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(grid[r][c] !== node.val) {
        node.isLeaf = false
      }
    }
  }

  if(node.isLeaf) return node

  let rm = rows >> 1
  let cm = cols >> 1
  // console.log('rm cm', rm, cm)

  let tl = grid.slice(0, rm).map(v => v.slice(0, cm))
  let tr = grid.slice(0, rm).map(v => v.slice(cm))
  let bl = grid.slice(rm).map(v => v.slice(0, cm))
  let br = grid.slice(rm).map(v => v.slice(cm))

  // [0,0,0,0]
  // [0,0,0,0]
  // [0,0,0,0]
  // [0,0,0,0]
  // console.log('tl', tl)
  // console.log('tr', tr)
  // console.log('bl', bl)
  // console.log('br', br)

  node.topLeft = construct(tl)
  node.topRight = construct(tr)
  node.bottomLeft = construct(bl)
  node.bottomRight = construct(br)
  
  return node


    
};