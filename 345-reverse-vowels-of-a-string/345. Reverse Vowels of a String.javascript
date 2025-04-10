/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   let vowelSet = new Set(['a','e','i','o','u'])
   let vowels = []
   let indicies = []

  for(let i = 0; i < s.length; i++) {
    let c = s[i]

    if(vowelSet.has(c)) {
      vowels.push(c)
      indicies.push(i)
    }
  }
  //Reverse
  vowels.reverse()

  for(let i = 0; i < indicies.length; i++) {
    let vi = indicies[i]
    let vowel = vowels[i]

    s = s.substring(0, vi) + vowel + s.substring(vi+1)


  }
  console.log(s)
  return s

};