/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {

  //   1299
  //     34

  let i = num.length - 1
  let carry = 0 
  let out = []
  while(i >= 0 || k > 0) {
    let dn = num[i] || 0
    let dk = k % 10

    let curr = (dn + dk + carry) % 10
    if((dn + dk + carry) >= 10 ) {
      carry = 1
    } else {
      carry = 0
    }

    // num[i] = curr
    out.push(curr)

    i--
    k =Math.floor(k / 10)
  }

  if(carry) {
    out.push(1)
  }
  return out.reverse()

};