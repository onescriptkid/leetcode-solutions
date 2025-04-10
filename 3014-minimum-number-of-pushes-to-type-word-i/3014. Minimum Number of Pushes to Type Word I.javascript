/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

  // abcdefgh ijklmnop   qrstuvwx yz
  // 23456789 23456789   23456789 23
  // 12345678 9-------16 
  if(word.length <= 8) {
    return word.length
  }
  if(word.length > 8 && word.length <= 16) {
    return 8 + 2 * (word.length - 8)
  }
  if(word.length > 16 && word.length <= 24) {
    return 8 + 16 + 3 *(word.length - 16)
  }
  if(word.length > 24) {
    return 8 + 16 + 24 + 4 * (word.length - 24)
  }
};