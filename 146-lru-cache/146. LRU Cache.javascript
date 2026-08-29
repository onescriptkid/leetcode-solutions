class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.kv = {}

  this.head = new Node()
  this.tail = new Node()
  this.head.next = this.tail
  this.tail.prev = this.head
    
};

LRUCache.prototype.add = function(node) {
  //     <-node->
  // h->         <-tmp->
  let tmp = this.head.next
  node.prev = this.head
  node.next = tmp

  tmp.prev = node
  this.head.next = node
}

LRUCache.prototype.remove = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.kv[key] === undefined) return -1

  this.remove(this.kv[key])

  this.add(this.kv[key])

  return this.kv[key].value
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.kv[key] !== undefined) {
    this.remove(this.kv[key])
    this.size--
  }

  let node = new Node(key, value)
  this.kv[key] = node
  this.add(node)
  this.size++

  if(this.size > this.capacity) {
    let lru = this.tail.prev
    this.remove(lru)
    delete this.kv[lru.key]
    this.size--
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */