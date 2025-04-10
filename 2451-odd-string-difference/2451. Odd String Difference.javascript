/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {

  let diffarrays = []
  let counts = {}
  let obj = {}

  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let diffarray = []
    for(let j = 1; j < word.length; j++) {
      let p = word[j-1]
      let c = word[j]
      let pval = p.charCodeAt(0)
      let cval = c.charCodeAt(0)
      let diff = cval - pval
      diffarray.push(diff)
    }
    diffarrays.push(diffarray)
    let key = diffarray.join(',')
    obj[key] = i
    if(counts[key] === undefined) {
      counts[key] = 1
    } else {
      counts[key]++
    }
  }   

  let keys = Object.keys(counts)

  for(let key of keys) {
    let count = counts[key]
    if(count === 1) return words[obj[key]]
  }

};