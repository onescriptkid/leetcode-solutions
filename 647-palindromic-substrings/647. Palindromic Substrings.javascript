/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

  // abccba
  //   i
  //   c
  //   cc
  // i
  // a
  // ab
  let count = 0
  // function isPalindrome() {

  // }
  function expand(l, r) {
    // abccba
    //   l
    //   r
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      // console.log(l, r, s.slice(l, r+1))
      l--
      r++
      count++
    }
    // let l = 0
    // let r = 0
  }

  for(let i = 0; i < s.length; i++) {
    expand(i, i) 
      // console.log('hey', i+1, (i+1) < s.length)
    if((i+1) < s.length) {
      expand(i, i+1)
    }
    // let opt1 = s[i]
    // let opt2 = s.slice(i, i+2)

    // let one = expand(opt1)

    // if(opt2.length === 2) {
    //   expand(opt2)
    // }
  }
  return count
};