/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  
  let out = words[0].split('')

  let countsarr = []
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let counts = {}
    for(let j = 0; j < word.length; j++) {
      let c = word[j]
      if(counts[c] === undefined) {
        counts[c] = 1
      } else {
        counts[c]++
      }
    }
    countsarr.push(counts)
  }

  // bella
  // {r: 2, o: 1, l:2, e: 1}
  for(let i = 0; i < words.length; i++) {
    // console.log('out', out)
    // let word = words[i]
    let counts = countsarr[i]
    let next = []
    for(let j = 0; j < out.length; j++) {
      let c = out[j]
      if(counts[c] !== undefined && counts[c] !== 0) {
        counts[c]--
        next.push(c)
      }
    } 
    out = next
  }
  return out
};