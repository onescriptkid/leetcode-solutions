/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

  let words = title.split(' ')

  let out = []
  for(let word of words) {
    let next = word.toLowerCase()

    if(next.length > 2) {
      next = next[0].toUpperCase() + next.substring(1)
    }
    out.push(next)
  }
  return out.join(' ')
};