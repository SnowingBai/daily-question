/**
 * 不同路径
 * @param {number} m 
 * @param {number} n 
 */
const uniquePaths = function(m, n) {
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))

  for (let i = 0; i < n; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[n - 1][m - 1]
}

// 思路：
// 动态规划
// 一个非边缘的方格是来自左边方格或上边方格
// 所以:
// path[i][j] = path[i - 1][j] + path[i][j - 1]
// 边缘方格的路径只来自左边或上边，所以为1
