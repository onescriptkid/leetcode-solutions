/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {

  // aaabbbaaa => 1
  // aaabbaaaa => 2

  function isPalindrome(str) {
    //   x
    // 01234   5 = 2
    // 0123    4 = 2
    // abcde
    for(let i = 0; i < str.length >> 1; i++) {
      let left = str[i]
      let right = str[str.length - 1 - i]
      if(left !== right) {
        return false
      }
    }
    return true
  } 
  if(isPalindrome(s)) {
    return 1
  }
  return 2
};