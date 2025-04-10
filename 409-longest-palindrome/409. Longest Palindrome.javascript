/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // abccccdd
  // longest odd + all the evens + (all the odds - 1)


  let chars = {}
  let longestOddChar
  let longestOdd
  for(let c of s) {
    chars[c] = (chars[c] || 0) + 1
  }

  let sum = 0
  let hasOdd = false
  for(let char of Object.keys(chars)) {
    let count = chars[char]
    if(count % 2 === 0) {
      sum+=count
    } else {
      hasOdd = true
      sum+=(count - 1)
    }
  }
  if(hasOdd) sum+=1

  return sum

};