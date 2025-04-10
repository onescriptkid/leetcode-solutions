/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let ttos = {}
  let stot = {}
  for(let i = 0; i < s.length; i++) {
    let cs = s[i]
    let ct = t[i]
    // console.log('cs', cs, 'ct', ct, 'ttos', ttos, 'stot',stot)
    if(ttos[ct] === undefined) {
      ttos[ct] = cs
    } 
    if(stot[cs] === undefined) {
      stot[cs] = ct
    }
    if(ttos[ct] !== cs) {
      return false
    }
    if(stot[cs] !==ct) {
      return false
    }
  }
  return true
};