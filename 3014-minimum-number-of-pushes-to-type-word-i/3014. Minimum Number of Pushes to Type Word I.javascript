/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
  // 01234567
  // abcdefgh ijklmnop qrstuvwx yz
  // 23456789 23456789 23456789

  if(word.length <= 8) {
    return word.length
  } else if(word.length > 8 && word.length <=16) {
    return 8 + (word.length - 8) * 2
  } else if(word.length > 16 && word.length <= 24) {
    return 8 + 2 * 8 + (word.length - 16) * 3
  } else if(word.length > 24) {
    return 8 + 2 * 8 + 3 * 8 + (word.length - 24) * 4
  }
};