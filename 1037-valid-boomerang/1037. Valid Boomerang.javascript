/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {

  points.sort((a,b) => a[0] > b[0] ? 1 : -1) 

  // console.log('points', points)

  let diff1 = [points[0][0] - points[1][0], points[0][1] - points[1][1] ]
  let ratio1 = diff1[1] / diff1[0]

  let diff2 = [points[1][0] - points[2][0], points[1][1] - points[2][1] ]
  let ratio2 = diff2[1] / diff2[0]
  // console.log('diff1', diff1)
  // console.log('diff2', diff2)

  let a = points[0]
  let b = points[1]
  let c = points[2]

  if(a[0] === b[0] && a[1] === b[1]) {
    // console.log('a')
    return false
  }
  if(a[0] === c[0] && a[1] === c[1]) {
    // console.log('b')
    return false
  }
  if(b[0] === c[0] && b[1] === c[1]) {
    // console.log('c')
    return false
  }

  if(diff1[0] === diff2[0] && diff1[1] === diff2[1]) {
    // console.log('d')
    return false
  }
  if(a[0] === b[0] && a[0] === c[0]) return false
  if(a[1] === b[1] && a[1] === c[1]) return false
  if(ratio1 === ratio2) {
    return false
  }

  return true
   
};