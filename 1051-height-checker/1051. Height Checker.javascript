/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let orig = heights.slice()

  heights.sort((a,b) => a > b ? 1 : -1)

  let count = 0
  // console.log('orig', orig)
  // console.log('heig', heights)
  for(let i = 0; i < heights.length;i++) {
    if(orig[i] !== heights[i]) count++
  }
  return count

};