/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let ltov = {}
  for(let i = 0; i < alphabet.length; i++) {
    ltov[alphabet[i]] = i
  }

  let groups = {} 
  for(let str of strs) {
    let keyarr = new Array(26).fill(0)

    for(let c of str) {
      let val = ltov[c]
      keyarr[val]++
    }
    let key = keyarr.join(',')
    if(groups[key] === undefined) {
      groups[key] = [str]
    } else {
      groups[key].push(str)
    }
  }
  let out = []
  for(let key of Object.keys(groups)) {
    let group = groups[key]
    out.push(group)
  }

  return  out
};