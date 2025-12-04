/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

  // /home/foo => [home, foo]
  // /home//foo => [home, '', foo]
  let split = path.split('/')
  let out = []

  for(let dir of split) {
    if(dir === '') {
     // continue 
    } else if(dir === '.') {
      continue
    } else if(dir === '..') {
      out.pop()
    } else {
      out.push(dir)
    }
  }

  let outstr = out.join('/')
  return `/${outstr}`


};