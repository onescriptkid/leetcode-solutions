/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

  // let out2 = 0
  // for(let i = 1; i < heights.length; i++) {
  //   let h = heights[i]
  //   let p = heights[i-1]
  //   if(p > h) {
  //     out2++
  //   }
  // }
  // return out2

  let orig = heights.map(v => v)
  heights.sort((a,b) => {
    if(a > b) {
      return 1
    } else {
      return -1
    }
  })

  let out = 0
  for(let i = 0; i < orig.length; i++) {
    let ho = orig[i]
    let hs = heights[i]

    if(ho !== hs) {
      out++
    }
  }


  
  return out
};