/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let alpha = {}
  for(let i = 0; i < letters.length; i++) {
    let c = letters[i]
    alpha[c] = i
  }

  // distance = [1, 3, 0 ,5]
  // actual   = []
  // first    = {}
  // abaccb
  // 012
  let first = {}
  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(first[c] === undefined) {
      first[c] = i
    } else {
      let dist = i - first[c] - 1
      if(dist !== distance[alpha[c]]) {
        // console.log('actual', dist, 'expected', distance[alpha[c]])
        return false
      }
    }
  }

  return true
};