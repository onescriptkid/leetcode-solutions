/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {

  let size = 1
  let complete = 0
  while(n > 0) {
    // let tryrow = n - size
    // if(tryrow < 0) {
    //   break;
    // }
    size++
    n = n - size
  } 
  // 1 x
  // 2 xx
  // 3 xxx
  return size - 1
};