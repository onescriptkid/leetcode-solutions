/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  // a a a b b c c c    
  // i
  // j
  // len


  let i = 0
  let len = 0
  while(i < chars.length) {
    let j = i
    let count = 0
    while(chars[i] === chars[j]) {
      j++
      count++
    }

    if(count === 1) {
      chars[len] = chars[i]
      len++
      i++
    } else {
      let str = chars[i] + count
      for(let k = 0; k < str.length; k++) {
        chars[len+k] = str[k]
      }
      len+=str.length
      i+=count
    }
  }
  return len
};