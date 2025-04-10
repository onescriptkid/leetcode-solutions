/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {

  let turn = "Alice"
  let winner = "Bob"

  // x = 2 (10)
  // y = 7 (75)
  // 115 = 75 + 40

  while(x >= 1 && y >= 4) {
    if(turn === "Alice") {
      turn = "Bob"
      winner = "Alice"
    } else {
      turn = "Alice"
      winner = "Bob"
    }
    x=x-1
    y=y-4
  }
  return winner
};