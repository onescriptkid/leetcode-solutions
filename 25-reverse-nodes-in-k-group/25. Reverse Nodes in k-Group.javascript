/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
*/
var reverseKGroup = function (head, k) {
  // !!!!! TRACK prevEnd is the CRITICAL piece !!!
  //   1->2->3->4->5->6->7

  //   1->2->3->4->5->6->7 
  // p       c
  //         r
  //   s        e

  //   1<-2<-3  4->5->6->7 
  // p       c
  //         r
  //   s        e
  // h-3->2->1  4->5->6->7   h=r  s and e are reversed
  // p       c
  //   r
  //         s  e
  // h-3->2->1  4->5->6->7   prev is the (s) which is the rev end. curr is the end
  //         p  c
  //   r
  //         s  e

  // h-3->2->1  4->5->6->7
  //         p  c
  //                  r
  //            s        e
  // h-3->2->1  4<-5<-6->7
  //         p  c
  //                  r
  //            s        e
  // h-3->2->1~~6->5->4  7
  //         p  c
  //            r
  //                  s  e
  // h-3->2->1~~6->5->4  7
  //                  p  c
  //            r
  //                  s  e

  // h-3->2->1~~6->5->4  7    if we can't reverse, just fuse preHead (s) to (e)
  //                  p  c
  //            
  //                    

  // !!!!! TRACK prevEnd is the CRITICAL piece !!!
  // Get start and end range
  // Reverse
  // update curr and end

  let curr0 = head
  let prevEnd = null
  while (curr0 !== null) {

    // Get start and end of range
    let s = curr0
    let e = curr0
    let i = 0
    while (e !== null && i < k) {
      e = e.next
      i++
    }

    // If there are k more nodes, reverse
    if (i === k) {
      let rev = reverse(s, e)
      // console.log('  ','c', curr0?.val, '-', 's,e', [s?.val, e?.val]
      // If we just started, head = reverse list, head = [4,3]
      // Otherwise, the fuse the prevEnd with the new reversed group
      if (prevEnd === null) {
        head = rev
      } else {
        prevEnd.next = rev
      }
    } else {
      if (prevEnd !== null) prevEnd.next = s
    }

    // PrevEnd is the start of the reversed group 3->2->1  // 1 was the start, but is now the end of the group.
    // console.log('head', head)
    // console.log("")
    prevEnd = s
    curr0 = e
  }

  // Special range reverse - ends at head
  function reverse(curr, end) {
    //   1 2 3 4
    // p c
    let prev = null
    while (curr !== null && curr !== end) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }

  return head

};