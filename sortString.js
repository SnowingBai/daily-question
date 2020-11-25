/**
 * 上升下降字符串
 * @param {string} s 
 * @return {string}
 */
const sortString = function(s) {
  let list = new Array(26).fill(0)
  for (const char of s) {
    list[char.charCodeAt() - 'a'.charCodeAt()]++
  }
  let res = ''
  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (list[i]) {
        res += String.fromCharCode('a'.charCodeAt() + i)
        list[i]--
      }
    }

    for (let i = 25; i >= 0; i--) {
      if (list[i]) {
        res += String.fromCharCode('a'.charCodeAt() + i)
        list[i]--
      }
    }
  }

  return res
}

// 思路：
// 数组映射，key为当前字符与a字符差值
// 分别正序、逆序遍历数组，每使用一次，删除已用字符
