/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a > b ? 1 : -1)   
  //  1 1 1 2 2 2 2 3 3 3    limit = 4

  let i = 0
  let j = people.length - 1 
  // console.log(people)

  let count = 0
  while(i <= j) {
    let left = people[i]
    let right = people[j]
    let sum = left + right
    // console.log('i j', left, right, 'count', count)
    if(i === j) {
      count++
      break;
    } else if(sum <= limit) {
      count++
      i++
      j--
    } else {
      count++
      j--
    }
  }
  return count

};