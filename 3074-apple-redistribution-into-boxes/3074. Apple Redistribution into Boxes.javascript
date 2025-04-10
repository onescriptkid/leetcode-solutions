/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  capacity = capacity.sort((a,b) => a > b ? -1 : 1)

  let sum = 0
  for(let i = 0; i < apple.length; i++) {
    sum+=apple[i]
  }
  // 5 4 3 2 1
  // 1 3 2
  let i = 0 // apples
  let j = 0 // capacity
  console.log(sum, capacity)
  let curr = capacity[j]
  while(j < capacity.length && sum > 0) {
    let c = capacity[j]
    sum-=c
    // while(c > 0) {
    //   let test = c - a
    //   if(test < 0) break;
    // }
    j++
  }
  return j
};