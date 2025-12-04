/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let adj = {}
  for(let word of wordList) {
    for(let i = 0; i < word.length; i++) {
      let star = word.slice(0, i) + "*" + word.slice(i+1)
      if(adj[star] === undefined) adj[star] = []
      adj[star].push(word) 
    }
  }

  let queue = [beginWord]
  let visited = new Set()
  let level = 1

  while(queue.length > 0) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let curr = queue.shift()
      console.log('curr', curr)

      let stars = []
      for(let i = 0; i < curr.length; i++) {
        let star = curr.slice(0, i) + "*" + curr.slice(i+1)
        stars.push(star)
      }

      for(let star of stars) {
        if(adj[star] === undefined) continue
        for(let word of adj[star]) {
          if(word === endWord) return level + 1
          if(visited.has(word)) continue
          visited.add(word)
          queue.push(word)
        }
      }
    }
    level++
  }

  return 0
};