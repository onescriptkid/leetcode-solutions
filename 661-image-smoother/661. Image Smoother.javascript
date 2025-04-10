/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {

  let res = new Array(img.length).fill(0).map(v => {
    return new Array(img[0].length)
  })
  // console.log(res)

  function getVal(i, j) {
    if(img[i] === undefined) {
      return undefined
    }
    if(img[i][j] === undefined) {
      return undefined
    }
    return img[i][j]
  }

  for(let i = 0; i < img.length; i++) {
    for(let j = 0; j < img[i].length; j++) {
      let arr = []
      arr.push(getVal(i-1, j-1))
      arr.push(getVal(i-1, j))
      arr.push(getVal(i-1, j+1))
      arr.push(getVal(i, j-1))
      arr.push(getVal(i, j))
      arr.push(getVal(i, j+1))
      arr.push(getVal(i + 1, j-1))
      arr.push(getVal(i + 1, j))
      arr.push(getVal(i + 1, j+1))

      arr = arr.filter(v => v !== undefined)
      // console.log(i, j, arr)
      let sum = 0
      arr.forEach(v => sum+=v)

      res[i][j] = Math.floor(sum / arr.length)
    }
  }
  // console.log(res)
  return res
};