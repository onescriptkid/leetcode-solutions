/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = []
  let split = path.split('/')   
  for(let str of split) {
    if(str === '.' || str === '') {
      //
    } else if(str === '..') {
      stack.pop()
    } else {
      stack.push(str)
    }
  }
  return '/' + stack.join('/')
};