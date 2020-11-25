/**
 * 两数相加
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTowNumbers = function(l1, l2) {
  let prev = curr = null
  let carry = 0 // 进位

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0
    const n2 = l2 ? l2.val : 0
    const sum = n1 + n2 + carry

    if (!prev) {
      prev = curr = new ListNode(sum % 10)
    } else {
      curr.next = new ListNode(sum % 10)
      curr = curr.next
    }

    carry = Math.floor(sum / 10)

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if (carry) {
    curr.next = new ListNode(carry)
  }

  return prev
}
