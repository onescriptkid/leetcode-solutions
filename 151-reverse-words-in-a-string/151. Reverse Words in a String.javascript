/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let words = []

  // "  hello world  "
  //  i
  let word = ''
  for(let i = 0; i < s.length; i++) {

    let c = s[i]

    if(c === ' ') {
      if(word.length > 0) {
        words.push(word)
        word = ''
      }
    } else {
      word+=c
    }
  }

  if(word.length > 0) {
    words.push(word)
  }

  let l = 0
  let r = words.length -1
  while(l < r) {
    let tmp = words[l]
    words[l] = words[r]
    words[r] = tmp
    l++
    r--
  }   
  return words.join(' ')
};