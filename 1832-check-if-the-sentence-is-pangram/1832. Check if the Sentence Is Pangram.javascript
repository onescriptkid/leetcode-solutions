/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   let set = new Set()

   for(let i = 0; i < sentence.length; i++) {
    let c = sentence[i]
    // set.delete(c)
    set.add(c)
   } 
   if(set.size === 26) {
    return true
   }
   return false
  //  console.log(set)
  //  if(set.size !== 0 ) {
  //   return false
  //  } {
  //   return true
  //  }
};