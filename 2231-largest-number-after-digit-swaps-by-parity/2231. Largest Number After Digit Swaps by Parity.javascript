/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {

  // 1234    3412

  // e e
  // 65875   
  //  i
  // j
  // k
  // let arr = []
  // let tmp = num
  // while(tmp > 0) {
  //   let digit = num % 10
  //   arr.push(digit)
  //   num = Math.floor(num / 10)
  // }

  // // let

  // for(let i = 0; i < )


  // let num = `${num}`.split('')

  let odds = []
  let evens = []
  let arr = []
  let i = 0
  let tmp = num
  while(tmp > 0) {
    let digit = tmp % 10
    if(digit % 2 === 0) {
      evens.push(digit)
    } else {
      odds.push(digit)
    }
    arr.unshift(digit)
    tmp = Math.floor(tmp / 10)
  }

  odds.sort((a,b) => a > b ? -1 : 1)
  evens.sort((a,b) => a > b ? -1 : 1)
  // console.log('odds', odds)
  // console.log('evens', evens)
  // console.log('arr', arr)

  let out = []
  let j = 0, k = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      out.push(evens[j])
      j++
    } else {
      out.push(odds[k])
      k++
    }
  }
  // console.log('out', out)

  let outnum = 0
  for(let i = 0; i < out.length; i++) {
    outnum = outnum * 10 + out[i]
  }
  return outnum


};