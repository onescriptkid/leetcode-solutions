/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {

  let tokens = []   

  let token = ''
  for(let i = 0; i < sentence.length; i++) {
    let c = sentence[i]

    if(c === ' ') {
      if(token.length === 0) continue
      tokens.push(token)
      token = ''
    } else {
      token+=c
    }
  }
  if(token.length !== 0) {
    tokens.push(token)
  }
  console.log(tokens)

  let count = 0
  for(let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if(isValid(token)) {
      count++
    }
  }
  function isValid(token) {
    let lower = new Set('abcdefghijklmnopqrstuvwxyz'.split(''))
    let digits = new Set('0123456789'.split(''))
    let hyphencount = 0

    for(let i =0; i < token.length; i++) {

      let c = token[i]
      // punctuation
      if(c === '!' || c === '.' || c === ',') {
        if(i !== token.length - 1) {
          // console.log('p')
          return false
        }
      }

      // hypen
      if(c === '-') {
        if(hyphencount > 0) return false
        hyphencount++
        if(i === 0 || i === token.length - 1) {
        // console.log('h1')
          return false
        }
        let prev = token[i-1]
        let next = token[i+1]
        if(!lower.has(prev) || !lower.has(next)) {
        // console.log('h2')
          return false
        }
      }

      // digits
      if(digits.has(c)) {
        // console.log('d')
        return false
      } 
    }
    return true
  }


  return count
};