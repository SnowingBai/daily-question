/**
 * 分割数组为连续子序列
 * @param {number[]} nums 
 * @return {boolean}
 */
const isPossible = function(nums) {
  let countMap = new Map()
  let endMap = new Map()

  for (const x of nums) {
    const count = (countMap.get(x) || 0) + 1
    countMap.set(x, count)
  }

  for (const x of nums) {
    const count = countMap.get(x)
    if (count > 0) {
      const prevEndCount = endMap.get(x - 1)
      if (prevEndCount > 0) {
        endMap.set(x - 1, prevEndCount - 1)
        endMap.set(x, (endMap.get(x) || 0) + 1)
        countMap.set(x, count - 1)
      } else {
        const count1 = countMap.get(x + 1)
        const count2 = countMap.get(x + 2)
        if (count1 > 0 && count2 > 0) {
          countMap.set(x, count - 1)
          countMap.set(x + 1, count1 - 1)
          countMap.set(x + 2, count2 - 1)
          endMap.set(x + 2, (endMap.get(x + 2) || 0) + 1)
        } else {
          return false
        }
      }
    }
  }
}

// 思路：贪心
// 用两个map
// countMap存储数组元素的重复次数
// endMap存储子序列的结尾字符剩余个数
// 由于子序列个数至少3个
// 所以，优先判断遍历的当前元素是否可以继续排列在上一个子序列后，而不是新开辟子序列
// 因为排在上一个子序列后只需药一个就行，而开辟子序列需要至少3个元素
// 组成的子序列至少是[x, x + 1, x + 2]