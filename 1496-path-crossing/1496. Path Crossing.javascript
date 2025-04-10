/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {

  let past = new Set(['0,0'])

  let x = 0
  let y = 0
  for(let i = 0; i < path.length; i++) {
    let dir = path[i]
    if(dir === 'N') {
      y++
    } else if(dir === 'E') {
      x++
    } else if(dir === 'S') {
      y--
    } else if(dir === 'W') {
      x--
    }
    // console.log(x, y, dir, past)
    let next = `${x},${y}`
    if(past.has(next)) {
      return true
    }
    past.add(next)
  }
  return false
};