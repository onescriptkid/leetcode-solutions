/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  // egcfe   // 
  //  i j

  let a = s.split('')
  let l = 0
  let r = s.length - 1
  while(l < r) {
    if(a[l] !== a[r]) {
      if(a[l] < a[r]) {
        a[r] = a[l]
      } else {
        a[l] = a[r]
      }
    } else {
      l++
      r--
    }
  }

  return a.join('')


    
};