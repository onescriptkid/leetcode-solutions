/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {

   // [0,0], [1,0], [1,0], [2,1], [2,1], [2,0]
   // 0      1       2      3      4     5
   // l      l       l      
  //  {
  //   0: {
  //     1: 7,
  //     2: 7,
  //   }
  //  }
  let counts = {}
  for (let i = 0; i < pick.length; i++) {
    let [player, color] = pick[i]
    if (counts[player] === undefined) {
      counts[player] = { [color]: 1 }
    } else if (counts[player][color] === undefined) {
      counts[player][color] = 1
    } else {
      counts[player][color]++
    }
  }
  // console.log(counts)
  let winners = 0
  let players = Object.keys(counts)
  for(let player of players) {
    let colorMap = counts[player]

    let colors = Object.keys(colorMap)
    for(let color of colors) {
      let count = colorMap[color]
      // console.log('color', color, count,  player)
      if(count > player) {
        winners++
        break;
      }
    }
  }
  return winners
};