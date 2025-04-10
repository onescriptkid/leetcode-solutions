/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {

  let [l1,n1] = coordinate1.split('')
  let [l2,n2] = coordinate2.split('')

  // a => 0
  let alpha = 'abcdefgh'
  let letters = {}
  for(let i = 0; i < alpha.length; i++) {
    letters[alpha[i]] = i
  }

  //
  n1 = Number(n1) - 1
  n2 = Number(n2) - 1

  l1 = letters[l1]  
  l2 = letters[l2]

  let sum1 = n1 + l1
  let sum2 = n2 + l2
  // console.log('l1', l1, 'n1', n1, 'l2', l2, 'n2', n2)

  return sum1 % 2 === sum2 % 2




};