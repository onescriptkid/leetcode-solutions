/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  function isPalindrome(word) {
    for(let i = 0; i < word.length>> 1; i++) {
      let l = word[i]
      let c = word[word.length - 1 -i]
      if(l !== c) {
        return false
      }
    }
    return true
  }

   for(const word of words) {
    if(isPalindrome(word)) {
      return word
    }
   } 
   return ""
};