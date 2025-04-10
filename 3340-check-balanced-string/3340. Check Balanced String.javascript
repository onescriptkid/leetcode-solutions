/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {

  let evens = []
  let odds = []
  for(let i = 0; i < num.length; i++) {
    let c = num[i]
    if(i % 2 === 0) {
      evens.push(c)
    } else {
      odds.push(c)
    }
  } 

  function digitSum(str) {
    let sum = 0
    for(let i = 0; i < str.length; i++) {
      let c = Number(str[i])
      sum+=c
    }
    return sum
  }
  return digitSum(evens) === digitSum(odds) 
};