/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  // 5 101
  // 2 010
  // let str = num.toString(2)
  let str = ""
  while(num > 0) {
    let digit = num & 1
    let flip = digit === 1 ? 0 : 1
    str = flip + str
    num = num >> 1
  }
  let out = parseInt(str, 2)

  // 101
  //   
  // let out = 0
  // let str = ""
  // while(num > 0) {
  //   let digit = num & 1
  //   let next;
  //   if(digit === 1) {
  //     next = 0
  //   } else {
  //     next = 1
  //   }
  //   str+=next
  //   num = num >> 1
  // }
  // console.log(str)
  return out

};