/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {



  let str = '1'

  //  21                  => 1211 => 11 12 21
  // pc
  
  //  21      count=1,p=2, ns=12
  //  pc
  
  //  21      count=1,p=2, ns=12
  //   pc

  for(let i = 1; i < n; i++) {
    let nextstr = ''
    let count = 0
    let p = undefined
    for(let j = 0; j < str.length; j++) {
      let c = str[j]
      if(p === undefined) {
        count++
      } else if(c === p) {
        count++
      } else {
        nextstr+=`${count}${p}`
        count = 1
      } 
      p = c
    }
    nextstr+=`${count}${p}`
    // console.log('i', i, nextstr)

    str = nextstr

  }

  return str
};