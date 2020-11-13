/**
 * 奇偶列表
 * @param {ListNode} head 
 * @return {ListNode}
 */
const oddEvenList = function(head) {
  if (head === null || head.next === null) return head

  let evenHead = head.next, odd = head, even = evenHead
  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }

  odd.next = evenHead

  return head
}

// 思路：
// init
// 偶数链表起始节点：head.next (用于最后拼接)
// 奇数节点：head
// 偶数节点：偶数链表起始节点

// Start 遍历 => 使得奇数位置的节点相邻，偶数位置的节点相邻
// 奇数下一个节点也应为奇数位置节点 odd.next = even.next
// 奇数当前节点跳跃到下一个 odd = odd.next
// 同理偶数节点操作
// even.next = odd.next
// even = even.next
// End 遍历

// 在奇数节点后拼接偶数链表的起始节点
// odd.next = evenHead