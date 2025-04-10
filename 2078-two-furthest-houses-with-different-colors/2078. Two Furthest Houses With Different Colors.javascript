/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {


  // 6 6 6 6 1 1 6 6 6 6 6
  // l---------x 
  ///        y-----------r
  // Either l to r, l to x, r to y       
  let left = colors[0]
  let right = colors[colors.length - 1]

  let xi
  let yi
  let x
  let y
  for(let i = 0; i < colors.length; i++) {
    let color = colors[i]
    if(color !== left) {
      x = color
      xi = i
    }
    if(color !== right && y === undefined) {
      // console.log('y', y, 'yi', yi)
      y = color
      yi = i
    }
  }

  let l = 0
  let r = colors.length- 1
  if(left !== right) {
    console.log('r - l')
    return r - l
  }
  let opt1 = xi - l
  let opt2 = r - yi
  // console.log('opt1', opt1, 'opt2', opt2)
  return Math.max(opt1, opt2)


};