/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
  let sec = 0
  while(amount[0] > 0 || amount[1] > 0 || amount[2] > 0)  {
    if(amount[0] === 0 && amount[1] === 0) {
      amount[2]--
    } else if(amount[1] === 0 && amount[2] === 0) {
      amount[0]--
    } else if(amount[2] === 0 && amount[0] === 0) {
      amount[1]--
    } else {
      if(amount[0] >= amount[2] && amount[1] >= amount[2]) {
        amount[0]--
        amount[1]--
      } else if(amount[0] >= amount[1] && amount[2] >= amount[1]) {
        amount[0]--
        amount[2]--
      } else if(amount[1] >= amount[0] && amount[2] >= amount[0]) {
        amount[1]--
        amount[2]--
      }
    }


    sec++
  }  
  return sec
};