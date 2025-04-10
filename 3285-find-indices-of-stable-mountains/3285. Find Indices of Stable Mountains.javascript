/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {

  let stable = []
  for(let i = 1; i < height.length; i++) {
    let mountain = height[i]
    let before = height[i-1]
    if(before > threshold) {
      stable.push(i)
    }
  }
  return stable
};