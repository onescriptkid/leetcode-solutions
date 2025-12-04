/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  let maxprofits = new PriorityQueue((a,b) => a > b ? -1 : 1)
  let mincapital = new PriorityQueue((a,b) => a[0] > b[0] ? 1 : -1)

  for(let i = 0; i < capital.length; i++) {
    mincapital.push([capital[i], profits[i]])
  }

  for(let i = 0; i < k; i++) {

    while(mincapital.size() > 0 && mincapital.front()[0] <= w) {
      maxprofits.push(mincapital.pop()[1] )
    }

    if(maxprofits.size() === 0) return w 

    w+=maxprofits.pop()
  }

  return w
};