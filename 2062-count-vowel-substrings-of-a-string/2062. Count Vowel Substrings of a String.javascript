/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {

  let vowels = new Set('aeiou'.split(''))
  let freqv = {}
  for(let v of vowels) {
    freqv[v] =(freqv[v] || 0)
  }

  let total = 0

  let count = 0
  let l = 0
  let r = 0
  // cuaieuouac
  //  r
  // l
  
  // 0123456
  // cuaieuouac
  //  r
  // l
  // function reset() {
  //   for(v of vowels) {
  //     freqv[v] = 0
  //   }
  // }

  for(let i = 0; i < word.length; i++) {
    let cr = word[i]
    if(!vowels.has(cr)) {
      continue
    } else {
      let j = i
      while(j < word.length && vowels.has(word[j])) {
        let cl = word[j]
        freqv[cl]++
        if(freqv[cl] === 1) {
          count++
        }
        if(count >= 5) total++
        j++
      }
      // reset
      for(let v of vowels) {
        freqv[v] = 0
      }
      count = 0
    }
  }
  return total

  // while(r < word.length) {
  //   let cr = word[r]
  //   console.log('l r', l, r, 'sub', word.substring(l, r+1), 'count', count, 'total', total)
  //   r++
  //   if(freqv[cr] === undefined) {
      
  //     while(l < r && count === 5) {
  //       console.log('  l r', l, r, 'sub', word.substring(l, r+1), total)
  //       total++
  //       let cl = word[l]
  //       l++
  //       if(freqv[cl] !== undefined) {
  //         freqv[cl]--
  //         if(freqv[cl] <1) {
  //           count--
  //         }
  //       }
  //     }
  //     l = r

  //   } else {
  //     freqv[cr]++
  //   }

  //   if(freqv[cr] === 1) {
  //     count++
  //   }
  //   if(count >= 5) {
  //     total++
  //   }
  // }

  
  return total

};