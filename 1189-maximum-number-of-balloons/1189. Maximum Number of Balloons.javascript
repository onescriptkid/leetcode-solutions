/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

  // balloon {b:1, a:1, l:2, o:2, n:1}
  let balloon = {b:1, a:1, l:2, o:2, n:1}

  let freq = {}
  for(let c of text) {
    freq[c] = (freq[c] || 0) + 1
  }
  let b = 0
  let keys = Object.keys(balloon) 
  while(true) {
    // console.log('f', freq)

    for(let key of keys) {
      let count = balloon[key]
      // console.log('  key', key, 'freq[key]', freq[key], 'count', count)

      if(freq[key] === undefined) {
        return b
      }
      if((freq[key] - count) < 0 ) {
        return b
      }
      freq[key]-=count
    }

    b++
  }


};