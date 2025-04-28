/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
  if(n === 0) return 1

   // 5 => 101
   // 2 => 010` 

  let tmp = 2
  while(tmp <= n) {
    tmp = tmp << 1
  }

  return tmp - n -1
};