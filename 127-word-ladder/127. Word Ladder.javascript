/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let adj = {}
  for(let word of wordList) {
    // hot
    for(let i = 0; i < word.length; i++) {
      let edge = word.slice(0, i) + "*" + word.slice(i+1)
      if(adj[edge] === undefined) adj[edge] = []
      adj[edge].push(word)
    }
  }

  let queue = [beginWord]
  let level = 1
  let visited = new Set([beginWord])

  while(queue.length > 0) {
    let length = queue.length
    for(let i = 0; i < length; i++) {
      let curr = queue.shift()

      let edges = []
      for(let j = 0; j < curr.length; j++) {
        let edge = curr.slice(0, j) + "*" + curr.slice(j+1)
        edges.push(edge)
      }

      for(let edge of edges) {
        if(adj[edge] === undefined)continue
        for (let v of adj[edge]) {
          if(v === endWord) return level + 1
          if (visited.has(v)) continue
          visited.add(v)
          queue.push(v)
        }
      }
    }
    level++
  }
  return 0

    
};