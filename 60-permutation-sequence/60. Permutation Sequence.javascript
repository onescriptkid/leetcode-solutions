/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  

  // Create Factorial function
  let memo = new Array(10).fill(undefined) // 0 1 2 3 4
  function fac(num) {
    if(num === 0 || num === 1) return 1
    if(memo[num] !== undefined) return memo[num]

    return memo[num] = num * fac(num-1)
  }

  // Create an array of the possible digits
  // 0 1 2 3
  // 1,2,3,4
  let digits = new Array(n).fill(0).map((v,k) => k+1)
  // console.log(digits)

  // Loop backwards starting from n (n=4)
  let out = ''
  for(let i = n; i > 0; i--) {

    // Determine the index of the digits [1,2,3,4] by dividing the pos by fac-1
    let idx = Math.ceil(k / fac(i-1))  // i=4, index=(9/3) => 3
    let digit = digits[idx-1]  // idx=3 so digits[3] => 4

    // Push digit onto array
    out+=digit    // '' +=4 => '4'

    // Remove the index from the array
    digits.splice(idx-1, 1)

    // Update the current k
    k -= (fac(i-1) * (idx-1)) // k=9,  9-fac(4-1)*(4-1) => 9-fac(3) * 3
    // console.log('idx', idx, 'digit', digit, 'out', out, 'k', k, '-', digits)
  }

  // digits [ 1, 2, 3, 4 ]
  // idx 2 digit 2 out 2 k 3 - [ 1, 3, 4 ]
  // idx 2 digit 3 out 23 k 1 - [ 1, 4 ]
  // idx 1 digit 1 out 231 k 1 - [ 4 ]
  // idx 1 digit 4 out 2314 k 1 - []

  return out



  // 4*3*2*1 => 24
  // 1234
  // 1243
  // 1324
  // 1342
  // 1423
  // 1432

  // 2134
  // 2143
  // 2314
  // 2341
  // 2413
  // 2431

  // 3124
  // 3142
  // 3214
  // 3241
  // 3412
  // 3421

  // 4123
  // 4132
  // 4213
  // 4231
  // 4312
  // 4321

  // let out = []
  // let used = new Set()
  // // let letters = '1234
  // function bt(arr) {
  //   if(arr.length === 4) {
  //     out.push(arr.join(''))
  //     return
  //   }
  //   for(let i = 1; i <= 4;i++) {
  //     if(used.has(i)) continue
  //     used.add(i)
  //     arr.push(i)
  //     bt(arr)
  //     used.delete(i)
  //     arr.pop()
  //   }
  // }
  // bt([])

  // used.sort()
};