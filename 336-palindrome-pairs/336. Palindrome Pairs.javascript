/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {

  let map = {}
  let out = []
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    map[word] = i 
  }

  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let bw = word.split('').reverse().join('')

    if(word === '') {
      for(let j = 0; j < words.length; j++) {
        if(isPal(words[j]) && j !== i) {
          out.push([i,j], [j,i])
        }
      }
      continue
    }

    let res = map[bw]
    if(res !== undefined && res !== i) {
      out.push([i, res])
    }

    // word     bw
    // sssll -> llsss
    for(let j = 1; j < bw.length; j++) {
      if(isPal(bw.slice(0, j))) {
        let res = map[bw.slice(j)]
        if(res !== undefined) out.push([i, res])
      }
      if(isPal(bw.slice(j))) {
        let res = map[bw.slice(0,j)]
        if(res !== undefined) out.push([res,i])
      }
    }
  }

  function isPal(str) {
    let l = 0
    let r = str.length - 1
    while(l < r) {
      if(str[l] !== str[r]) return false
      l++
      r--
    }
    return true
  }
  // console.log(out)

  return out

};


