class TrieNode {
  constructor() {
    this.children = {}
    this.end = false
  }
}
var WordDictionary = function() {
  this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let curr = this.root
  for(let c of word) {
    if(curr.children[c] === undefined) {
      curr.children[c] = new TrieNode()
    }
    curr = curr.children[c]
  }
  curr.end = true

};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let curr = this.root
  // console.log('search', 'curr', Object.keys(curr.children), word)
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    if(c !== '.') {
      if(curr.children[c] === undefined) {
        return false
      }
      curr = curr.children[c]
    } else {
      let children = Object.keys(curr.children)
      let valid = false
      for(let child of children) {
        let search = this.searchHelper(curr.children[child], word.slice(i+1))
        if(search) {
          return true
        }
      }
      return false
    }
  }
  return curr.end
    
};

WordDictionary.prototype.searchHelper = function(curr, word) {
  // console.log('  helper', 'curr', Object.keys(curr.children), word)
  for (let i = 0; i < word.length; i++) {
    let c = word[i]
    if (c !== '.') {
      if (curr.children[c] === undefined) {
        return false
      }
      curr = curr.children[c]
    } else {
      let children = Object.keys(curr.children)
      let valid = false
      for (let child of children) {
        let search = this.searchHelper(curr.children[child], word.slice(i + 1))
        if (search) {
          return true
        }
      }
      return false
    }
  }
  return curr.end

}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */