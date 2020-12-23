/**
 * 字符串中的第一个唯一字符
 * @param {string} s 
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}
  
  for (const [index, val] of Array.from(s).entries()) {
    if (val in obj) {
      obj[val].count++
    } else {
      obj[val] = {
        count: 1,
        index
      }
    }
  }

  for (const key in obj) {
    if (obj[key] && obj[key].count === 1) {
      return obj[key].index
    }
  }

  return -1
}

// 思路：
// 第一次遍历obj记录出现的次数和索引
// 第二次遍历查找出count只有一次的元素的索引
// 方法二：
// 使用map记录出现次数
// 遍历s找出map中值为1的元素的索引