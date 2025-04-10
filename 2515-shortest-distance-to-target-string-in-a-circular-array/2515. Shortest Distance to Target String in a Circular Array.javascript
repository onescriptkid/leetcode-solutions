/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
  if(words[startIndex] === target) return 0
  if(!new Set(words).has(target)) return -1

  let back = 1
  let i = (startIndex - 1 + words.length) % words.length
  while(i !== startIndex) {
    if(words[i] === target) {
      break;
    }
    back++
    i = (i - 1 + words.length) % words.length
  }

  let forw = 1
  let j = (startIndex + 1 + words.length) % words.length
  while(j !== startIndex) {
    if(words[j] === target) {
      break;
    }
    forw++
    j = (j + 1 + words.length) % words.length
  }
  return back > forw ? forw : back

  // let index;
  // for(let i = 0; i < words.length; i++) {
  //   let word = words[i]
  //   if(word === target) {
  //     index = i
  //     break;
  //   }
  // }
  // if(index === undefined) return -1
  // // a b c d e f
  // // 0 1 2 3 4 5
  // //   s       i

  // // 0 1 2 3 4 5
  // // i       s 
  // let forward;
  // if(startIndex > index) {
  //   forward = words.length - startIndex + index
  // }  else {
  //   forward = index - startIndex
  // }

  // let backward;
  // if(startIndex > index) {
  //   backward = startIndex - index
  // } else {
  //   backward = startIndex + words.length - index
  // }
  // console.log('f', forward, 'b', backward, 'index', index)
  // return forward < backward ? forward : backward
  // startIndex - i
};