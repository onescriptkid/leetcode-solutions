/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  // 3 6 7 11    h = 8 

  // 30 11 23 4 20    h=6  1,30  15

  // 1    15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30   45 / 2
  //         l                    m                    r
  
  // 1    15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30   45 / 2
  //         l                    m  r


  //  [2 2 2 3]  h = 6
  //  [1 2 3]    2
  //   l m r
  
  //  [2 2 2 3]  h = 6
  //  [1 2 3]    t=2,  h=5
  //   l m r
  
  //  [2 2 2 3]  h = 6
  //  [1 2 3]    t=1,  h=9
  //   l
  //   m
  //   r

  let max = piles[0]
  for(let pile of piles) {
    if(pile > max) {
      max = pile
    }
  }

  let l = 1
  let r = max
  let k = max

  while(l <= r) {
    let m = Math.floor((l + r) / 2)

    let hours = 0
    for(let pile of piles) {
      hours+=Math.ceil(pile / m)
    }
    // console.log('l m r', l, m,r, '  hours', hours, 'k', k)

    if(hours === h) {
      k = m
      r = m - 1
    }
    if(hours > h) {
      l = m + 1
    }
    if(hours < h) {
      k = m
      r = m - 1
    }
  }
  return k


};