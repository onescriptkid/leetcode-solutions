/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  // 0 1 2 3 4 5 
  // a b b c c d
  // e e e f g g
  // h i i i j j
  // k k l l l l
  // m m m n o o
  // p q q q r s
  //    
  //0 1 2 3 4 5 6


  // a a
  // b b
  // c c

  let length = 0
  wall[0].forEach(v => length+=v)
  let map = {}
  // for(let i = 1; i < length; i++) {

  //   map[i] = wall.length
  // }
  // console.log('map', map)
  // console.log('length', length)

  for(let row of wall) {

    let edge = 0
    for(let brick of row) {
      edge+=brick
      if(map[edge] === undefined) {
        map[edge] = wall.length
      }
      map[edge] = map[edge] - 1
    }
  }


  let min = wall.length
  // console.log('min', min)
  for(let key of Object.keys(map)) {
    let inc = map[key]
    if(inc < min && Number(key) !== length) {
      min = inc
    }
  }
  return min

  // a
  // a
  // a
};