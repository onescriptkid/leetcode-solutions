/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let bset = new Set(banned)
  let letters = new Set('abcdefghijklmnopqrstuvwxyz')
  let freq = {}
  let word = ""
  for(let i = 0; i < paragraph.length; i++) {
    let c = paragraph[i].toLowerCase()

    if(letters.has(c)) {
      word+=c
    } else {
      if(word !== "") {
        if(!bset.has(word)) {
          freq[word] = (freq[word] || 0) + 1
        }
        word = ""
      }
    }
  }

  if (word !== "") {
    if (!bset.has(word)) {
      freq[word] = (freq[word] || 0) + 1
    }
  }

  let max
  let maxword
  for(let word of Object.keys(freq)) {
    let count = freq[word]
    if(max === undefined) {
      max = count
      maxword = word
    } else if(count > max) {
      max = count
      maxword = word
    }
  }

  return maxword



};