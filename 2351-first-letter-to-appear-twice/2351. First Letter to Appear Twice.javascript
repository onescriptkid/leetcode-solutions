/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {

  let counts = {}

  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    if(counts[c] === undefined) {
      counts[c] = 1
    } else {
      return c
    }
  }
};