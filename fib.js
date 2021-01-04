/**
 * 斐波那契数
 * @param {number} n 
 * @return {number}
 */
const fib = function(n) {
  if (n < 2) return n

  let n1 = 0, n2 = 0, res = 1
  for (let i = 2; i <= n; i++) {
    n1 = res
    n2 = n1
    res = n1 + n2
  }

  return res
}

// 思路：
// 动态规划
// 公式：f(n) = f(n - 1) + f(n - 2)
