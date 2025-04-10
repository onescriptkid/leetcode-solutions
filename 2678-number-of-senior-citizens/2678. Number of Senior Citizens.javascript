/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {

  //7868190130 M 75 22
  //0123456789 0 12 34
  let out = 0
  for(let detail of details) {

    let age = Number(detail.substring(11,13))
    if(age > 60) {
      out++
    }
  }
  return out
};