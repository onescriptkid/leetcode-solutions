/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function(s) {
  // 45320
  //  cn
  let str = ""
  let flag = false
  for(let i = 0; i < s.length; i++) {
    let c = s[i]
    let n = s[i+1]
    if(n !== undefined) {
      let numc = Number(c)
      let numn = Number(n)
       if(numn %2 === numc %2 &&  numn < numc && flag === false) {
        str+=n
        str+=c
        flag=true
        i++
      } else {
        str+=c
      }
    } else {
      str+=c
    }
  }   
  return str
};