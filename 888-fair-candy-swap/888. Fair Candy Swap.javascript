/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  // [1 1]  2  
  // [2,2]  4  => 6
  // +1
  // -1
  // at - ac + bc = total / 2
  // bt - bc + ac = total / 2
  // asum 


  // 1 2     3
  // 2 3     5 => 8
  //         

  let asum = 0
  let amap = new Map()
  aliceSizes.forEach((v,k) => {
    amap.set(v, k)
    asum+=v
  })

  let bsum = 0
  bobSizes.forEach(v => bsum+=v)

  let diff = asum - bsum
  let half = diff / 2

  for(let i = 0; i < bobSizes.length; i++) {
    let val = bobSizes[i]
    let lookfor = val + half
    if(amap.has(lookfor)) {
      return [lookfor, val]
    }
  }



};