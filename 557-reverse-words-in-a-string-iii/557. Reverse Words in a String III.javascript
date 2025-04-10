/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {


  function reverse(str) {
    str = str.split('')
    // console.log(str)
    for(let i = 0; i < (str.length >> 1); i++) {
      // console.log(' ', str)
      let c = str[str.length - 1 - i]
      str[str.length - 1 - i] = str[i]
      str[i] = c
    }
    return str.join('')
  } 

  let words = s.split(' ')
  let out = []
  for(let word of words) {

    let rev = reverse(word)
    out.push(rev)
  }
  return out.join(' ')
};