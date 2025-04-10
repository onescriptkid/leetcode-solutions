/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {

  let xor = 0
  for(let i = 0; i < derived.length; i++)  {
    xor = xor ^ derived[i]
  }
  return xor === 0
  // derived  1   1   0
  // original 0^1 1^2 2^0
  
  // poss     1   0
  // poss     0   1
  //              1   0
  //              0   1  
  //          0       0
  //          1       1

  // derived  1 1 1 1 1 1 0         
  // original 0 1 0 1 0 1 0

  // derived  1 1
  // original 1 0
  
  // derived  1 1
  // original 0 1

  // derived  0 0 0
  // original 1 1 1
  
  // derived  1 1 0
  // original 1 0 1
  
  // derived  0 1 0 1 0
  // original 1 1 0 0 1
};