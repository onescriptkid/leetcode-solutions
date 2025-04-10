/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {

  let vowels = new Set('aeiou'.split(''))

  let out = []
  let words = sentence.split(' ')
  for(let i = 0; i < words.length; i++) {
    let word = words[i]
    let goat = ""

    let first = word[0].toLowerCase()
    if(vowels.has(first)) {
      goat = word + 'ma'
    } else {
      goat = word.slice(1, word.length) + word[0] + "ma"
    }

    for(let j = 0; j <= i; j++) {
      goat+="a"
    }
    out.push(goat)
  }
  // console.log(out)
  return out.join(' ')
};