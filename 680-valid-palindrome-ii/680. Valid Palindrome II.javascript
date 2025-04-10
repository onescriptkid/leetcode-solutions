/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

  function isPalindrome(l, r) {
    while(l < r) {
      if(s[l] !== s[r]) return [l, r]
      l++
      r--
    }
    return true
  }

  let first = isPalindrome(0, s.length - 1)
  if(first === true) return true

  let [l, r] = first

  if(isPalindrome(l+1, r) === true) return true
  if(isPalindrome(l, r-1) === true) return true

  // if(isPalindrome(0, s))
  // let l = 0
  // let r = s.length - 1
  // xayyyx
  //  l  r
  // xayyyx
  //  l r
  // xayyyx
  //   l r

  // while(l )
  // for(let i = 0; i < s.length; i++) {
  //   let test = s.substring(0, i) + s.substring(i+1)
  //   if(isPalindrome(test)) {
  //     return true
  //   }
  // }
  return false
    
};