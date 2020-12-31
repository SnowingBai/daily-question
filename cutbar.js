/**
 * 切分木棒
 * @param {number} m 
 * @param {number} n 
 * @return {number} 
 */
var curbar = function(m, n) {
  let times = 0
  let curr = 1 // 当前长度

  while (n > curr) {
    curr += curr < m ? curr : m
    times += 1
  }

  return times
}

// 思路：
// 逆向思考
// 改为m个人去拼接木棒
// 多少次后拼接到n的长度

/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @param {number} curr 当前长度
 */
var curbar2 = function(m, n, curr) {
  if (curr >= n) {
    0
  } else if (curr < m) {
    curbar2(m, n, curr * 2) + 1
  } else {
    curbar2(m, n, curr + m) + 1
  }
}

// 思路：
// 深度递归