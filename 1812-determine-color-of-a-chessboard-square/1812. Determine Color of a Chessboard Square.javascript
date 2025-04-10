/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
  let [char, numstr] = coordinates.split('') 

  let alphabet = 'abcdefgh'
  let letters = {}
  for(let i = 0; i < alphabet.length; i++) {
    letters[alphabet[i]] = i
  }
  let letterval = letters[char]

  let num = 8 - Number(numstr)
  // 1 0 1
  // 0 1 0
  // 1 0 1
  // 0 1 0 
  // console.log('letterval', letterval, 'num', num )


  let sum = letterval + num //
  if(sum % 2 === 0) {
    return true
  }

  return false




};