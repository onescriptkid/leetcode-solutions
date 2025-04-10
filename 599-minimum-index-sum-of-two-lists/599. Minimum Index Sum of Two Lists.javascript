/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {

  let words1 = {}
  for (let i = 0; i < list1.length; i++) {
    let word = list1[i]
    words1[word] = i
  }
  let words2 = {}
  for(let i = 0; i < list2.length; i++) {
    let word = list2[i]
    words2[word] = i
  }

  let least = undefined;
  let out = []
  for(let i = 0; i < list2.length; i++) {
    let word = list2[i]

    if(words1[word] !== undefined) {
      let fi = i
      let si = words1[word]
      let sum = fi + si
      if(least === undefined) {
        least = sum
        out.push(word)
      } else if(sum < least) {
        least = sum
        out = [word]
      } else if(sum === least) {
        out.push(word)
      }
    }
  }
  return out
};