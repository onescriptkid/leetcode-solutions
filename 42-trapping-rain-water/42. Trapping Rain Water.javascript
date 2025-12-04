/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 0 1 2 3 4 5 6 7 8 9 0 1

  // 0 1 0 2 1 0 1 3 2 1 2 1

  // 0 0 1 1 2 2 2 2 3 3 3 3
  // 3 3 3 3 3 3 3 2 2 2 1 0


  let ltor = []
  let left = 0
  for(let i = 0; i < height.length; i++) {
    ltor.push(left)
    left = Math.max(left, height[i])
  }

  let rtol = []
  let right = 0
  for(let i = height.length-1; i >= 0; i--) {
    rtol[i] = right 
    right = Math.max(right, height[i])
  }

  // console.log(ltor)
  // console.log(rtol)


  let out = 0
  for(let i = 0; i < height.length; i++) {
    let l = ltor[i]
    let r = rtol[i]
    let min = Math.min(l, r)
    let diff = min - height[i]
    // console.log('min', min, 'diff', diff, '-', out)
    if(diff > 0) {
      out+=diff
    }
  }
  return out
};