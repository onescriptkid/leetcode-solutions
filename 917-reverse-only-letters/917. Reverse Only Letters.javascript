/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    
  // Test1ng-Leet-code-Q!
  // i                  j
  let arr = s.split('')
  let l = 0
  let r = s.length - 1
  let alphabet = new Set('abcdefghijklkmnopqrstuvwxyz'+'abcdefghijklkmnopqrstuvwxyz'.toUpperCase())
  while(l < r) {
    // console.log('l r', l, r, 'arr', arr.join(''))
    let left 
    while(l < r && !alphabet.has(arr[l])) {
      l++
    }

    while(l < r && !alphabet.has(arr[r])) {
      r--
    }

    if(l < r) {
      let tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp 
    }
    l++
    r--
  }
  return arr.join('')
};