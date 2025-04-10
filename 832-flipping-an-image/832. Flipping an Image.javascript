/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

  // 1 1 0
  // 1 0 1
  // 0 0 0
  let rows = image.length
  let cols = image[0].length
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols >> 1; c++) {
      let tmp = image[r][c]
      image[r][c] = image[r][cols - 1 - c]
      image[r][cols -1 -c] = tmp
    }
  }
  // console.log('image', image)

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(image[r][c] === 0) {
        image[r][c] = 1
      } else {
        image[r][c] = 0
      }
    }
  }
  return image

};