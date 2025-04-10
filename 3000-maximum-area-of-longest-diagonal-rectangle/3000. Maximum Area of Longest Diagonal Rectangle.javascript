/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
  // diag  = Math.sqrt(a **2 + b **2)
  // area = a * b


  let maxdiag
  let maxarea
  for(let d of dimensions) {
    let [l, w] = d

    let diag = Math.sqrt(l**2 + w**2)
    let area = l * w
    if(maxdiag === undefined) {
      maxdiag = diag
      maxarea = area
    } else if(maxdiag === diag) {
      if(area > maxarea) {
        maxarea = area
      }
    } else if(diag > maxdiag) {
      maxdiag = diag
      maxarea = area
    }
  }
  return maxarea
};