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
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    if(c === '.') {
      let any = false
      let keys = Object.keys(curr.children)
      for(let key of keys) {
        let valid = this.searchdot(curr.children[key], word.slice(i+1))
        if(valid) {
          any = true
          break
        }
      }
      return any
    } else {
      if(curr.children[c] === undefined) {
        return false
      }
      curr = curr.children[c]
    }
  }    
  return curr.end
};

WordDictionary.prototype.searchdot = function(curr, word) {
  for(let i = 0; i < word.length; i++) {
    let c = word[i]

    if(c === '.') {
      let keys = Object.keys(curr.children)
      let any = false
      for(let key of keys) {
        let valid = this.searchdot(curr.children[key], word.slice(i+1))
        if(valid) {
          any = true
          break
        }
      }
      return any

    } else {
      if(curr.children[c] === undefined) {
        return false
      }
      curr = curr.children[c]
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