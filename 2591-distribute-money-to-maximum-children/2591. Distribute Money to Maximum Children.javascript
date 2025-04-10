/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
  if (money < children) return -1

  if (children * 8 === money) {
    return children
  }  

  if(children * 8 > money) {
    let max = Math.floor(money / 8)
    if( (money - (max * 8)) === 4 ) {
      if(max === 0) return 0
      return max - 1
    } else {
      return max
    }
  }

  if(children * 8 < money) {
    return children - 1
  }


};