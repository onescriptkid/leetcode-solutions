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
      let children = Object.keys(curr.children)
      let found = false
      // console.log('word', word, '-', children)
      for(let child of children) {
        let valid = this.searchdot(word.slice(i+1),curr.children[child])
        if(valid) {
          found = true
          break;
        }
      }

      return found

    } else {
      if(curr.children[c] === undefined) {
        return false
      }
      curr = curr.children[c]
    }
  }    
  return curr.end
};

WordDictionary.prototype.searchdot = function(word, curr) {
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    if(c === '.') {
      let children = Object.keys(curr.children)
      let found = false
      for(let child of children) {
        let valid = this.searchdot(word.slice(i+1), curr.children[child])
        if(valid) {
          found = true
          break
        }
      }
      return found
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