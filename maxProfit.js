/**
 * 买卖股票的最佳时机含手续费
 * @param {number[]} prices 
 * @param {number} fee 
 * @return {number}
 */
const maxProfix = function(prices, fee) {
  let n = prices.length
  let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))

  // 初始化
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[n - 1][0]
}

// 思路：
// 动态规划
// 两种情况：买入、卖出
// 卖出[0]：昨天情况 vs 今天卖出 比最大值
// 买入[1]：昨天情况 vs 今天买入 比最大值
// 最终的结果：一定是全部卖出的

/**
 * 方法二
 */
const maxProfix1 = function(prices, fee) {
  let sell = 0
  let buy = -prices[0]

  for (const price of prices) {
    buy = Math.max(buy, sell - price)
    sell = Math.max(sell, buy + price - fee)
  }

  return sell
}