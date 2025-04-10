/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    
  // 0 ------ n-1
  let track = tickets[k]
  let t = k

  // [2 3 2]
  //      t
  // [1 3 2]
  // [3 2] 1
  let sum = 0
  while(tickets.length >0) {
    let curr = tickets.shift()
    curr = curr - 1
    t--
    sum++
    // console.log(sum, [curr], tickets, t)

    if(curr !== 0) {
      tickets.push(curr)
    }
    if(curr === 0 && t === -1) {
      break;
    }

    if(t === -1) {
      t = tickets.length - 1
    }

  }
  return sum;
};