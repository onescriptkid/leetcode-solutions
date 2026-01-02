class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList2 {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  removeTail() {
    if (this.isEmpty()) return null;
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }

  isEmpty() {
    return this.head.next === this.tail;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.lfuCount = 0;

    this.nodeMap = new Map(); // key -> Node
    this.countMap = new Map(); // key -> freq
    this.freqMap = new Map(); // freq -> DLL

    // staging bucket (freq = 0)
    this.freqMap.set(0, new DoublyLinkedList2());
  }

  counter(key) {
    const freq = this.countMap.get(key);
    const node = this.nodeMap.get(key);

    // remove from old freq list
    this.freqMap.get(freq).removeNode(node);

    // bump frequency
    this.countMap.set(key, freq + 1);

    if (!this.freqMap.has(freq + 1)) {
      this.freqMap.set(freq + 1, new DoublyLinkedList2());
    }

    // add to new freq list (MRU)
    this.freqMap.get(freq + 1).insertHead(node);

    // update min freq
    if (freq === this.lfuCount && this.freqMap.get(freq).isEmpty()) {
      this.lfuCount++;
    }
  }

  get(key) {
    if (!this.nodeMap.has(key)) return -1;
    this.counter(key);
    return this.nodeMap.get(key).val;
  }

  put(key, value) {
    if (this.capacity === 0) return;

    // eviction
    if (!this.nodeMap.has(key) && this.nodeMap.size === this.capacity) {
      const list = this.freqMap.get(this.lfuCount);
      const evicted = list.removeTail();

      this.nodeMap.delete(evicted.key);
      this.countMap.delete(evicted.key);
    }

    // insert or update
    let node = this.nodeMap.get(key);
    if (!node) {
      node = new Node(key, value);
      this.nodeMap.set(key, node);
      this.countMap.set(key, 0);

      this.freqMap.get(0).insertHead(node);
      this.lfuCount = 0;
    } else {
      node.val = value;
    }

    this.counter(key);
  }
}
