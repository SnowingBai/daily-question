/**
 * 使用最小花费爬楼梯
 * @param {number[]} cost 
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  const len = cost.length
  if (len < 3) return cost[len - 1]

  for (let i = 2; i < len; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i]
  }

  return Math.min(cost[len - 1], cost[len - 2])
}

// 思路：
// 动态规划
// dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
// return Math.min(dp[i - 1], dp[i - 2])
// 最后一步的花费无需计算在总花费中
