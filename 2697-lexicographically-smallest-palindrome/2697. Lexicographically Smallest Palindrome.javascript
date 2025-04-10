/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {

  let i = 0
  let j = s.length - 1

  let str = ""
  // egcfe
  // i   j
  let arr = new Array()
  while(i <= j) {
    if(s[i] === s[j]) {
      arr[i] = s[i]
      arr[j] = s[j]
    } else {
      if (s[i] < s[j]) {
        arr[i] = s[i]
        arr[j] = s[i]
      } else {
        arr[i] = s[j]
        arr[j] = s[j]
      }
    }
    i++
    j--
  }

  return arr.join('')


    
};