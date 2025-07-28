/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
   // 
   let simple = []

   // /home//foo/../
   // 'home','', 'foo'

   let split = path.split('/')
   for(let str of split) {
    if(str === '.' || str === '') {
      //
    } else if(str === '..') {
      simple.pop()
    } else {
      simple.push(str)
    }
   }
   return '/' + simple.join('/')

};