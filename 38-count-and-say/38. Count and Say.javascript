/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = '1'
  for(let i = 1; i < n; i++) {
    let prev
    let nextstr = ''
    let count = 1

    for(let c of str) {
      if(prev === undefined) {
        prev = c
      } else if(prev === c) {
        count++
      } else if(prev !== c) {
        nextstr += `${count}${prev}`
        prev = c
        count=1
      }
    }
    
    nextstr+=`${count}${prev}`
    str = nextstr

  }   
  return str
};