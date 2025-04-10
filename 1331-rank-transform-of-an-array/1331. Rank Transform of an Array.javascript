/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {

  let tmp = [...new Set(arr)].sort((a,b) => {
    if(a > b) { 
      return 1
    } else {
      return -1
    }
  })   

  let rank = {}
  for(let i = 0; i < tmp.length; i++) {
    let num = tmp[i]
    rank[num] = i + 1
  }


  let out = []
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i]

    out.push(rank[num])
  }
  return out
};