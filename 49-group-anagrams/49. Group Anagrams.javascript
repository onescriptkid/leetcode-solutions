/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < letters.length; i++) {
    ltov[letters[i]] = i 
  }

  let groups = {} 
  for(let str of strs) {

    let key = new Array(26).fill(0)
    for(let c of str) {
      let val = ltov[c]
      key[val]++
    }

    let keystr = key.join(',')

    if(groups[keystr] === undefined) {
      groups[keystr] = [str]
    } else {
      groups[keystr].push(str)
    }
  }
  let out = []
  for(let keystr in groups) {
    out.push(groups[keystr])
  }
  return out

};