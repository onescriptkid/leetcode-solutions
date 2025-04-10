/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let first = 'abcdefghi'
  let second = 'jklmnopqrstuvwxyz'

  let map = {}
  for(let i = 0; i < first.length; i++) {
    map[i+1] = alphabet[i]
  }

  for(let j = 0; j < second.length; j++) {
    let key = `${j+10}#`
    map[key] = alphabet[j+9]
  }
  console.log('map',map)

  let i = 0
  let out = ""
  while(i < s.length) {
    let opt1 = s.substring(i,i+1)
    let opt2 = s.substring(i,i+3)
    // console.log('i', i, 'opt1', opt1, 'opt2', opt2, 'out', out)
    if(map[opt2] !== undefined) {
      out+=map[opt2]
      i+=3
    } else {
      out+=map[opt1]
      i+=1
    }
  }
  return out
};