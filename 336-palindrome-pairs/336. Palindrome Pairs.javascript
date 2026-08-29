/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {

  let map = new Map()
  for(let i = 0; i < words.length; i++) {
    map.set(words[i], i)
  }   

  let out = []
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let bw = word.split('').reverse().join('')

    if(word === '') {
      for(let j = 0; j < words.length; j++) {
        if(isPal(words[j]) && i !== j) {
          out.push([i, j])
          out.push([j, i])
        }
      }
    }

    let res = map.get(bw)
    if(res !== undefined && res !== i) out.push([i, res])

    for(let j = 1; j < bw.length; j++) {
      let pre = bw.slice(0, j)
      let suf = bw.slice(j)

      if(isPal(pre) && map.has(suf)) {
        out.push([i, map.get(suf)])
      }
      if(isPal(suf) && map.has(pre)) {
        out.push([map.get(pre), i])
      }
    }
  }

  return out

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
};