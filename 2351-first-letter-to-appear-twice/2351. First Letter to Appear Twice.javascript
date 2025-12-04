/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  let set = new Set()
  for(let c of s) {
    if(set.has(c)) return c

    set.add(c)
  }   
};