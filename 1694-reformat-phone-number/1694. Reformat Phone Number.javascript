/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  
  let str = ""
  for(let c of number) {
    if(c !== '-' && c !== ' ') {
      str+=c
    }
  }

  // 01234
  // 01234567      l=8,   8-4 = 4  
  // 

  let i = 0
  let out = ''
  while(i < str.length - 4) {
    let slice = str.slice(i, i+3) 
    out+=slice + '-'
    i+=3
  }

  let left = str.length -i
  if(left === 2) {
    out+=str.slice(i, i+2)
  } else if(left === 3) {
    out+=str.slice(i, i+3)
  } else if(left === 4) {
    out+=str.slice(i, i+2)
    out+='-'+str.slice(i+2, i+4)
  }
  return out

};