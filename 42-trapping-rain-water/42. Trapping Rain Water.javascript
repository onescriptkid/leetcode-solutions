/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  //      0 1 0 2 1 0 1 3 2 1 2 1   
  // ltor 0 0 1 1 2 2 2 2 3 3 3 3
  // rtol 3 3 3 3 3 3 3 2 2 2 1 0

  // min  0 0 1 1 2 2 2 2 2 2 1 0 

  let ltor = []
  let lmax = 0
  for(let h of height) {
    ltor.push(lmax)
    lmax = Math.max(lmax, h)
  }

  let rtol = []
  let rmax = 0
  for(let i = height.length - 1; i >= 0; i--) {
    let h = height[i]
    rtol[i] = rmax
    rmax = Math.max(rmax, h)
  }

  let out = 0
  for(let i = 0; i < height.length; i++) {
    let left = ltor[i]
    let right = rtol[i]
    let min = Math.min(right,left)
    let diff = min - height[i]
    if(diff > 0) out+=diff
  }
  return out
};