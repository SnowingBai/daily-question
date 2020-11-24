/**
 * 排序列表
 * @param {ListNode} head 
 * @return {ListNode}
 */
const sortList = function(head) {
  // 自顶向下
  return toSortList(head, null)
}

function toSortList(head, tail) {
  if (head === null) return head

  if (head.next === tail) {
    head.next = null
    return head
  }
  
  let slow = head, fast = head
  while (fast !== tail) {
    slow = slow.next
    fast = fast.next

    if (fast !== tail) {
      fast = fast.next
    }
  }
  const mid = slow
  return merge(toSortList(head, mid), toSortList(mid, tail))
}

function merge(head1, head2) {
  if (temp1) {
    temp.next = temp1
  }

  if (temp2) {
    temp.next = temp2
  }

  return newList.next
}

// 思路：
// 规定时间复杂度为O(n log(n))
// 可用的排序有：二分、快排（最坏情况下为O(n^2)）、归并、堆排序，这里使用归并
// 归并：通过快慢指针找到中点，快指针跳两步，慢指针跳一步，当快指针跳完，此时慢指针为中点
