/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {


  let maxl = 0;
  let maxr = 0;
  let ltor = [] 
  let rtol = []

  for(let i = 0; i < height.length; i++) {
    let l = height[i]
    let r = height[height.length - 1 - i]
    ltor[i] = maxl 
    rtol[height.length - 1 - i] = maxr

    if(maxl === undefined) {
      maxl = l
    } else if(maxl < l) {
      maxl = l
    }

    if(maxr === undefined) {
      maxr = r
    } else if(maxr < r) {
      maxr = r
    }
  }

  console.log(ltor)
  console.log(rtol)

  let total = 0
  for(let i = 0; i < height.length; i++) {
    let h = height[i]
    let l = ltor[i]
    let r = rtol[i]
    let trap = Math.min(l, r) - h
    if(trap > 0) {
      total+=trap
    }
  }
  return total

};