/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {

  nums.sort((a,b) => a > b ? 1 : -1)

  let out = []
  for(let query of queries) {
    let sum = 0
    let i = 0
    for(let num of nums) {
      sum+=num

      if(sum > query) {
        break;
      }

      i++
    }

    out.push(i)
  }
  return out

};