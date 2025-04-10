/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let hasCh = word.indexOf(ch)
  // console.log(hasCh)

  if(hasCh === -1) {
    return word
  }

  let out = ""
  for(let i = hasCh; i >= 0; i--) {
    let c = word[i]
    out = out + c
  }
  // console.log(out)

  for(let i = hasCh + 1; i < word.length; i++) {
    out+= word[i]
  }
  return out
};