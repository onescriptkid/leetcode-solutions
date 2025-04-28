/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

  // abca
  // l  r
  
  // aaxbaaaa
  //   l r
  
  // aaabxaaa
  //   l r
  
  // aaxbaaaa
  //   l r

  // cbbcc
  //  l r

  let flag = false
  let l = 0
  let r = s.length - 1
    
  while(l < r) {
    if(s[l] !== s[r]) {
      // try l+1
      let ol = l+1
      let or = r
      let valid = true
      while(ol < or) {
        if(s[ol] !== s[or]) {
          valid = false
          break;
        }
        ol++
        or--
      }
      if(valid) return true

      // try r-1
      ol = l
      or = r -1
      // console.log('ol or', ol, or, s[ol], s[or])
      while(ol < or) {
        if(s[ol] !== s[or]) {
          return false
        }
        ol++
        or--
      }
      return true

    }
    l++
    r--
  }

  return true
};