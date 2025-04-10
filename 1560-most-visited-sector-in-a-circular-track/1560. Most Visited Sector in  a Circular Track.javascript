/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {

  let counts = {
    1:0,
    2:0,
    3:0,
    4:0,
  }

  for (let i = 1; i < rounds.length; i++) {
    // 1 3
    let start = rounds[i - 1]
    let end = rounds[i]
    if(i === 1) {
      if(counts[start] === undefined) {
        counts[start] = 1
      } else {
        counts[start]++
      }
    }

    let curr = start + 1
    while(curr !== end) {
      if(counts[curr] === undefined) {
        counts[curr] = 1
      } else {
        counts[curr]++ 
      }
      curr++
      if(curr > n) {
        curr = 1
      }
    } 
    if(counts[curr] == undefined) {
      counts[curr] = 1
    } else {

      counts[curr]++
    }
  } 
  let max;
  for(let key of Object.keys(counts)) {
    let count = counts[key]
    if(max === undefined) {
      max = count
    } else if(count > max) {
      max = count
    }
  }
  // console.log(counts)

  let arr = []
  for(let key of Object.keys(counts)) {
    let count = counts[key]
    if(count === max) {
      arr.push([key, count])
    }
  }

  // arr.sort((a,b) => {
  //   if(a[1] > b[1]) {
  //     return 1 
  //   } else {
  //     return -1
  //   }
  // })
  // console.log(arr)

  return arr.map(v => Number(v[0])).sort((a,b) => a > b ? 1 : -1)
};