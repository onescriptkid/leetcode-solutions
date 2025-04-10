/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {

  let obj = {}
  for (let i = 0; i < rings.length; i+=2) {
    let color = rings[i]
    let index = rings[i+1]
    if(obj[index] === undefined) {
      obj[index] = new Set(color)
    } else {
      obj[index].add(color)
    }
  } 

  let rods = Object.keys(obj)
  let count = 0
  for(let rod of rods) {
    let colors = obj[rod]
    if(colors.size === 3) {
      count++
    }
  }
  // console.log(obj)
  return count
};