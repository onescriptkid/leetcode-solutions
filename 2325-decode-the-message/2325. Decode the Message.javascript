/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  // happy boy
  // 0123
  // i

  let sub = {}
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let j = 0
  for(let i = 0; i < key.length; i++) {
    if(key[i] === ' ') continue
    if(sub[key[i]] !== undefined) continue

    sub[key[i]] = alphabet[j]
    j++
  } 
  // console.log(sub)

  let out = ""
  for(let c of message) {
    if(c === ' ') {
      out+=' '
      continue
    }
    let letter = sub[c]
    // console.log('c', c, 'letter', letter,)
    out+=letter
  }
  return out
};