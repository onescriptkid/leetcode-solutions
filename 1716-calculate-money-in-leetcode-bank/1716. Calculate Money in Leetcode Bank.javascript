/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  // m           s m
  // 1 2 3 4 5 6 7 2  
  // 0

  // 
  let prevmon = 0; 
  let week = 0;
  let out = 0
  for(let i = 0; i < n; i++) {
    // let mon === i % 7 === 0
    // mon
    if(i % 7 === 0) {
      week++
    }
    let amount = week + i % 7

    out+=amount
    // if(amount) {
    // }

  }
  return out
};