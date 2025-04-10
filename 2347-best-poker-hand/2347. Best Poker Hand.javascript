/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {

  let flush = false;
  let counts = {}
  for(let i = 0; i < suits.length; i++) {
    let suit = suits[i]
    if(counts[suit] === undefined) {
      counts[suit] = 1
    } else {
      counts[suit]++
    }
    if(counts[suit] === 5) return "Flush"
  }    

  counts = {}
  let hasPair
  for(let i = 0; i < ranks.length; i++) {
    let rank = ranks[i]
    if(counts[rank] === undefined) {
      counts[rank] = 1
    } else {
      counts[rank]+=1
    }
    if(counts[rank] === 3) return "Three of a Kind"
    if(counts[rank] === 2) {
      hasPair = true
    }
  } 
  if(hasPair) {
    return "Pair"
  }
  return "High Card"

};