/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

  // 0 1 0 2 1 0 1 3 2 1 2 1
  
  // 0 1 1 2 2 2 2 3 3 3 3 3
  // 3 3 3 3 3 3 3 3 2 1 2 1

  let maxlefts = []
  let maxleft = 0
  for(let h of height) {
    maxleft = Math.max(h, maxleft)
    maxlefts.push(maxleft)
  }

  let maxrights = new Array(height.length)
  let maxright = 0
  for(let i = height.length - 1; i>= 0; i--) {
    maxright = Math.max(height[i], maxright)
    maxrights[i] = maxright
  }
  let sum = 0
  // console.log(maxlefts)
  // console.log(maxrights)
  for(let i = 0; i < height.length; i++) {
    let min = Math.min(maxlefts[i], maxrights[i])

    let diff = min - height[i]
    // console.log('height', height[i], maxlefts[i], maxrights[i], 'diff', diff, 'mim', min)
    sum+=diff

  }
  return sum 


};