/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

  // icecream
  // x x  xx
  // icecream
  let vowel = new Set('aeiouAEIOU')
  let arr = s.split('')
  
  let l = 0
  let r = s.length - 1

  while(l < r) {
    // console.log('arr', arr.join(''))

    while(l < r && !vowel.has(s[l])  ) {
      l++
    }

    while(l <r && !vowel.has(s[r])) {
      r--
    }
    // console.log('lr',l,r,'s[l,r]', s[l], s[r])

    if(vowel.has(s[l]) && vowel.has(s[r])) {
      let tmp = arr[l]
      arr[l] = arr[r]
      arr[r] = tmp
    }

    l++
    r--
  }

  return arr.join('')


};