/**
 * 找不同
 * @param {string} s 
 * @param {string} t 
 * @return {character}
 */
const findTheDifference = function(s, t) {
  // 方法一：计数
  // let arr = new Array(26).fill(0)
  // for (const c of s) {
  //   arr[c.charCodeAt() - 'a'.charCodeAt()]++
  // }

  // for (const c of t) {
  //   arr[c.charCodeAt() - 'a'.charCodeAt()]--
  //   if (arr[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
  //     return c
  //   }
  // }

  // return ''

  // 方法二：求和
  // let sum1 = 0, sum2 = 0
  // for (const c of s) {
  //   sum1 += c.charCodeAt()
  // }

  // for (const c of t) {
  //   sum2 += c.charCodeAt()
  // }

  // return String.fromCharCode(sum2 - sum1)

  // 方法三：位运算
  let res = 0
  for (const c of s) {
    res ^= c.charCodeAt()
  }

  for (const c of t) {
    res ^= c.charCodeAt()
  }

  return String.fromCharCode(res)
}