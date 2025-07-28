/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {

  // 5 =   101
  //   =   010   = 2

  //       111  7 => 2**x - 1
  //       101

  let tmp = 2
  while(tmp <= n) {
    tmp = tmp * 2
  }

  return tmp- 1 - n

};