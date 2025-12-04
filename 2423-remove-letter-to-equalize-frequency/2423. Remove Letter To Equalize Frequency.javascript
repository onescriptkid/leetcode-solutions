/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {

  let freq = {}
  for(let c of word) {
    freq[c] = (freq[c] || 0) + 1
  }

  let letters = 'abcdefghijklmnopqrstuvwxyz'
  for(let c of letters) {
    if(freq[c] === undefined) continue
    freq[c]-- 
    let min
    for (let c of Object.keys(freq)) {
      if (min === undefined && freq[c] !== 0) {
        min = freq[c]
      } else if (freq[c] < min && freq[c] !== 0) {
        min = freq[c]
      }
    }
    let removeLetter = true
    for (let c of Object.keys(freq)) {
      if(freq[c] !== min && freq[c] !== 0) {
        // console.log('freq', freq, 'c', c, 'freq[c]', freq[c], 'min', min)
        removeLetter = false
        break;
      }
    }
    if(removeLetter) return true
    freq[c]++
  }
  return false

};
