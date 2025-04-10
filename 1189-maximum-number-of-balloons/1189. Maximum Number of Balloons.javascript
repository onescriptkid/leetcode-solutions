/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let bchars = {}
  for(let i = 0; i < text.length; i++) {
    let c = text[i]
    if(bchars[c] === undefined) {
      bchars[c] = 1
    } else {
      bchars[c]++
    }
  }  

  let out = 0

  // b a ll oo n s
  console.log(bchars)
  while(true) {
    if(bchars['b'] > 0 && bchars['a'] > 0 && bchars['l'] > 1 && bchars['o'] > 1 && bchars['n'] > 0) {
      bchars['b']--
      bchars['a']--
      bchars['l'] = bchars['l'] - 2
      bchars['o'] = bchars['o'] - 2
      bchars['n']--
      out++
    } else {
      break
    }
  }
  return out
};