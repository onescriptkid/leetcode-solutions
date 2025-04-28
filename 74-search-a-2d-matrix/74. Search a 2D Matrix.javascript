/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

  // 25  

  // 1  3  5  7
  // 10 11 16 20  
  // 23 30 34 60  
  
  // x  3  5  7
  // 10 11 16 20  
  // 23 30 34 x
  let rows = matrix.length
  let cols = matrix[0].length

  let rowl = 0
  let rowr = rows - 1
  let rowmid 
  while(rowl <= rowr) {
    let rowm = Math.floor((rowl + rowr) / 2)
    rowmid = matrix[rowm]
    let left = rowmid[0]
    let right = rowmid[cols -1]
    // console.log('l m r', rowl, rowm, rowr, 'rowmid', rowmid, 'left', left, 'right', right )

    if(target >= left && target <= right) {
      // console.log('break?', target, left, right, '--', target >= left, target <= right)
      break;
    }
    if(target < left) {
      rowr = rowm - 1
    }
    if(target > right) {
      rowl = rowm + 1
    }
  }
  // console.log('rowmid', rowmid)

  if(target < rowmid[0] || target > rowmid[cols-1]) {
    return false
  }

  let coll = 0
  let colr = cols - 1
  while(coll <= colr) {
    let m = Math.floor((coll + colr) / 2)
    let mid = rowmid[m]
    // console.log('lmr', coll, m, colr, '', 'mid', mid)
    if(mid === target) {
      return true
    }
    if(mid < target) {
      coll = m + 1
    }
    if(mid > target) {
      colr = m - 1
    }
  }

  return false

};