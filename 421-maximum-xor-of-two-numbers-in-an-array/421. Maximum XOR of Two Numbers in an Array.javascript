class TrieNode {
  constructor() {
    this.children = {}
  }
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
 const root = new TrieNode()

  // Insert a number into the trie
  const insert = (num) => {
    let node = root
    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1
      if (!node.children[bit]) {
        node.children[bit] = new TrieNode()
      }
      node = node.children[bit]
    }
  }

  // Find max XOR partner for num
  const query = (num) => {
    let node = root
    let xor = 0

    for (let i = 31; i >= 0; i--) {
      let bit = (num >> i) & 1
      let want = bit ^ 1  // opposite bit

      if (node.children[want]) {
        xor |= (1 << i)
        node = node.children[want]
      } else {
        node = node.children[bit]
      }
    }

    return xor
  }

  // Build trie
  for (let num of nums) insert(num)

  // Find maximum XOR
  let max = 0
  for (let num of nums) {
    max = Math.max(max, query(num))
  }

  return max
};