/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  
  let sfreq = {}
  for(let c of s) {
    sfreq[c] = (sfreq[c] || 0) + 1
  }

  let count = 0
  // console.log(sfreq)
  while(true) {

    let loop = true
    for(let i = 0; i < target.length; i++) {
      let c = target[i]
      // console.log('c', c, sfreq[c])
      if(sfreq[c] === undefined) {
        loop = false
        break;
      } else if(sfreq[c] === 0) {
        loop = false
        break;
      }
      sfreq[c]--
    }

    if(loop === false) {
      break;
    }
    count++

  }
  return count
};