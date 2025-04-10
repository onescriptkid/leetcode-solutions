/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

  let orig = score.slice()

  let sorted = score.sort((a,b) => a < b ? 1 : -1)

  // 10 3 8 9 4    10 9 8 4 3
  //
  let imap = {}
  for(let i = 0; i < sorted.length; i++) {
    let s = sorted[i]
    imap[s] = i
  }

  let out = []
  for(let s of orig) {
    let place = imap[s]

    if(place === 0) {
      out.push('Gold Medal')
    } else if(place === 1) {
      out.push("Silver Medal")
    } else if(place === 2) {
      out.push("Bronze Medal")
    } else {
      out.push(""+(place+1))
    }
  }
  return out
  // let first
  // let second
  // let third
  // for(let s of score) {

  //   if(first === undefined) {
  //     first = s
  //   } else if(s > first) {
  //     third = second
  //     second = first
  //     first = s
  //   } else if(second === undefined) {
  //     second = s
  //   } else if(s > second) {
  //     third = second
  //     second = s
  //   } else if(third === undefined) {
  //     third = s
  //   } else if(s > third) {
  //     third = s
  //   }
  // }
  // console.log('first', first, 'second', second, 'third', third)

  // let out = []
  // for(let s of score) {

  //   if(s === first) {
  //     out.push('Gold Medal')
  //   } else if(s === third) {
  //     out.push('Bronze Medal')
  //   } else if(s === second) {
  //     out.push('Silver Medal')
  //   } else {
  //     out.push(""+s)
  //   }
  // }
  // return out
};