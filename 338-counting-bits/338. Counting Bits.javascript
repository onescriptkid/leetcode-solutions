/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  // function getBits(num) {

  //   let bits = 0
  //   while(num > 0) {
  //     let bit = num % 2
  //     if(bit === 1) bits++
  //     num = Math.floor(num / 2)
  //   }
  //   return bits
  // }
  // let out = []
  // for(let i = 0; i <= n; i++) {

  //   out.push(getBits(i))
  // }
  let res = new Array(n+1).fill(0)
  for(let i = 0; i < res.length; i++) {
    let next =  res[i >> 1] + (i & 1)
    // console.log('i', i, 'next', next, 'res[i >>1]', res[i >> 1], 'i & 1', i & 1)
    // res[4] = res[2] + 100 & 1
    res[i] = next
  }
  return res


  // return out
};