/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    letters[alphabet[i]] = i
  }

  let kv = {}
  let total = 0
  for(let word of words) {
    let arr = new Array(26).fill(0)
    for(let c of word) {
      let val = letters[c]
      arr[val] = 1
    }
    let key = arr.join(',')
    // console.log('word', word, 'key', key)
    if(kv[key] === undefined) {
      kv[key] = 1
    } else {
      total+=kv[key]
      kv[key]++
    }
  }
  return total

};