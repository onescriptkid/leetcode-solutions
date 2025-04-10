/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

   let words = s.split(' ')

  let newwords = []
   for(let i = 0; i < k; i++)  {
    newwords.push(words[i])
   }
   return newwords.join(' ')
};