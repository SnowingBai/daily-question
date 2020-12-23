/**
 * 二叉树的锯齿形层次遍历
 * @param {TreeNode} root 
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  let list = []
  def(root, list, 0, true)
  function def(node, list, level, isOrder) {
    if (node === null || node.val === null) {
      return  false
    }

    if (list[level]) {
      isOrder ? list[level].push(node.val) : list[level].unshift(node.val)
    } else {
      list[level] = [node.val]
    }

    def(node.left, list, level + 1, !isOrder)
    def(node.right, list, level + 1, !isOrder)
  }
  return list
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// 思路：
// 深度递归