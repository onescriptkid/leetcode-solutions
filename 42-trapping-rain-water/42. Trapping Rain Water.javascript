/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  // 0 1 0 2 1 0 1 3 2 1 2 1
  // 0 0 1 1 2 2 2 2 3 3 3 3
  // 3 3 3 3 3 3 3 2 2 2 1 0

  let ltor = []
  let maxl = 0
  for(let h of height) {
    ltor.push(maxl)
    maxl = Math.max(maxl, h)
  }

  let rtol = new Array(height.length).fill(0)
  let maxr = 0
  for(let i = height.length -1; i >= 0; i--) {
    rtol[i] = maxr
    maxr = Math.max(maxr, height[i])
  }

  // console.log(ltor)
  // console.log(rtol)

  let count = 0
  for(let i = 0; i < height.length; i++) {
    let h = height[i]
    let l = ltor[i]
    let r = rtol[i]
    let min = Math.min(l, r)

    if(h < min) {
      count+=(min-h)
    }
  }
  return count


};