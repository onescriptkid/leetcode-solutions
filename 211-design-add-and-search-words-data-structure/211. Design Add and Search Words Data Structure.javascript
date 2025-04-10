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
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root
  for (let c of word) {
    if (curr.children[c] === undefined) {
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
WordDictionary.prototype.search = function (word) {
  let curr = this.root
  for(let i = 0; i < word.length; i++) {
    let c = word[i]

    if(c !== '.') {
      if(curr.children[c] === undefined) return false
    } else {
      return this.searchdot(curr, word.slice(i))
    }
    curr = curr.children[c]
  }
  return curr.end
};

WordDictionary.prototype.searchdot = function(curr, word) {
  // console.log('curr', Object.keys(curr.children), 'word', word)
  for(let i = 0; i < word.length; i++) {
    let c = word[i]
    //                
    //       [b  p         m]
    //       a    a       a
    //      d      d     d

    if(c !== '.') {
      if(curr.children[c] === undefined) return false
    } else {
      let chars = Object.keys(curr.children)
      for(let char of chars) {
        let search = this.searchdot(curr.children[char], word.substring(i+1))
        if(search) return search    
      }
      return false
    }
    curr = curr.children[c]
  }
  return curr.end
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */