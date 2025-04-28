/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

  // 0 1 2 3 4 5 6 7
  // c o d e l e e t

  // 4 5 6 7 0 2 1 3
  //         

  let arr = new Array(s.length).fill('#')

  for(let i = 0; i < s.length; i++) {
    let index = indices[i]

    arr[index] = s[i]
  }
  return arr.join('')


};