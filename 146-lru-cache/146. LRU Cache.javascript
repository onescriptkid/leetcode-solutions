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

LRUCache.prototype.remove = function(node) {
  //          <-n->
  // <-next->         <-prev->   

  let next = node.next
  let prev = node.prev
  prev.next = next
  next.prev = prev
}

LRUCache.prototype.add = function(node) {
  //       <-node->
  //  h->           <-tmp->

  let tmp = this.head.next
  node.next = tmp
  node.prev = this.head

  this.head.next = node
  tmp.prev = node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.kv[key] === undefined) {
    return -1
  }
  let node = this.kv[key]
  this.remove(node)
  this.add(node)

  return node.value
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
  this.add(node)
  this.size++
  this.kv[key] = node

  if(this.size > this.capacity) {
    let lru = this.tail.prev
    delete this.kv[lru.key]

    this.remove(lru)
    this.size--
  }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */