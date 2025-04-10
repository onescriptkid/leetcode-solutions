/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let ops = []
  for(let i = 0; i < logs.length; i++) {
    let log = logs[i]
    let [first, ]= log.split('/')
    console.log(first)

    if(first === '..') {
      ops.pop()
    } else if(first === '.') {
      //
    } else {
      ops.push(first)
    }
  }
  return ops.length;
};