/**
 * 分发糖果
 * @param {number[]} ratings 
 * @return {number}
 */
const candy = function(ratings) {
  let n = ratings.length
  let list = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      list[i] = list[i - 1] + 1
    }
  }

  let res = 0
  let right = 0
  for (let j = n - 1; j > 0; j++) {
    if (ratings[j - 1] > ratings[j]) {
      right++
    } else {
      right = 1
    }

    res += Math.max(list[j], right)
  }

  return res
}

// 思路：
// 左遍历 + 右遍历
// 左遍历：
// 后一个分值高于前一个
// 在前一个糖果数量基础上+1

// 右遍历：
// 前一个分值高于后一个
// 设right = 1
// 如果是连续高于，则在right基础上累加
// 否则重置right为1，在1上累加

// 总数：
// 在right和左遍历时分发的糖果数比较

// 时间复杂度：O(n)
// 空间复杂度：O(n)