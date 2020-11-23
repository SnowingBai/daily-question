/**
 * 对链表进行插入排序
 * @param {ListNode} head 
 * @return {ListNode}
 */
const insertionSortList = function(head) {
  if (head === null || head.next === null) return head

  let newList = new ListNode(0)
  newList.next = head
  let cur = head

  while (cur && cur.next) {
    if (cur.val <= cur.next.val) {
      cur = cur.next
    } else {
      let temp = cur.next
      cur.next = cur.next.next

      let prev = newList

      while (prev.next.val <= temp.val) {
        prev = prev.next
      }

      temp.next = prev.next
      prev.next = temp
    }
  }

  return newList.next
}

function ListNode(val) {
  this.val = val
  this.next = null
}

// 思路：
// 遍历找到带插入的节点（该节点大于下一个节点），移除该节点（移除前保存）
// 在排好序的链表里从头遍历，找到合适位置插入
